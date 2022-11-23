import { FavouritesListContactService } from '../service/index.js';

export const FavouritesListContactController = {
  async getAllContact(req, res, next) {
    try {
      const { id: userID } = req.user;

      const response = await FavouritesListContactService.getAllContact(userID);

      return res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async addContact(req, res, next) {
    try {
      const { id: userID } = req.user;
      const { id: contactID } = req.params;

      const response = await FavouritesListContactService.addContact(
        userID,
        contactID
      );

      return res.json(response);
    } catch (error) {
      next(error);
    }
  },

  async deleteContact(req, res, next) {
    try {
      const { id: userID } = req.user;
      const { id: contactID } = req.params;

      const response = await FavouritesListContactService.deleteContact(
        userID,
        contactID
      );

      return res.json(response);
    } catch (error) {
      next(error);
    }
  },
};
