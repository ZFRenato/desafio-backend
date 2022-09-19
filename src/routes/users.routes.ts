import { Router } from "express";
import createUserController from "../modules/users/userCases/CreateUser/";
import listUsersController from "../modules/users/userCases/ListUsers/";
import findUserController from "../modules/users/userCases/FindUser/";
import deleteUserController from "../modules/users/userCases/DeleteUser/"

const usersRoutes = Router();

usersRoutes.post('/', async (request, response) => {

    return await createUserController().handle(request, response);
});

usersRoutes.get('/', async (request, response) => {

    return await listUsersController().handle(request, response);
});

usersRoutes.get('/:id', async (request, response) => {

    return await findUserController().handle(request, response);
});

usersRoutes.delete('/:id', async (request, response) => {
    return await deleteUserController().handle(request, response);
})

export { usersRoutes }