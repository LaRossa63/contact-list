import { Schema, model } from 'mongoose';

const ListContactSchema = new Schema({});

export const ListContactModel = model('list-contact', ListContactSchema);
