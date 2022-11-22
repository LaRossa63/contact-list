import { ListContactModel } from '../models/index.js';

export const ListContactService = {
  async getContact() {
    const t = await ListContactModel.find();
    return t[0];
  },
};
