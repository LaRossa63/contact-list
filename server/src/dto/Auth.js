export class AuthDto {
  userName;
  fullName;

  constructor(model) {
    this.userName = model.userName;
    this.fullName = model.fullName;
  }
}
