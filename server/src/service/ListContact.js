import { ListContactModel } from '../models/index.js';

export const ListContactService = {
  async getDefaultContactList() {
    const contactList = await ListContactModel.find();
    return contactList;
  },
};
