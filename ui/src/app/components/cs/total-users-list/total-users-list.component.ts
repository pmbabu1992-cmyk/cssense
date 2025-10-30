import { Component, OnInit, signal, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

// PrimeNG
import { Table, TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from 'primeng/paginator';

import { PageHeaderComponent } from 'src/app/shared/componets/page-header/page-header.component';
import { UserService, User } from '../add-user/user.service';
import { AppModalService } from 'src/app/shared/modal/modal.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-total-users-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    TableModule,
    CheckboxModule,
    TagModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    BadgeModule,
    MenuModule,
    RippleModule,
    PaginatorModule,
    PageHeaderComponent
  ],
  templateUrl: './total-users-list.component.html',
  styleUrl: './total-users-list.component.scss',
})
export class TotalUsersListComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  @ViewChild('viewModal') viewModal!: TemplateRef<any>;
  @ViewChild('userDetailsTpl') userDetailsTpl!: TemplateRef<any>;

  // Data
  users = signal<User[]>([]);
  isLoading = false;
  searchText = '';
  // Debounced search stream similar to Liveview
  private search$ = new Subject<string>();

  // Selection
  selectedUsers: User[] = [];

  // Current user for view modal
  currentUser: User | null = null;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private appModal: AppModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    // Liveview-like debounced search
    this.search$
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((q) => {
        this.searchText = q ?? '';
        this.dt?.filterGlobal(this.searchText, 'contains');
      });
  }

  loadUsers(): void {
    this.isLoading = true;
    this.userService.getUsers().subscribe({
      next: (response: any) => {
        // Handle both direct array and wrapped response
        const usersData = response?.data || response || [];
        this.users.set(usersData);
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        const errorMessage = error?.error?.message || 'Failed to load users.';
        this.toastr.error(errorMessage, 'CS', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
        console.error('Error loading users:', error);
      },
    });
  }

  // Global search (debounced like Liveview)
  onSearchChange(value: string): void {
    this.search$.next(value ?? '');
  }

  // Clear all filters
  clearFilters(): void {
    this.searchText = '';
    this.dt?.clear();
    this.selectedUsers = [];
  }

  // Immediate apply (used by Search button)
  applyGlobalSearch(): void {
    this.dt?.filterGlobal(this.searchText || '', 'contains');
  }

  // Refresh data
  refreshUsers(): void {
    this.loadUsers();
    this.toastr.info('Refreshing users...', 'CS', {
      timeOut: 2000,
      positionClass: 'toast-top-right',
    });
  }

  // Get status severity for PrimeNG tag
  getStatusSeverity(isActive?: boolean): 'success' | 'danger' {
    return isActive ? 'success' : 'danger';
  }

  // Get status label
  getStatusLabel(isActive?: boolean): string {
    return isActive ? 'Active' : 'Inactive';
  }

  // Get roles badge class
  getRolesBadge(roles?: string[]): string {
    if (!roles || roles.length === 0) return 'bg-secondary';
    if (roles.includes('ADMIN')) return 'bg-primary';
    return 'bg-info';
  }

  // Action menu items for each user
  actionItems(user: User) {
    return [
      {
        label: 'View',
        icon: 'pi pi-eye',
        command: () => this.viewUser(user)
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.editUser(user)
      },
      {
        separator: true
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => this.deleteUser(user)
      }
    ];
  }

  viewUser(user: User): void {
    if (!user._id) return;
    
    this.userService.getUserById(user._id).subscribe({
      next: (response: any) => {
        this.currentUser = response?.data || response;
        // Open reusable modal with content template
        this.appModal.openTemplate({
          title: 'User Details',
          contentTpl: this.userDetailsTpl,
          context: this.currentUser,
          size: 'lg',
          centered: true,
          scrollable: true,
          // Footer buttons
          // @ts-ignore - buttons is handled by shell
          buttons: [
            { label: 'Close', cssClass: 'btn btn-secondary', result: 'close' },
            { label: 'Save Changes', cssClass: 'btn btn-primary', result: 'save' }
          ]
        } as any);
      },
      error: (error) => {
        const errorMessage = error?.error?.message || 'Failed to load user details.';
        this.toastr.error(errorMessage, 'CS', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      }
    });
  }

  editUser(user: User): void {
    if (!user._id) return;
    
    this.userService.getUserById(user._id).subscribe({
      next: (response: any) => {
        const userData = response?.data || response;
        this.router.navigate(['/adduser'], { 
          state: { 
            user: userData,
            isEdit: true 
          } 
        });
      },
      error: (error) => {
        const errorMessage = error?.error?.message || 'Failed to load user details.';
        this.toastr.error(errorMessage, 'CS', {
          timeOut: 3000,
          positionClass: 'toast-top-right',
        });
      }
    });
  }

  deleteUser(user: User): void {
    Swal.fire({
      title: 'Are you sure?',
      html: `Do you want to delete user <strong>"${user.username}"</strong>?<br><small class="text-muted">This action cannot be undone.</small>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: '<i class="pi pi-trash me-2"></i>Yes, delete it!',
      cancelButtonText: '<i class="pi pi-times me-2"></i>Cancel',
      reverseButtons: true,
      customClass: {
        popup: 'swal-custom-popup',
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-secondary'
      }
    }).then((result) => {
      if (result.isConfirmed && user._id) {
        this.userService.deleteUser(user._id).subscribe({
          next: (response: any) => {
            const message = response?.message || 'User deleted successfully!';
            
            this.toastr.success(message, 'CS', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });

            Swal.fire({
              title: 'Deleted!',
              text: message,
              icon: 'success',
              confirmButtonText: 'OK',
              customClass: {
                confirmButton: 'btn btn-success'
              }
            });

            this.loadUsers(); // Reload the list
          },
          error: (error) => {
            const errorMessage = error?.error?.message || 'Failed to delete user.';
            this.toastr.error(errorMessage, 'CS', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
            });
          }
        });
      }
    });
  }
}
