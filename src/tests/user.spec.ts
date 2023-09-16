import 'dotenv/config';
import UserStore from '../model/user';
import config from '../config';

const store = new UserStore();

describe('User Model', () => {
    it('Should be have index method', () => {
        expect(store.index).toBeDefined();
    });

    it('Index method should return a list of products', async () => {
        console.log('config.server.env', config.server.env);
        console.log('process.env', process.env);
        const result = await store.index();
        expect(result).toEqual([]);
    });
});
