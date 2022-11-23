export class AuthDto {
  id;
  userName;
  fullName;

  constructor(model) {
    this.id = model._id;
    this.userName = model.userName;
    this.fullName = model.fullName;
  }
}
