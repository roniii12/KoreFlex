import { Roles } from '../enums/roles.enum';
export class User {
  constructor(
    public username: string,
    private _token: string,
    private _tokenExpirationDate: Date,
    private _role: string
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
  get role(){
    switch(this._role.toLowerCase()){
      case 'admin':
        return Roles.admin;
        break;
      case 'therapist':
        return Roles.therapist;
        break;
      case 'patient':
        return Roles.patient;
        break;
      default:
        return Roles.patient;
        break;
    }
  }
}





