import { User } from '../models';
import UserStore from '../models/user';

const userStore = new UserStore();

export default class UserService {
    index(): Promise<User[]> {
        return userStore.index();
    }
}
