const app = require('../app');
const request = require('supertest')(app);
const { sequelize, Members } = require('../models');
const { describe, it } = require('@jest/globals');

let token;

beforeAll(async () => {
    token = await request.post('/auth/login')
        .send({
            email: 'test@test.com',
            password: '123456'
        })
    token = token.body.user;
})

describe('Members', () => {

    describe('GET /members', () => {

        it('should return an array', async () => {
            const response = await request.get('/members')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        })

        it('should return an array with members', async () => {
            const response = await request.get('/members')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(200);
            response.body.forEach(e => {
                expect(typeof e.id).toBe('number');
                expect(typeof e.name).toBe('string');
                expect(typeof e.image).toBe('string');
                expect(new Date(e.createdAt) instanceof Date).toBeTruthy();
                expect(new Date(e.updatedAt) instanceof Date).toBeTruthy();
            })
        })

    }) // end GET /members

    describe('POST /members', () => {

        it('should create a member', async () => {
            const response = await request.post('/members')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    name: 'Teste',
                    image: 'http://teste.com'
                })
            expect(response.status).toBe(201);
            const member = await Members.findByPk(response.body.member.id);
            expect(member.name).toBe('Teste');
            expect(member.image).toBe('http://teste.com');
        })

        it('should return a 400 error if name not sent', async () => {
            const response = await request.post('/members')
                .set('Authorization', `Bearer ${token}`)
                .send({})
            expect(response.status).toBe(400);
        })

        it('should return a 401 error if token is invalid', async () => {

            request.post('/members')
                .send({
                    name: 'Teste',
                    image: 'http://teste.com'
                })
                .then(response => expect(response.status).toBe(401))

            request.post('/members')
                .set('Authorization', 'Bearer 123')
                .send({
                    name: 'Teste',
                    image: 'http://teste.com'
                })
                .then(response => expect(response.status).toBe(401))

            request.post('/auth/login')
                .send({
                    email: 'test5@test.com',
                    password: '123456'
                })
                .then(res => {
                    request.post('/members')
                        .set('Authorization', `Bearer ${res.body.user}`)
                        .send()
                        .then(response => expect(response.status).toBe(401))
                })
        })


    }) // end POST /members

    describe('PUT /members/:id', () => {

        it('should update a member', async () => {
            const response = await request.put('/members/1')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    name: 'Testee',
                    image: 'http://teste.com.ar'
                })
            expect(response.status).toBe(201);
            const member = await Members.findByPk(1);
            expect(member.name).toBe('Testee');
            expect(member.image).toBe('http://teste.com.ar');
        })

        it('should return a 400 error', async () => {
            const response = await request.put('/members/1')
                .set('Authorization', `Bearer ${token}`)
                .send({})
            expect(response.status).toBe(400);
        })

        it('should return a 401 error if token is invalid', async () => {
            request.put('/members/1')
                .send({
                    name: 'Teste',
                    image: 'http://teste.com'
                })
                .then(response => expect(response.status).toBe(401))

            request.put('/members/1')
                .set('Authorization', 'Bearer 123')
                .send({
                    name: 'Teste',
                    image: 'http://teste.com'
                })
                .then(response => expect(response.status).toBe(401))

            const token = await request.post('/auth/login')
                .send({
                    email: 'test5@test.com',
                    password: '123456'
                })
                .then(res => {
                    request.put('/members/1')
                        .set('Authorization', `Bearer ${res.body.user}`)
                        .then(response => expect(response.status).toBe(401))
                })
        })

    }) // end PUT /members/:id

    describe('DELETE /members/:id', () => {

        it('should delete a member', async () => {
            const response = await request.delete('/members/1')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(201);
            const member = await Members.findByPk(1);
            expect(member).toBeNull();
        })

        it('should return a 401 error if token is invalid', async () => {
            request.delete('/members/1')
                .send({
                    name: 'Teste',
                    image: 'http://teste.com'
                })
                .then(response => expect(response.status).toBe(401))

            request.delete('/members/1')
                .set('Authorization', 'Bearer 123')
                .send({
                    name: 'Teste',
                    image: 'http://teste.com'
                })
                .then(response => expect(response.status).toBe(401))

            request.post('/auth/login')
                .send({
                    email: 'test5@test.com',
                    password: '123456'
                })
                .then(res => {
                    request.delete('/members/1')
                        .set('Authorization', `Bearer ${res.body.user}`)
                        .then(response => expect(response.status).toBe(401))
                })
        })

    })

})

afterAll(() => {
    sequelize.close();
})