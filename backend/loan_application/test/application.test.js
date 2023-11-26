import request from 'supertest'
import app from '../app';

describe('Application Controller', () => {
  it('should return error on invalid payload', async () => {
    const res = (await request(app).post('/api/application/submit').send({}));

    expect(res.status).toBe(400);
    expect(res.body).toEqual(expect.objectContaining({ errors: expect.any(Array) }));
  });

  it('should return success on submit', async () => {
    const res = (await request(app).post('/api/application/submit').send({
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      businessName: 'test',
      taxId: 123,
      yearEstablished: 1992,
      amountRequested: 500000,
      balanceSheet: [
        {
          "year": 2020,
          "month": 12,
          "profitOrLoss": 250000,
          "assetsValue": 1234
        },
        {
          "year": 2020,
          "month": 11,
          "profitOrLoss": 1150,
          "assetsValue": 5789
        },
        {
          "year": 2020,
          "month": 10,
          "profitOrLoss": 2500,
          "assetsValue": 22345
        },
        {
          "year": 2020,
          "month": 9,
          "profitOrLoss": -187000,
          "assetsValue": 223452
        },
        {
          "year": 2020,
          "month": 8,
          "profitOrLoss": 17000,
          "assetsValue": 23452
        }
      ]
    }));

    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.objectContaining({
      approved: expect.any(Boolean),
      amount: expect.any(Number),
      preAssessment: expect.any(Number),
      profitLossSummary: expect.any(Number),
      businessName: expect.any(String)
    }));
  });
});