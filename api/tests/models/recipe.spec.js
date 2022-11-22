const { Recipe, conn } = require('../../src/db.js');
const { expect , should } = require('chai');


describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));

    xdescribe('Name/Summary', () => {
      it('should throw an error if name is null',(done) => {
        Recipe.create({summary:'lo mejor del mundo'})
        .then(()=>done(new Error('name is mandatory field')))
        .catch((error)=> {
          expect(error.message).to.equal('notNull Violation: recipe.name cannot be null') ;
          done();
        })         
      });
         
      it('should throw an error if summary is null',(done) => {
        Recipe.create({name:'Milanesa a la napolitana'})
        .then(()=>done(new Error('Summary is mandatory field')))
        .catch((error)=> {
          expect(error.message).to.equal('notNull Violation: recipe.summary cannot be null') ;
          done();
        })         
      });

      it('should create the Recipe when we pass it a valid name and summary',(done) => {
        Recipe.create({name:'Milanesa a la napolitana',summary:'lo mejor del mundo'}) 
        .then((res) => {
          expect(res.dataValues.name).to.equal('Milanesa a la napolitana') ;
          done();
        })
        .catch(()=> done(new Error('It should work with valid name and summary')) )         
      });

      it('should not dupplicate recipes with the same name', () => {
        Recipe.create({name:'Milanesa a la napolitana',summary:'lo mejor del mundo'})
        .then(()=>Recipe.create({name:'Milanesa a la napolitana',summary:'lo mejor del mundo'}))
        .then(()=>{ done(new Error('DB should avoid recipes with equal name')) })
        .catch((error)=> {
          expect(error.name).to.equal('SequelizeUniqueConstraintError')
          done() ;
        })
      });
    });

    xdescribe('Health Score', () => {

      it('should throw an error if Health Score is not a Number',(done) => {
        Recipe.create({name:'Milanesa a la napolitana',summary:'lo mejor del mundo',hscore:{}})
        .then(()=>done(new Error('Recipe creation should be rejected if health score data type is not a Number'))) 
        .catch((error)=> {
          expect(error.message).to.include('la sintaxis de entrada no es válida');
          done() ;
        })        
      });

      it('should throw an error if Health Score is not between 0 and 100',(done) => {
        Recipe.create({name:'Milanesa a la napolitana',summary:'lo mejor del mundo',hscore:120})
        .then(()=>done(new Error('Should reject if Health Score is out of [0,100]'))) 
        .catch((error)=> {
          expect(error.message).to.equal('Validation error: hscore must be between 0 and 100');
          done() ;
        })        
      });

      it('should throw an error if Health Score is not an entire number',(done) => {
        Recipe.create({name:'Milanesa a la napolitana',summary:'lo mejor del mundo',hscore:90.4})
        .then(()=>done(new Error('Should reject float numbers'))) 
        .catch((error)=> {
          expect(error.message).to.include('la sintaxis de entrada no es válida para tipo integer');
          done() ;
        })             
      });

      it('should create the recipe if Health Score is a Number ',(done) => {
        Recipe.create({name:'Milanesa a la napolitana',summary:'lo mejor del mundo',hscore:8})
        .then((res)=> {
          expect(res.dataValues.name).to.equal('Milanesa a la napolitana');
          done() ;
        }) 
        .catch((error)=> done(new Error('Should work with a number')))        
      });
    });

    
    xdescribe('Instructions', () => {
      it('should throw an error if Instructions is not a string',(done) => {
        Recipe.create({name:'Milanesa a la napolitana',summary:'lo mejor del mundo',instructions:[]})
        .then(()=>done(new Error('Should reject a data type different to string type'))) 
        .catch((error)=> {
          expect(error.message).to.include('cannot');
          done() ;
        })
      });
      it('should create the recipe if instructions typeof is string',(done) => {
        Recipe.create({name:'Milanesa a la napolitana',summary:'lo mejor del mundo',instructions:'1.Turn on the oven..'})
        .then((res)=> {
          expect(res.dataValues.name).to.equal('Milanesa a la napolitana');
          done() ;
        }) 
        .catch((error)=> done(new Error('Recipe should be created if instructions data type is string')))        
      });
    });

  });
});
