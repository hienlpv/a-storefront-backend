import { Request, Response, Router } from 'express';

import { User } from '../model';
import UserService from '../service/user.service';

const userRoute = Router();
const userService = new UserService();

userRoute.get('/', async (req: Request, res: Response) => {
    res.json(await userService.index());
});

userRoute.get('/profile', async (req: Request, res: Response) => {
    res.json(req.body.user);
});

userRoute.post('/', async (req: Request, res: Response) => {
    res.json(await userService.create(req.body as User));
});

userRoute.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await userService.authenticate(username, password);
    if (token) {
        res.send(token);
    } else {
        res.status(401).send();
    }
});

export default userRoute;
