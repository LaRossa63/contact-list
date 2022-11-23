import { Router } from 'express';

import { FavouritesListContactController } from '../controllers/index.js';
import { AuthMiddlewares } from '../middlewares/index.js';

export const FavouritesListContactRouter = new Router();

FavouritesListContactRouter.get(
  '/favourites_contact_list',
  AuthMiddlewares,
  FavouritesListContactController.getAllContact
);
FavouritesListContactRouter.post(
  '/favourites_contact_list/:id',
  AuthMiddlewares,
  FavouritesListContactController.addContact
);
FavouritesListContactRouter.delete(
  '/favourites_contact_list/:id',
  AuthMiddlewares,
  FavouritesListContactController.deleteContact
);
