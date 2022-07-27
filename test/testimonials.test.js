const app = require('../app');
const request = require('supertest')(app);
const { sequelize } = require('../models');
const { describe, it } = require('@jest/globals');

let token;

beforeAll(async () => {
  token = await request.post('/auth/login').send({
    email: 'test@test.com',
    password: '123456',
  });
  token = token.body.user;
});

describe('Testimonials', () => {
  describe('GET /testimonials', () => {
    it('should return an object with a testimonials array', async () => {
      const response = await request
        .get('/testimonials')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });

    it('should return an array with testimonials', async () => {
      const response = await request
        .get('/testimonials')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
      response.body.forEach(e => {
        expect(typeof e.id).toBe('number');
        expect(typeof e.name).toBe('string');
        expect(typeof e.image).toBe('string');
        expect(typeof e.content).toBe('string');
        expect(new Date(e.createdAt) instanceof Date).toBeTruthy();
        expect(new Date(e.updatedAt) instanceof Date).toBeTruthy();
      });
    });
  });

  describe('DELETE /testimonials/:testimonialId', () => {
    it('should return an error if token is not provided', async () => {
      const response = await request.delete('/testimonials/1');
      expect(response.status).toBe(401);
    });

    it('should return an error if token is not valid', async () => {
      const response = await request
        .delete('/testimonials/1')
        .set('Authorization', 'Bearer 123');
      expect(response.status).toBe(401);
    });

    it('should return an error if user is not an admin', async () => {
      const token = await request.post('/auth/login').send({
        email: 'test5@test.com',
        password: '123456',
      });
      const response = await request
        .delete('/testimonials/1')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(401);
    });

    it('should delete a testimonial', async () => {
      const response = await request
        .delete('/testimonials/1')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Testimony deleted sucessfully');
    });

    it('should return an error if testimonialId is not valid', async () => {
      const response = await request
        .delete('/testimonials/123')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(400);
      expect(response.body.message).toBe('The testimonial id dont exists');
    });
  });
});

afterAll(async () => {
  await sequelize.close();
});
