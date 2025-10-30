import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { PageHeaderComponent } from 'src/app/shared/componets/page-header/page-header.component';
import { CsNgSelectComponent } from 'src/app/_cs/cs-ng-select/cs-ng-select.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, PageHeaderComponent, CsNgSelectComponent],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  isLoading = false;
  isEdit = false;
  editUserId?: string;
  private originalUser: any | null = null;

  // Dropdown options
  allowedRoles = ['ADMIN', 'USER'] as const;
  rolesOptions = this.allowedRoles.map(r => ({ value: r, label: r }));

  private phoneRegex = /^\+?[0-9]{7,15}$/;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      org: ['', Validators.required],
      roles: [[], Validators.required],
      mobilenumber: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
      alternateemail: ['', [Validators.email]],
      alternatemobilenumber: ['', [Validators.pattern(this.phoneRegex)]],
      profile: this.fb.group({
        fullName: [''],
        department: [''],
      }),
    });

    // Prefill form if navigated with state (edit flow)
    this.prefillFromNavigationState();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.invalid) return;

    this.isLoading = true;
    const v = this.userForm.value;
    // Always normalize roles to allowed values
    const normalizedRoles: string[] = Array.isArray(v.roles)
      ? v.roles.filter((r: string) => this.allowedRoles.includes(r as any))
      : [];

    // Base payload for create flow (full object)
    const createPayload = {
      username: v.username,
      email: v.email,
      name: v.name,
      org: v.org,
      profile: v.profile,
      isActive: true,
      roles: normalizedRoles,
      mobilenumber: v.mobilenumber,
      alternateemail: v.alternateemail || undefined,
      alternatemobilenumber: v.alternatemobilenumber || undefined,
    } as any;

    // For update flow, only send allowed fields and only the ones that changed
    const buildUpdatePayload = () => {
      const update: any = {};
      const orig = this.originalUser || {};

      // Allowed top-level fields on update
      // role (if present), org, profile (only certain keys), isActive, roles, mobilenumber, alternateemail, alternatemobilenumber
      if (typeof (v as any).role !== 'undefined' && (v as any).role !== orig.role) {
        update.role = (v as any).role;
      }
      if (v.org !== orig.org) {
        update.org = v.org;
      }
      // Only include profile subfields that are allowed and changed
      const profileUpdate: any = {};
      const origProfile = orig.profile || {};
      if (v.profile?.fullName !== origProfile.fullName) {
        profileUpdate.fullName = v.profile?.fullName || '';
      }
      // If your backend supports timezone updates, include it when present in the form
      if ((v.profile as any)?.timezone !== (origProfile as any)?.timezone && typeof (v.profile as any)?.timezone !== 'undefined') {
        profileUpdate.timezone = (v.profile as any)?.timezone;
      }
      if (Object.keys(profileUpdate).length) {
        update.profile = profileUpdate;
      }
      // Only include isActive when changing it; default to true for safety if backend expects it
      if (orig.isActive !== true) {
        update.isActive = true;
      }
      // Roles diff
      const origRoles: string[] = Array.isArray(orig.roles) ? orig.roles : [];
      const sameRoles = origRoles.length === normalizedRoles.length && origRoles.every((r: string) => normalizedRoles.includes(r));
      if (!sameRoles) {
        update.roles = normalizedRoles;
      }
      // Contacts
      if (v.mobilenumber !== orig.mobilenumber && typeof v.mobilenumber !== 'undefined') {
        update.mobilenumber = v.mobilenumber;
      }
      if (v.alternateemail !== orig.alternateemail && typeof v.alternateemail !== 'undefined') {
        update.alternateemail = v.alternateemail || undefined;
      }
      if (v.alternatemobilenumber !== orig.alternatemobilenumber && typeof v.alternatemobilenumber !== 'undefined') {
        update.alternatemobilenumber = v.alternatemobilenumber || undefined;
      }
      return update;
    };

    const handleError = (error: any, fallback: string) => {
      this.isLoading = false;
      if (error?.error?.errors && Array.isArray(error.error.errors)) {
        const errorMessages = error.error.errors
          .map((err: any) => err.msg || err.message)
          .join(', ');
        this.toastr.error(errorMessages, 'CS', {
          timeOut: 5000,
          positionClass: 'toast-top-right',
        });
      } else {
        const errorMessage = error?.error?.message || fallback;
        this.toastr.error(errorMessage, 'CS', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      }
      console.error('Error saving user:', error);
    };

    if (this.isEdit && this.editUserId) {
      const updatePayload = buildUpdatePayload();
      if (!Object.keys(updatePayload).length) {
        this.isLoading = false;
        this.toastr.info('No changes to update.', 'CS', { timeOut: 2000, positionClass: 'toast-top-right' });
        return;
      }
      // Update flow (PUT)
      this.userService.updateUser(this.editUserId, updatePayload as any).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          const message = response?.message || 'User updated successfully!';
          this.toastr.success(message, 'CS', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          Swal.fire({ title: 'Updated!', text: message, icon: 'success', confirmButtonText: 'OK' })
            .then(() => this.router.navigate(['/totaluserslist']));
        },
        error: (error) => handleError(error, 'Failed to update user. Please try again.'),
      });
    } else {
      // Create flow (POST)
      this.userService.createUser(createPayload as any).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          const message = response?.message || 'User created successfully!';
          this.toastr.success(message, 'CS', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
           Swal.fire({ title: 'Success!', text: message, icon: 'success', confirmButtonText: 'OK' })
            .then(() => this.router.navigate(['/totaluserslist']));
          this.resetForm();
        },
        error: (error) => handleError(error, 'Failed to create user. Please try again.'),
      });
    }
  }

  resetForm(): void {
    this.submitted = false;
    this.userForm.reset({ roles: [] });
  }

  // Ensure we store only array of primitives (e.g., ['ADMIN','USER'])
  onRolesChange(selection: any): void {
    const values = Array.isArray(selection)
      ? selection
          .map((item: any) => (item && typeof item === 'object' && 'value' in item ? item.value : item))
          .filter((v: any) => v != null && v !== '')
      : [];
    this.userForm.get('roles')?.setValue(values);
  }

  onCancel(): void {
    this.resetForm();
  }

  private prefillFromNavigationState(): void {
    // Prefer Router navigation extras; fallback to history.state for hard reloads
    const nav = this.router.getCurrentNavigation();
    const state = (nav?.extras?.state as any) || (window.history?.state as any);

    const user = state?.user;
    const isEdit = !!state?.isEdit;
    if (!user) return;

  this.isEdit = isEdit;
  this.editUserId = user._id;
  this.originalUser = user;

    // Patch form with incoming user data (filter roles to allowed set)
    const roles: string[] = Array.isArray(user.roles)
      ? user.roles.filter((r: string) => this.allowedRoles.includes(r as any))
      : [];

    this.userForm.patchValue({
      username: user.username ?? '',
      email: user.email ?? '',
      name: user.name ?? '',
      org: user.org ?? '',
      roles,
      mobilenumber: user.mobilenumber ?? '',
      alternateemail: user.alternateemail ?? '',
      alternatemobilenumber: user.alternatemobilenumber ?? '',
      profile: {
        fullName: user.profile?.fullName ?? '',
        department: user.profile?.department ?? '',
      }
    });
  }
}
