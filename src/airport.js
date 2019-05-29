var Airport = function() {
  this.planes = []
  this.capacity = 50
};

Airport.prototype.land = function(plane) {
  if (this.planes.length >= this.capacity){
    throw 'Airport is full!';
  }
  return this.planes.push(plane);
};

Airport.prototype.take_off = function(plane){
  return this.planes.pop(plane);
};
