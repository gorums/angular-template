import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Role } from 'src/app/shared/models/role.model';
import { ApiService } from 'src/app/core/api/api.service';
import { ApiResponse } from 'src/app/core/api/api.response';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

  relativeURL = 'roles';

  constructor(private apiService: ApiService) {
  }

  getRoles(): Observable<ApiResponse<Role[]>> {
    return this.apiService.get<Role[]>(this.relativeURL);
  }

  getRole(id: string): Observable<ApiResponse<Role>> {
    return this.apiService.getById<Role>(this.relativeURL, id);
  }

  createRole(role: Role): Observable<ApiResponse<any>> {
    return this.apiService.create<any>(this.relativeURL, role);
  }

  updateRole(id: string, role: Role): Observable<ApiResponse<any>> {
    return this.apiService.update<any>(this.relativeURL, id, role);
  }

  deleteRole(id: string): Observable<ApiResponse<any>> {
    return this.apiService.delete<any>(this.relativeURL, id);
  }
}
