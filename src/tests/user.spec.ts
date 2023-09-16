import 'dotenv/config';
import UserStore from '../model/user';

const store = new UserStore();

describe('User Model', () => {
    it('Should be have index method', () => {
        expect(store.index).toBeDefined();
    });

    it('Index method should return a list of products', async () => {
        const result = await store.index();
        expect(result).toEqual([]);
    });
});
