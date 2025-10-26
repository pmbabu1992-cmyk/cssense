import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild, computed, OnInit } from '@angular/core'; // ⬅️ computed added
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageHeaderComponent } from 'src/app/shared/componets/page-header/page-header.component';

// PrimeNG
import { Table, TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';   // v20 select
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from 'primeng/paginator'; // ⬅️ add this
// + NEW modules
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CsProgressbarComponent } from 'src/app/_cs/reusable-ui-elements/cs-progressbar/cs-progressbar.component';
import { CsDropdownsComponent } from 'src/app/_cs/reusable-ui-elements/cs-dropdowns/cs-dropdowns.component';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
type Opt<T> = { label: string; value: T };

type Device = {
  id: string;
  name: string;
  type: 'Sensor' | 'Controller' | 'Gateway';
  status: 'Online' | 'Warning' | 'Offline';
  location: string;
  cpu: number;
  mem: number;
  temp: number;     // °C
  uptime: number;   // %
  alerts: number;   // count
  lastUpdate: string;
};

@Component({
  selector: 'app-liveview',
  standalone: true,
  imports: [
    NgbModule, FormsModule, CommonModule,
    TableModule, CheckboxModule, TagModule,
    InputTextModule, SelectModule, ButtonModule, BadgeModule, CsDropdownsComponent,
    MenuModule, RippleModule, ProgressBarModule, SelectButtonModule, CsProgressbarComponent, PaginatorModule
  ],
  templateUrl: './liveview.component.html',
  styleUrls: ['./liveview.component.scss'],
})
export class LiveviewComponent implements OnInit {

  // data
  private seed: Device[] = [
    { id:'IOT-001', name:'Air Quality Sensor A', type:'Sensor',     status:'Online',  location:'Clean Room',  cpu:56, mem:42, temp:70, uptime:99.1, alerts:0, lastUpdate:'1 min ago' },
    { id:'IOT-002', name:'Temp Gateway B',       type:'Gateway',    status:'Offline', location:'Hallway 2',   cpu:0,  mem:0,  temp:0,  uptime:0.0,  alerts:5, lastUpdate:'10 mins ago' },
    { id:'IOT-003', name:'Humidity Controller C',type:'Controller', status:'Warning', location:'Storage A',   cpu:78, mem:34, temp:75, uptime:97.8, alerts:2, lastUpdate:'5 mins ago' },
    { id:'IOT-004', name:'Thermal Sensor D',     type:'Sensor',     status:'Online',  location:'Plant 1',     cpu:33, mem:28, temp:66, uptime:98.3, alerts:0, lastUpdate:'2 mins ago' },
    { id:'IOT-005', name:'Pressure Sensor E',    type:'Sensor',     status:'Online',  location:'Plant 2',     cpu:49, mem:36, temp:68, uptime:99.4, alerts:1, lastUpdate:'3 mins ago' },
    { id:'IOT-006', name:'Air Quality Sensor F', type:'Sensor',     status:'Online',  location:'Clean Room',  cpu:56, mem:42, temp:70, uptime:99.1, alerts:0, lastUpdate:'1 min ago' },
    { id:'IOT-007', name:'Controller Duct G',    type:'Controller', status:'Warning', location:'Duct West',   cpu:81, mem:61, temp:77, uptime:95.2, alerts:3, lastUpdate:'9 mins ago' },
    { id:'IOT-008', name:'Gateway South H',      type:'Gateway',    status:'Online',  location:'South Dock',  cpu:41, mem:29, temp:64, uptime:98.9, alerts:0, lastUpdate:'6 mins ago' },
    { id:'IOT-009', name:'Flow Sensor I',        type:'Sensor',     status:'Online',  location:'Plant 3',     cpu:45, mem:33, temp:69, uptime:99.0, alerts:0, lastUpdate:'8 mins ago' },
    { id:'IOT-010', name:'Controller Line J',    type:'Controller', status:'Offline', location:'Line J',      cpu:0,  mem:0,  temp:0,  uptime:0.0,  alerts:4, lastUpdate:'20 mins ago' },
    { id:'IOT-011', name:'Vibration Sensor K',   type:'Sensor',     status:'Online',  location:'Engine Room', cpu:37, mem:25, temp:62, uptime:99.2, alerts:0, lastUpdate:'4 mins ago' },
    { id:'IOT-012', name:'Controller Mixer L',   type:'Controller', status:'Online',  location:'Mixer Bay',   cpu:54, mem:47, temp:71, uptime:98.7, alerts:1, lastUpdate:'12 mins ago' },
    { id:'IOT-013', name:'Gateway North M',      type:'Gateway',    status:'Warning', location:'North Dock',  cpu:63, mem:52, temp:74, uptime:96.5, alerts:2, lastUpdate:'7 mins ago' },
    { id:'IOT-014', name:'CO₂ Sensor N',         type:'Sensor',     status:'Online',  location:'Lab 2',       cpu:39, mem:31, temp:65, uptime:99.3, alerts:0, lastUpdate:'2 mins ago' },
    { id:'IOT-015', name:'Humidity Controller O',type:'Controller', status:'Online',  location:'Storage B',   cpu:44, mem:38, temp:67, uptime:98.4, alerts:0, lastUpdate:'11 mins ago' },
    { id:'IOT-016', name:'Air Quality Sensor P', type:'Sensor',     status:'Warning', location:'Lab 1',       cpu:72, mem:58, temp:76, uptime:96.9, alerts:1, lastUpdate:'13 mins ago' },
    { id:'IOT-017', name:'Thermal Gateway Q',    type:'Gateway',    status:'Online',  location:'Furnace',     cpu:52, mem:40, temp:72, uptime:98.1, alerts:0, lastUpdate:'15 mins ago' },
    { id:'IOT-018', name:'Pressure Controller R',type:'Controller', status:'Offline', location:'Valves',      cpu:0,  mem:0,  temp:0,  uptime:0.0,  alerts:6, lastUpdate:'30 mins ago' },
    { id:'IOT-019', name:'Flow Gateway S',       type:'Gateway',    status:'Online',  location:'West Yard',   cpu:35, mem:26, temp:63, uptime:99.0, alerts:0, lastUpdate:'5 mins ago' },
    { id:'IOT-020', name:'Air Sensor T',         type:'Sensor',     status:'Online',  location:'Clean Room',  cpu:48, mem:37, temp:69, uptime:99.2, alerts:0, lastUpdate:'1 min ago' }
  ];

  // 'cards' | 'table'
viewMode: 'cards' | 'table' = 'cards';
@ViewChild('dt') dt!: Table;

// NEW: search text model
searchText = '';
// Debounced input stream
private search$ = new Subject<string>();
// Cards filtered cache (rows() + search)
cardFiltered = signal<Device[]>(this.seed.slice());
// Apply search to the PrimeNG table global filter
// Search handler now filters your rows() (works for BOTH cards and table)
applyGlobalSearch() {
  // Let PrimeNG handle the TABLE global filter
  this.dt?.filterGlobal(this.searchText || '', 'contains');

  // For CARDS, we filter ourselves:
  const base = this.rows(); // already filtered by dropdowns
  const filtered = this.applySearchTo(base);

  // Keep cards sorted like the table
  const sorted = this.sortForCards(filtered);

  this.cardFiltered.set(sorted);
  this.cardFirst.set(0); // reset cards pager after a new search
}
private applySearchTo(list: Device[]): Device[] {
  const q = (this.searchText || '').trim().toLowerCase();
  if (!q) return list;

  return list.filter(d =>
    [d.name, d.id, d.location, d.type, d.status]
      .some(v => String(v).toLowerCase().includes(q))
  );
}

private sortForCards(list: Device[]): Device[] {
  const field = this.sortField as keyof Device;
  const order = this.sortOrder;
  const statusRank: Record<Device['status'], number> = { Online: 0, Warning: 1, Offline: 2 };

  return [...list].sort((a, b) => {
    const av = a[field] as any;
    const bv = b[field] as any;

    if (field === 'status') {
      return (statusRank[av as Device['status']] - statusRank[bv as Device['status']]) * order;
    }
    if (typeof av === 'number' && typeof bv === 'number') {
      return (av - bv) * order;
    }
    return String(av).localeCompare(String(bv)) * order;
  });
}

private sortForCardsold(list: Device[]): Device[] {
  const field = this.sortField as keyof Device;
  const order = this.sortOrder;
  const statusRank: Record<Device['status'], number> = { Online:0, Warning:1, Offline:2 };

  return [...list].sort((a, b) => {
    const av = a[field] as any;
    const bv = b[field] as any;

    if (field === 'status') {
      return (statusRank[av as Device['status']] - statusRank[bv as Device['status']]) * order;
    }
    if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * order;
    return String(av).localeCompare(String(bv)) * order;
  });
}

applyGlobalSearchold() {
  this.applyTopFilters();          // re-run pipeline with current searchText
  this.cardFirst.set(0);           // reset cards pagination
  this.resetSelection();           // optional: clear selection on new search
  // If you were using dt.filterGlobal before, make sure it's cleared:
  this.dt?.clear?.();              // clears table's internal filters so we don't "double filter"
}
onSearchChange(value: string) {
  this.search$.next(value ?? '');
}

// Label helpers for range filters
// tempFilterLabel() {
//   if (!this.tempFilter) return 'All Temps';
//   const { min, max } = this.tempFilter;
//   if (min != null && max != null) return `${min}–${max}°C`;
//   if (min != null) return `≥ ${min}°C`;
//   if (max != null) return `≤ ${max}°C`;
//   return 'All Temps';
// }

// cpuFilterLabel() {
//   if (!this.cpuFilter) return 'All CPU';
//   const { min, max } = this.cpuFilter;
//   if (min != null && max != null) return `${min}–${max}%`;
//   if (min != null) return `≥ ${min}%`;
//   if (max != null) return `≤ ${max}%`;
//   return 'All CPU';
// }
// sortFieldLabel() {
//   const found = this.sortByOptions.find(o => o.value === this.sortField);
//   return found?.label ?? 'Name';
// }
constructor() {
  this.search$
    .pipe(debounceTime(250), distinctUntilChanged())
    .subscribe(q => {
      this.searchText = q ?? '';
      this.applyGlobalSearch(); // updates cards live
    });
}

ngOnInit(): void {
  // make sure cards start sorted by Name ascending
  this.sortField = 'name';
  this.sortOrder = 1;
  this.sortRowsForCards();
}

tempFilterLabel() {
  const t = this.tempFilter;
  if (!t) return 'All Temps';
  if (t.min != null && t.max != null) return `${t.min}–${t.max}°C`;
  if (t.min != null) return `≥ ${t.min}°C`;
  if (t.max != null) return `≤ ${t.max}°C`;
  return 'All Temps';
}

cpuFilterLabel() {
  const c = this.cpuFilter;
  if (!c) return 'All CPU';
  if (c.min != null && c.max != null) return `${c.min}–${c.max}%`;
  if (c.min != null) return `≥ ${c.min}%`;
  if (c.max != null) return `≤ ${c.max}%`;
  return 'All CPU';
}

sortFieldLabel() {
  const found = this.sortByOptions.find(o => o.value === (this.sortField as keyof Device));
  return found?.label ?? 'Name';
}

// --- CARDS SORTING ---
// --- CARDS SORTING ---
private sortRowsForCards() {
  const data  = [...this.rows()];
  const field = this.sortField as keyof Device;
  const order = this.sortOrder; // 1 | -1

  // Strongly typed rank map
  const statusRank: Record<Device['status'], number> = {
    Online: 0,
    Warning: 1,
    Offline: 2,
  };

  data.sort((a, b) => {
    if (field === 'status') {
      // Use typed properties here; no "any"
      return (statusRank[a.status] - statusRank[b.status]) * order;
    }

    const av = a[field] as unknown;
    const bv = b[field] as unknown;

    // Numbers
    if (typeof av === 'number' && typeof bv === 'number') {
      return (av - bv) * order;
    }

    // Strings / fallback
    return String(av).localeCompare(String(bv)) * order;
  });

  this.rows.set(data);
}

// Click handlers for dropdown items
setStatus(v: Device['status'] | null) { this.statusFilter = v; this.applyTopFilters(); this.dt?.reset(); }

setType(v: Device['type'] | null)     { this.typeFilter   = v; this.applyTopFilters(); this.dt?.reset(); }

setTemp(v: { min?: number; max?: number } | null) { this.tempFilter = v; this.applyTopFilters(); this.dt?.reset(); }

setCpu(v: { min?: number; max?: number } | null)  { this.cpuFilter  = v; this.applyTopFilters(); this.dt?.reset(); }

setAlerts(v: 'has' | 'none' | null)   { this.alertsFilter = v; this.applyTopFilters(); this.dt?.reset(); }

setSortField(v: keyof Device) {
  this.sortField = v as string;
  this.dt?.sort({ field: this.sortField, order: this.sortOrder });
  this.cardFiltered.set(this.sortForCards(this.cardFiltered()));
  this.cardFirst.set(0);
}

setSortFieldoldf(v: keyof Device) {
  this.sortField = v as string;
  this.dt?.sort({ field: this.sortField, order: this.sortOrder });
  this.cardFiltered.set(this.sortForCards(this.cardFiltered()));
  this.cardFirst.set(0);
}

setSortFieldold(v: keyof Device) {
  this.sortField = v as string;
  // Table: programmatic sort
  this.dt?.sort({ field: this.sortField, order: this.sortOrder });
  // Cards: sort the rows array
  this.sortRowsForCards();
}
switchView(mode: 'cards' | 'table') {
  this.viewMode = mode;
  this.clearAll();
}

switchViewold(mode: 'cards' | 'table') {
  this.viewMode = mode;

  // clear only the search text
  if (this.searchText) this.searchText = '';

  // re-run your pipeline WITHOUT search (keeps current dropdown filters)
  this.applyTopFilters();

  // keep sort consistent in both views
  this.dt?.sort({ field: this.sortField, order: this.sortOrder });
  this.sortRowsForCards();

  // reset cards paginator + selection
  this.cardFirst.set(0);
  this.resetSelection();

  // make sure PrimeNG table (if it had any internal/global filters) is clean
  this.dt?.clear?.();
}


private resetSelection() {
  this.selectedIds.set(new Set());
  this.selectedRows = [];
  // optional: also clear table header checkbox visual state
  this.dt?.updateSelectionKeys?.();
}

 // --- CARD PAGINATION ---
  cardFirst = signal<number>(0);          // index of first record in current page
  cardRowsPerPage = signal<number>(8);    // page size for cards

  

  // cardPageItems = computed(() => {
  //   const start = this.cardFirst();
  //   const end   = start + this.cardRowsPerPage();
  //   const data  = this.rows();
  //   return data.slice(start, end);
  // });
  cardPageItems = computed(() => {
  const start = this.cardFirst();
  const end   = start + this.cardRowsPerPage();
  return this.cardFiltered().slice(start, end);
});


  // zero-based "first" and current rows/page come from the event
onCardPage(ev: any) {
  this.cardFirst.set(ev.first ?? 0);
  this.cardRowsPerPage.set(ev.rows ?? this.cardRowsPerPage());
}

  // --- SELECTION (shared across views) ---
  // selection state that persists
  selectedIds = signal<Set<string>>(new Set<string>());

  isSelected = (d: Device) => this.selectedIds().has(d.id);

  // toggle a single card
  toggleCard(d: Device, checked: boolean) {
    const set = new Set(this.selectedIds());
    checked ? set.add(d.id) : set.delete(d.id);
    this.selectedIds.set(set);
    this.selectedRows = this.rows().filter(r => set.has(r.id));
  }
  // MASTER: all filtered items (ALL PAGES), not just the current page
  isAllSelected() {
    const list = this.rows();
    return list.length > 0 && list.every(r => this.selectedIds().has(r.id));
  }

  isSomeSelected() {
    const list = this.rows();
    if (list.length === 0) return false;
    const any = list.some(r => this.selectedIds().has(r.id));
    return any && !this.isAllSelected();
  }
  cardMasterChecked = () => {
    const items = this.cardPageItems();
    if (items.length === 0) return false;
    return items.every((i: Device) => this.selectedIds().has(i.id)); // ⬅️ typed
  };

  cardMasterIndeterminate = () => {
    const items = this.cardPageItems();
    if (items.length === 0) return false;
    const any = items.some((i: Device) => this.selectedIds().has(i.id)); // ⬅️ typed
    return any && !this.cardMasterChecked();
  };

  toggleSelectAll(checked: boolean) {
  if (checked) {
    const set = new Set(this.rows().map(r => r.id));
    this.selectedIds.set(set);
    this.selectedRows = this.rows().slice(); // all filtered rows
  } else {
    this.selectedIds.set(new Set());
    this.selectedRows = [];
  }
}

  toggleSelectAllOnPage(checked: boolean) {
    const set = new Set(this.selectedIds());
    for (const d of this.cardPageItems()) {
      if (checked) set.add(d.id);
      else set.delete(d.id);
    }
    this.selectedIds.set(set);
    this.selectedRows = this.rows().filter(r => set.has(r.id));
  }

  // Called by the top-bar selects
  onFilterChange() {
    this.applyTopFilters();
    this.dt?.reset();           // keep paging/sorting consistent
  }
 // Global search (replaces direct call in template)
  onGlobalFilter(ev: Event) {
    const value = (ev.target as HTMLInputElement).value ?? '';
    this.dt?.filterGlobal(value, 'contains');
  }

  clearAll() {
  this.searchText = '';
  this.statusFilter = this.typeFilter = null;
  this.tempFilter = this.cpuFilter = null;
  this.alertsFilter = null;
  this.rows.set(this.seed.slice());
  this.sortRowsForCards();  // keep initial sort for cards
  this.cardFirst.set(0);
  this.selectedIds.set(new Set());
  this.selectedRows = [];
  this.dt?.clear?.();
}


  //   applySort() {
  //   this.dt?.sort({ field: this.sortField, order: this.sortOrder });
  // }
  applySort() {
  this.dt?.sort({ field: this.sortField, order: this.sortOrder });
  this.sortRowsForCards();
  this.cardFirst.set(0); // ⬅️ reset cards page after sort
  this.resetSelection(); // clear selection after sort
}
// TABLE -> keep selection in sync when user uses table header checkbox/page
onTableSelectionChange(rows: Device[]) {
  this.selectedRows = rows ?? [];
  const set = new Set<string>();
  for (const r of this.selectedRows) set.add(r.id);
  this.selectedIds.set(set);
}
  // Top-bar options
// Status / Type / Alerts are *narrow unions*; Temp/Cpu are ranges
statusOptions: Opt<Device['status'] | null>[] = [
  { label: 'All Status', value: null },
  { label: 'Online',     value: 'Online'  },
  { label: 'Warning',    value: 'Warning' },
  { label: 'Offline',    value: 'Offline' }
];

typeOptions: Opt<Device['type'] | null>[] = [
  { label: 'All Types',  value: null },
  { label: 'Sensor',     value: 'Sensor' },
  { label: 'Controller', value: 'Controller' },
  { label: 'Gateway',    value: 'Gateway' }
];

tempOptions: Opt<{ min?: number; max?: number } | null>[] = [
  { label: 'All Temps', value: null },
  { label: '≤ 65°C',    value: { max: 65 } },
  { label: '66–72°C',   value: { min: 66, max: 72 } },
  { label: '≥ 73°C',    value: { min: 73 } }
];

cpuOptions: Opt<{ min?: number; max?: number } | null>[] = [
  { label: 'All CPU', value: null },
  { label: '≤ 40%',   value: { max: 40 } },
  { label: '41–60%',  value: { min: 41, max: 60 } },
  { label: '≥ 61%',   value: { min: 61 } }
];

alertOptions: Opt<'has' | 'none' | null>[] = [
  { label: 'All Alerts', value: null },
  { label: 'Has Alerts', value: 'has' },
  { label: 'No Alerts',  value: 'none' }
];

sortByOptions: Opt<keyof Device>[] = [
  { label: 'Name',        value: 'name' },
  { label: 'Status',      value: 'status' },
  { label: 'Location',    value: 'location' },
  { label: 'CPU',         value: 'cpu' },
  { label: 'Memory',      value: 'mem' },
  { label: 'Temp',        value: 'temp' },
  { label: 'Uptime',      value: 'uptime' },
  { label: 'Alerts',      value: 'alerts' },
  { label: 'Last Update', value: 'lastUpdate' }
];
  // filter/sort model
  statusFilter: Device['status'] | null = null;
  typeFilter: Device['type'] | null = null;
  tempFilter: { min?: number; max?: number } | null = null;
  cpuFilter: { min?: number; max?: number } | null = null;
  alertsFilter: 'has' | 'none' | null = null;

  sortField: string = 'name';
  sortOrder: 1 | -1 = 1;

  // selection (checkbox only)
  selectedRows: Device[] = [];

  // table source array (writable, stable reference)
  rows = signal<Device[]>(this.seed.slice());

  // recompute rows for top-bar filters
// ---- applyTopFilters: ADD search predicate ----
applyTopFilters() {
  const status = this.statusFilter;
  const type   = this.typeFilter;
  const temp   = this.tempFilter;
  const cpu    = this.cpuFilter;
  const alerts = this.alertsFilter;
  const q      = (this.searchText || '').trim().toLowerCase();

  const filtered = this.seed.filter(d => {
    // top dropdown filters
    const statusOk = status ? d.status === status : true;
    const typeOk   = type   ? d.type   === type   : true;
    const tempOk   = temp
      ? (temp.min == null || d.temp >= temp.min) && (temp.max == null || d.temp <= temp.max)
      : true;
    const cpuOk    = cpu
      ? (cpu.min == null || d.cpu >= cpu.min) && (cpu.max == null || d.cpu <= cpu.max)
      : true;
    const alertsOk =
      alerts === 'has' ? d.alerts > 0 :
      alerts === 'none' ? d.alerts === 0 : true;

    // global search across common fields (cards + table)
    const searchOk = !q || [d.name, d.id, d.location, d.type, d.status]
      .some(v => String(v).toLowerCase().includes(q));

    return statusOk && typeOk && tempOk && cpuOk && alertsOk && searchOk;
  });

  // Table source
  this.rows.set(filtered);

  // Cards source (sorted according to current sort)
  const sortedForCards = this.sortForCards(filtered);
  this.cardFiltered.set(sortedForCards);

  // Keep table sort consistent
  this.dt?.sort({ field: this.sortField, order: this.sortOrder });

  // Reset cards pagination after filter/search change
  this.cardFirst.set(0);
}


applyTopFiltersold() {
  const status = this.statusFilter;
  const type   = this.typeFilter;
  const temp   = this.tempFilter;
  const cpu    = this.cpuFilter;
  const alerts = this.alertsFilter;
  const q      = (this.searchText || '').trim().toLowerCase();

  const filtered = this.seed.filter(d => {
    // top dropdown filters
    const statusOk = status ? d.status === status : true;
    const typeOk   = type   ? d.type   === type   : true;
    const tempOk   = temp
      ? (temp.min == null || d.temp >= temp.min) && (temp.max == null || d.temp <= temp.max)
      : true;
    const cpuOk    = cpu
      ? (cpu.min == null || d.cpu >= cpu.min) && (cpu.max == null || d.cpu <= cpu.max)
      : true;
    const alertsOk =
      alerts === 'has' ? d.alerts > 0 :
      alerts === 'none' ? d.alerts === 0 : true;

    // NEW: global search across common fields
    const searchOk = !q || [
      d.name, d.id, d.location, d.type, d.status
    ].some(v => String(v).toLowerCase().includes(q));

    return statusOk && typeOk && tempOk && cpuOk && alertsOk && searchOk;
  });

  this.rows.set(filtered);
  this.sortRowsForCards();    // keep cards sorted after filter/search
  this.dt?.sort({ field: this.sortField, order: this.sortOrder }); // keep table sort consistent
}

  // clearAll(dt: any) {
  //   this.statusFilter = null;
  //   this.typeFilter = null;
  //   this.tempFilter = null;
  //   this.cpuFilter = null;
  //   this.alertsFilter = null;
  //   this.rows.set(this.seed.slice());
  //   dt.clear(); // clears column/global filters + resets paging
  // }

  // programmatic sort
  // applySort() {
  //   this.dt?.sort({ field: this.sortField, order: this.sortOrder });
  // }

  // actions per row
  actionItems(row: Device) {
    return [
      { label: 'View',   icon: 'pi pi-eye',    command: () => console.log('View', row) },
      { label: 'Edit',   icon: 'pi pi-pencil', command: () => console.log('Edit', row) },
      { separator: true },
      { label: 'Restart',icon: 'pi pi-refresh',command: () => console.log('Restart', row) },
      { label: 'Delete', icon: 'pi pi-trash',  command: () => console.log('Delete', row) }
    ];
  }
}
