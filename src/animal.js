function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
}

Animal.prototype.oink = function(){
  if(this.kind.toUpperCase() === "PIG"){
    return "Oink";
  } else {
    return "Not a pig";
  }
};

Animal.prototype.growUp = function () {
  this.age ++;
};

Animal.prototype.wakeUp = function() {
  this.awake = true;
};

Animal.prototype.sleep = function () {
  this.awake = false;
};

Animal.prototype.feed = function () {
  if(this.awake){
    return "NOM NOM NOM";
  } else{
    return 'animal is asleep';
  }
};
module.exports=Animal;
