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
module.exports=Animal;
