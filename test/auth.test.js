const app = require('../app');
const request = require('supertest')(app);
const { sequelize } = require('../models');
const { describe, it } = require('@jest/globals');

describe('Auth', () => {
    describe('POST auth/register', () => {

        it('should create a new user', async () => {
            const response = await request.post('/auth/register')
                .send({
                    email: 'test@test1.com',
                    password: 'test1234',
                    firstName: 'test',
                    lastName: 'test'
                })
            expect(response.status).toBe(200)
            expect(response.body.auth).toBe('ok')
        })

        it('should return a valid token', async () => {
            const response = await request.post('/auth/register')
                .send({
                    email: 'test@test2.com',
                    password: 'test1234',
                    firstName: 'test',
                    lastName: 'test'
                })
            expect(response.status).toBe(200)
            expect(response.body.auth).toBe('ok')
            expect(typeof response.body.token).toBe('string')
        })

        it('should return an error if email is already in use', async () => {
            const response = await request.post('/auth/register')
                .send({
                    email: 'test@test.com',
                    password: 'test1234',
                    firstName: 'test',
                    lastName: 'test'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('Email is already in use')
        })

        it('should return an error if email has not got proper format', async () => {
            let response = await request.post('/auth/register')
                .send({
                    password: 'test1234',
                    firstName: 'test',
                    lastName: 'test'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('Email is required')

            response = await request.post('/auth/register')
                .send({
                    email: 'test',
                    password: 'test1234',
                    firstName: 'test',
                    lastName: 'test'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('Email must be a valid email address')
        })

        it('should return an error if password has not got proper format', async () => {
            let response = await request.post('/auth/register')
                .send({
                    email: 'test@test3.com',
                    firstName: 'test',
                    lastName: 'test'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('Password is required')

            response = await request.post('/auth/register')
                .send({
                    email: 'test@test3.com',
                    password: 'test',
                    firstName: 'test',
                    lastName: 'test'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('Password must be between 8 and 15 characters')

            response = await request.post('/auth/register')
                .send({
                    email: 'test@test3.com',
                    password: 'testtesttesttest',
                    firstName: 'test',
                    lastName: 'test'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('Password must be between 8 and 15 characters')
        })

        it('should return an error if firstName has not got proper format', async () => {
            let response = await request.post('/auth/register')
                .send({
                    email: 'test@test3.com',
                    password: 'test1234',
                    lastName: 'test'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('First name is required')

            response = await request.post('/auth/register')
                .send({
                    email: 'test@test3.com',
                    password: 'test1234',
                    lastName: 'test',
                    firstName: 'te'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('First name must be between 3 and 15 characters')

            response = await request.post('/auth/register')
                .send({
                    email: 'test@test3.com',
                    password: 'test1234',
                    lastName: 'test',
                    firstName: 'testtesttesttest'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('First name must be between 3 and 15 characters')
        })

        it('should return an error if lastName has not got proper format', async () => {
            let response = await request.post('/auth/register')
                .send({
                    email: 'test@test3.com',
                    password: 'test1234',
                    firstName: 'test'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('Last name is required')

            response = await request.post('/auth/register')
                .send({
                    email: 'test@test3.com',
                    password: 'test1234',
                    firstName: 'test',
                    lastName: 'te'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('Last name must be between 3 and 15 characters')

            response = await request.post('/auth/register')
                .send({
                    email: 'test@test3.com',
                    password: 'test1234',
                    firstName: 'test',
                    lastName: 'testtesttesttest'
                })
            expect(response.status).toBe(422)
            expect(response.body[0].errors[0].msg).toBe('Last name must be between 3 and 15 characters')
        })
    })

    describe('POST auth/login', () => {

        it('should return a valid token', async () => {
            const response = await request.post('/auth/login')
                .send({
                    email: 'test@test.com',
                    password: '123456'
                })
            expect(response.status).toBe(200)
            expect(response.body.ok).toBe(true)
            expect(typeof response.body.user).toBe('string')
        })

        it('should return an error if email is not in use', async () => {
            const response = await request.post('/auth/login')
                .send({
                    email: 'test@test4.com',
                    password: '123456'
                })
            expect(response.status).toBe(401)
            expect(response.body.ok).toBe(false)
        })

        it('should return an error if password is not correct', async () => {
            const response = await request.post('/auth/login')
                .send({
                    email: 'test@test.com',
                    password: '1234567'
                })
            expect(response.status).toBe(401)
            expect(response.body.ok).toBe(false)
        })

    })

    describe('POST auth/me', () => {
        it('should return the user', async () => {
            const response = await request.post('/auth/login')
                .send({
                    email: 'test@test.com',
                    password: '123456'
                })
            const response2 = await request.get('/auth/me')
                .set('Authorization', `Bearer ${response.body.user}`)
            expect(response2.status).toBe(200)
            expect(response2.body.firstName).toBeTruthy()
            expect(response2.body.lastName).toBeTruthy()
            expect(response2.body.email).toBeTruthy()
        })

        it('should return an error if token is not valid', async () => {
            const response = await request.get('/auth/me')
                .set('Authorization', 'Bearer 123')
            expect(response.status).toBe(401)
        })

        it('should return an error if token is not provided', async () => {
            const response = await request.get('/auth/me')
            expect(response.status).toBe(401)
        })

    })

})

afterAll(async () => {
    await sequelize.close();
})