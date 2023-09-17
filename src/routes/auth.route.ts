import { Request, Response, Router } from 'express';

import UserService from '../service/user.service';

const authRoute = Router();
const userService = new UserService();

authRoute.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const token = await userService.authenticate(username, password);
        if (token) {
            res.send(token);
        } else {
            res.status(401).send();
        }
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

export default authRoute;
