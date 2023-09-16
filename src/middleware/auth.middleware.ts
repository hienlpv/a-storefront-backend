import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import config from '../config';
import UserService from '../service/user.service';
import StringUtils from '../utils/string.util';

const userService = new UserService();
const whiteList = [
    { method: 'POST', path: '/auth/login' },
    { method: 'GET', path: '/product' },
    { method: 'GET', path: '/product/*' },
];

export async function verifyAuthToken(req: Request, res: Response, next: NextFunction) {
    try {
        if (whiteList.some(({ method, path }) => method === req.method && StringUtils.matchRule(req.path, path))) {
            return next();
        }

        const token = req.headers.authorization?.split(' ')[1];

        if (token) {
            const secret = config.jwt.secret as string;
            const decoded = jwt.verify(token, secret) as JwtPayload;
            req.body.user = await userService.show(decoded.userId);
            next();
        } else {
            res.status(401).send();
        }
    } catch {
        res.status(401).send();
    }
}
