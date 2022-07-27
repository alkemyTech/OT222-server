const app = require('../app');
const request = require('supertest')(app);
const { sequelize, Contact} = require('../models');
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

describe("Contacts", ()=>{
    describe("GET", ()=>{
        it("should return an array", async ()=>{
            const response = await request.get("/contacts")
            .set("Authorization", `Bearer ${token}`)
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true)
        })

        it('should return an array with contacts', async () => {
            const response = await request.get('/contacts')
                .set('Authorization', `Bearer ${token}`)
            expect(response.status).toBe(200);
            response.body.forEach(e => {
                expect(typeof e.id).toBe('number');
                expect(typeof e.name).toBe('string');
                expect(typeof e.phone).toBe('string');
                expect(typeof e.email).toBe('string');
                expect(typeof e.message).toBe('string');
                expect(new Date(e.createdAt) instanceof Date).toBeTruthy();
                expect(new Date(e.updatedAt) instanceof Date).toBeTruthy();
            })
    
        })
        it('should return a 401 error if token is invalid', async () => {
            request.get('/contacts')
                .then(response => expect(response.status).toBe(401))

            request.get('/contacts')
                .set('Authorization', 'Bearer 123')
                .then(response => expect(response.status).toBe(401))

            request.post('/auth/login')
                .send({
                    email: 'test5@test.com',
                    password: '123456'
                })
                .then(res => {
                    request.get('/contacts')
                        .set('Authorization', `Bearer ${res.body.user}`)
                        .send()
                        .then(response => expect(response.status).toBe(401))
            })
        })
    })
    describe("POST", ()=>{
        it('should create a contact', async () => {
            const response = await request.post('/contacts')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    name: 'Teste',
                    phone: "+54 9 5552222",
                    email:"test@tes.com",
                    message:"hola aca estoy"
                })
            expect(response.status).toBe(201);
            const contact = await Contact.findByPk(response.body.contact.id);
            expect(contact.name).toBe('Teste');
            expect(contact.phone).toBe('+54 9 5552222');
            expect(contact.email).toBe('test@tes.com');
            expect(contact.message).toBe('hola aca estoy');
            
        })
    })
})



afterAll(() => {
    sequelize.close();
})