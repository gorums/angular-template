import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/shared/models/user.model';
import { ApiService } from 'src/app/core/api/api.service';
import { ApiResponse } from 'src/app/core/api/api.response';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  relativeURL = 'users';

  constructor(private apiService: ApiService) {
  }

  getUsers(): Observable<ApiResponse<User[]>> {
    return this.apiService.get<User[]>(this.relativeURL);
  }

  getUser(id: string): Observable<ApiResponse<User>> {
    return this.apiService.getById<User>(this.relativeURL, id);
  }

  createUser(user: User): Observable<ApiResponse<any>> {
    return this.apiService.create<any>(this.relativeURL, user);
  }

  updateUser(id: string, user: User): Observable<ApiResponse<any>> {
    return this.apiService.update<any>(this.relativeURL, id, user);
  }

  deleteUser(id: string): Observable<ApiResponse<any>> {
    return this.apiService.delete<any>(this.relativeURL, id);
  }
}
