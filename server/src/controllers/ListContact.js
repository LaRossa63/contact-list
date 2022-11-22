import { ListContactService } from '../service/index.js';

export const ListContactController = {
  async getContact(req, res, next) {
    try {
      const response = await ListContactService.getContact();
      return res.json(response);
    } catch (error) {
      next(error);
    }
  },
};
