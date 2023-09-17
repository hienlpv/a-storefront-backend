import { Request, Response, Router } from 'express';

import { User } from '../model';
import UserService from '../service/user.service';

const userRoute = Router();
const userService = new UserService();

userRoute.get('/', async (req: Request, res: Response) => {
    try {
        res.json(await userService.index());
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

userRoute.get('/profile', async (req: Request, res: Response) => {
    try {
        res.json(req.user);
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

userRoute.post('/', async (req: Request, res: Response) => {
    try {
        res.json(await userService.create(req.body as User));
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

export default userRoute;
