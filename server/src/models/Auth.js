import { Schema, model } from 'mongoose';

const AuthSchema = new Schema({
  email: { type: String, unique: true, required: true },
  nickName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const AuthModel = model('User', AuthSchema);
