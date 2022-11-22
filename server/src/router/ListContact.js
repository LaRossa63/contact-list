import { Router } from 'express';

import { ListContactController } from '../controllers/index.js';

export const ListContactRouter = new Router();

ListContactRouter.get('/contact', ListContactController.getContact);
