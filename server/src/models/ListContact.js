import { Schema, model } from 'mongoose';

const ListContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
});

export const ListContactModel = model('list-contact', ListContactSchema);
