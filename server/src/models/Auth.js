import { Schema, model } from 'mongoose';

const AuthSchema = new Schema({
  userName: { type: String, unique: true, required: true },
  fullName: { type: String, unique: true },
  password: { type: String, required: true },
});

export const AuthModel = model('User', AuthSchema);
