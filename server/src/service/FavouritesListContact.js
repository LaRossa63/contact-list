import {
  FavouritesListContactModel,
  ListContactModel,
} from '../models/index.js';
import { ApiError } from '../exceptions/index.js';

export const FavouritesListContactService = {
  async getAllContact(userID) {
    const contactList = await FavouritesListContactModel.find({ user: userID });

    return contactList;
  },

  async addContact(userID, contactID) {
    const findContact = await ListContactModel.findById({ _id: contactID });
    if (!findContact) {
      throw ApiError.BadRequest('Неверный ID');
    }

    const currentContact = await FavouritesListContactModel.findOne({
      user: userID,
      name: findContact.name,
    });

    if (currentContact) {
      throw ApiError.BadRequest('Такой контакт уже есть');
    }

    const favouritesContact = await FavouritesListContactModel.create({
      _id: contactID,
      user: userID,
      name: findContact.name,
      tel: findContact.tel,
    });

    return favouritesContact;
  },

  async deleteContact(userID, contactID) {
    const deleteContact = await FavouritesListContactModel.findOneAndDelete({
      _id: contactID,
      user: userID,
    });

    return deleteContact;
  },
};
