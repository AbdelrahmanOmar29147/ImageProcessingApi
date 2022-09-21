import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('endpoint test suit', () => {
  it('test /api endpoint', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('test /api + valid query', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api?filename=fjord&width=250&height=250'
    );
    expect(response.status).toBe(200);
  });
});
