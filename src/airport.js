var Airport = function(capacity=50) {
  this.planes = []
  this.capacity = capacity
};

Airport.prototype.update_capacity = function(capacity){
  this.capacity = capacity;
  return "capacity set to " + capacity;
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
