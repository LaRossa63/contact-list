import { ListContactService } from '../service/index.js';

export const ListContactController = {
  async getDefaultContactList(req, res, next) {
    try {
      const response = await ListContactService.getDefaultContactList();
      return res.json(response);
    } catch (error) {
      next(error);
    }
  },
};
