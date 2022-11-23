import { Schema, model } from 'mongoose';

const FavouritesListContactSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  tel: { type: String, required: true },
});

export const FavouritesListContactModel = model(
  'favourites-list-contact',
  FavouritesListContactSchema
);
