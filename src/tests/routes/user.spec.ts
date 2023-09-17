import supertest from 'supertest';
import server from '../../server';

const request = supertest(server);

let token = '';

describe('Test endpoint user', () => {
    it('POST /user --> 200', async () => {
        const response = await request.post('/user').send({ username: 'test1', password: 'test1' });
        expect(response.status).toEqual(200);
    });

    it('POST /auth/login --> 200', async () => {
        const response = await request.post('/auth/login').send({ username: 'test1', password: 'test1' });
        token = response.text;
        expect(response.status).toEqual(200);
    });

    it('GET /user --> 200', async () => {
        const response = await request.get('/user').set('Authorization', `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });

    it('GET /user/profile --> 200', async () => {
        const response = await request.get('/user/profile').set('Authorization', `Bearer ${token}`);
        expect(response.status).toEqual(200);
    });
});
