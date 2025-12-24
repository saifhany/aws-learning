const request = require('supertest');
const app = require('./index');  // Import app

describe('GET /hello', () => {
  it('responds with Hello Sefo!', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Hello Sefo!');
  });
});
