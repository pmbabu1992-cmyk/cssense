import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User {
  _id?: string;
  username: string;
  email: string;
  name?: string;
  org?: string;
  profile?: {
    fullName?: string;
    timezone?: string;
    department?: string;
  };
  isActive?: boolean;
  roles?: Array<'ADMIN' | 'USER'>;
  mobilenumber?: string;
  alternateemail?: string;
  alternatemobilenumber?: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) { }

  /**
   * Create a new user
   * @param user User data without _id, createdAt, updatedAt
   */
  createUser(user: Omit<User, '_id' | 'createdAt' | 'updatedAt'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  /**
   * Get user by ID
   */
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  /**
   * Update user
   */
  updateUser(id: string, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  /**
   * Delete user
   */
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
