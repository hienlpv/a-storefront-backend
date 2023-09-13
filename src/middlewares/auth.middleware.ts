import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import config from '../config';
import UserService from '../services/user.service';

const userService = new UserService();
const whiteList = ['/user/login'];

export async function verifyAuthToken(req: Request, res: Response, next: NextFunction) {
    try {
        if (whiteList.includes(req.url)) return next();

        const token = req.headers.authorization?.split(' ')[1];

        if (token) {
            const decoded = jwt.verify(token, config.jwt.secret) as JwtPayload;
            req.body.user = await userService.show(decoded.userId);
            next();
        } else {
            res.status(401).send();
        }
    } catch {
        res.status(401).send();
    }
}
