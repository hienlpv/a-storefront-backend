import 'dotenv/config';
import { User } from '../../model';
import UserService from '../../service/user.service';

const userService = new UserService();

describe('User Service', () => {
    it('Should be have index method', () => {
        expect(userService.index).toBeDefined();
    });

    it('Index method should return a list of users', async () => {
        const result = await userService.index();
        expect(result).toBeInstanceOf(Array);
    });

    it('Create method should return a hash password', async () => {
        const user: User = {
            username: 'test',
            password: 'test',
            firstName: 'test',
            lastName: 'test',
        };
        const result = await userService.create(user);
        expect(result.password).not.toEqual(user.password);
    });

    it('Authenticate method should return valid token', async () => {
        const result = await userService.authenticate('test', 'test');
        expect(result).toBeTruthy();
    });

    it('Authenticate method should return false', async () => {
        const result = await userService.authenticate('test', 'test123');
        expect(result).toBeFalsy();
    });
});
