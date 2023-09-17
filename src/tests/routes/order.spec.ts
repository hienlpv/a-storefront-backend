import supertest from 'supertest';
import server from '../../server';

const request = supertest(server);

let token = '';

describe('Test endpoint order', () => {
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

    it('POST /order/product --> 200', async () => {
        const response = await request
            .post('/order/product')
            .send([{ product_id: 1, quantity: 10 }])
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });

    it('GET /order --> 200', async () => {
        const response = await request.get('/order').set('Authorization', `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });

    it('GET /order/:id --> 200', async () => {
        const response = await request.get('/order/1').set('Authorization', `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });
});
