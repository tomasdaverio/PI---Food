/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  name: 'Milanesa a la napolitana',
  summary: 'Lo mejor del mundo'
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  xdescribe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
    it('should get 400 if name is not a word', () =>
      agent.get('/recipes?name=8').expect(500)
    );
    it('should get 400 if name contains special characters', () =>
      agent.get('/recipes?name=hola/').expect(500)
    );
  });
    it('should get 200 if name is  a word', () =>
     agent.get('/recipes?name=pizza').expect(200)
);
 
});
