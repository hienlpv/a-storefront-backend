import { Request, Response, Router } from 'express';

import UserService from '../services/user.service';

const userRoute = Router();
const userService = new UserService();

userRoute.get('/', async (req: Request, res: Response) => {
    const users = await userService.index();
    res.json(users);
});

export default userRoute;
