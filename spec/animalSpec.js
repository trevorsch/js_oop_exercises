var Animal = require('../src/animal.js');
var animal;

describe('Animal', function(){

  beforeEach(function(){
    // create a new animal object each time
    animal = new Animal("Fido", 27, "PiG");
  });

  describe('#oink', function(){
    it('should oink if it is a pig', function(){
      expect(animal.oink()).toEqual('Oink');
    });
    it('should not oink if it is not pig', function(){
      animal.kind = "Lion";
      expect(animal.oink()).toEqual("Not a pig");
    });
  });

  describe('#growUp', function(){
    it('should increment the age by one', function(){
      animal.growUp();
      expect(animal.age).toEqual(28);
    });
  });

  describe('#awake', function(){
    it('should initially be off', function(){
      expect(animal.awake).toEqual(false);
    });
  });

   describe('#wakeUp', function(){
    it('should change state to awake', function(){
      animal.wakeUp();
      expect(animal.awake).toEqual(true);
    });
  });

  describe('#sleep', function(){
    xit('should initially be sleeping', function(){

    });
  });

  describe('#feed', function(){
    xit('should get fed if awake', function(){

    });
    xit('not should get fed if sleeping', function(){

    });
  });
});
