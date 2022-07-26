const app = require('../app');
const request = require('supertest')(app);
const { sequelize } = require('../models');
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

describe('Users', () => {

    describe('GET /users', () => {
        it('should return an array', async () => {
            const response = await request.get('/users')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        })

        it('should return an array with users', async () => {
            const response = await request.get('/users')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(200);
            response.body.forEach(e => {
                expect(typeof e.id).toBe('number');
                expect(typeof e.firstName).toBe('string');
                expect(typeof e.lastName).toBe('string');
                expect(typeof e.email).toBe('string');
                expect(typeof e.roleId === 'number' || e.roleId === null).toBeTruthy();
                expect(new Date(e.createdAt) instanceof Date).toBeTruthy();
                expect(new Date(e.updatedAt) instanceof Date).toBeTruthy();
            })

        })

        it('should return an error if token is not provided', async () => {
            const response = await request.get('/users')
            expect(response.status).toBe(401);
        })

        it('should return an error if token is not valid', async () => {
            const response = await request.get('/users')
                .set('Authorization', 'Bearer 123')
            expect(response.status).toBe(401);
        })

        it('should return an error if user is not an admin', async () => {
            const token = await request.post('/auth/login')
                .send({
                    email: 'test5@test.com',
                    password: '123456'
                })
            const response = await request.get('/users')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(401);
        })

    })

    describe('DELETE /users/:userId', () => {

        it('should delete a user', async () => {
            const response = await request.delete('/users/10')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(200);
            expect(response.body.success).toBe('User deleted');
        })

        it('should return an error if userId is not valid', async () => {
            const response = await request.delete('/users/123')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(400);
            expect(response.body.error).toBe('User not found');
        })

        it('should return an error if token is not provided', async () => {
            const response = await request.delete('/users/1')
            expect(response.status).toBe(401);
        })

        it('should return an error if token is not valid', async () => {
            const response = await request.delete('/users/1')
                .set('Authorization', 'Bearer 123')
            expect(response.status).toBe(401);
        })

        it('should return an error if user is not an admin', async () => {
            const token = await request.post('/auth/login')
                .send({
                    email: 'test5@test.com',
                    password: '123456'
                })
            const response = await request.delete('/users/1')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(401);
        })

    })

})


afterAll(async () => {
    await sequelize.close();
})