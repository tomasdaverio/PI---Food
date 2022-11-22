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
      agent.get('/recipes?name=8').expect(400)
    );

    it('should get 400 if name contains special characters', () =>
      agent.get('/recipes?name=hola/').expect(400)
    );

    it('should get 200 if name is  a word', () =>
     agent.get('/recipes?name=pizza').expect(200)
    );

  });

  xdescribe('POST /recipes', () => {

    it('responds with the recipe created', () =>
      agent.post('/recipes')
        .send({name:'Pasta', summary:'Ragazzi'})
        .then((res) => {
          expect(res.body.name).to.equal('Pasta');
        }));
  
    it('responds with 400 if summary is not sent', () =>
      agent.post('/recipes')
        .send({name:'Milanesa a la napolitana'})
        .then((res) => {
          expect(res.status).to.equal(400);
        }));
    
    it('responds with 400 if name is not sent', () =>
      agent.post('/recipes')
        .send({summary:'Lo mejor del mundo'})
        .then((res) => {
          expect(res.status).to.equal(400);
        }));
 
});

});
