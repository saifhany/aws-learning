const request = require('supertest');
const app = require('./index');  // Import app

describe('GET /hello', () => {
  it('responds with Hello Sefo! CI/CD is working!', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hello Sefo! CI/CD is working!');
  });
});
