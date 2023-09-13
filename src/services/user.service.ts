import { User } from '../models';
import UserStore from '../models/user';

const userStore = new UserStore();

export default class UserService {
    index(): Promise<User[]> {
        return userStore.index();
    }

    create(user: Partial<User>): Promise<User> {
        return userStore.create(user);
    }

    login(username: string, password: string): Promise<boolean> {
        return userStore.authenticate(username, password);
    }
}
