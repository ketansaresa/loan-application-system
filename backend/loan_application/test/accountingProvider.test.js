import request from 'supertest'
import app from '../app';

describe('Accounting Provider Controller', () => {
  it('should return an array of objects with _id and name properties', async () => {
    const res = await request(app).get('/api/accounting/providers');
    
    const expectedResponse = [
      { _id: expect.any(Number), name: expect.any(String) }
    ];

    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining(expectedResponse));
  });

  it('should return an array of objects with given properties', async () => {
    const res = await request(app).get('/api/accounting/balanceSheet/1');

    const expectedResponse = [
      {
        year: expect.any(Number),
        month: expect.any(Number),
        profitOrLoss: expect.any(Number),
        assetsValue: expect.any(Number)
      }
    ];

    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining(expectedResponse));
  });
});