import { Country } from './country.model';
    import { Role } from './role.model';
    
export class User {
  id: string;
    email: string;
    username: string;
    password: string;
    country: Country;
    roles: Role[];
  }
