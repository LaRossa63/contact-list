export class AuthDto {
  email;
  id;
  nickName;

  constructor(model) {
    this.id = model._id;
    this.email = model.email;
    this.nickName = model.nickName;
  }
}
