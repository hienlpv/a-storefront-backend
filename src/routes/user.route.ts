import { Request, Response, Router } from 'express';

import UserService from '../services/user.service';
import { User } from '../models';

const userRoute = Router();
const userService = new UserService();

userRoute.get('/', async (req: Request, res: Response) => {
    const users = await userService.index();
    res.json(users);
});

userRoute.post('/', async (req: Request, res: Response) => {
    const userReq = req.body as Partial<User>;
    const user = await userService.create(userReq);
    res.json(user);
});

userRoute.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await userService.login(username, password);
    if (user) {
        res.json(user);
    } else {
        res.status(401).send();
    }
});

export default userRoute;
