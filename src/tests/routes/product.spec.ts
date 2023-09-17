import supertest from 'supertest';
import server from '../../server';

const request = supertest(server);

let token = '';

describe('Test endpoint product', () => {
    it('POST /user --> 200', async () => {
        const response = await request.post('/user').send({ username: 'test1', password: 'test1' });
        expect(response.status).toEqual(200);
    });

    it('POST /auth/login --> 200', async () => {
        const response = await request.post('/auth/login').send({ username: 'test1', password: 'test1' });
        token = response.text;
        expect(response.status).toEqual(200);
    });

    it('POST /product --> 200', async () => {
        const response = await request.post('/product').send({ name: 'product 1', price: 1 }).set('Authorization', `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });

    it('GET /product --> 200', async () => {
        const response = await request.get('/product');
        expect(response.status).toEqual(200);
    });

    it('GET /product/:id --> 200', async () => {
        const response = await request.get('/product/1');
        expect(response.status).toEqual(200);
    });
});
