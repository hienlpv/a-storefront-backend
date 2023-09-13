import { User } from '../models';
import UserStore from '../models/user';

const userStore = new UserStore();

export default class UserService {
    index(): Promise<User[]> {
        return userStore.index();
    }

    show(id: string): Promise<User | null> {
        return userStore.show(id);
    }

    create(user: Partial<User>): Promise<User> {
        return userStore.create(user);
    }

    login(username: string, password: string): Promise<boolean | string> {
        return userStore.authenticate(username, password);
    }
}
