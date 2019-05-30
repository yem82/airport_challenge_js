describe('Airport',function(){
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport(50);
  });

  describe ('initialization', function(){

    it ('airport has no planes', function() {
      expect(airport.planes).toEqual([]);
    });

    it ('airport has a default capacity', function() {
      expect(airport.capacity).toEqual(50)
    });
  });

  describe ('airport capacity size can be changed', function(){

    it ('able to update capacity', function(){
      airport.update_capacity(100);
      expect(airport.capacity).toEqual(100)
    })

  });

  describe ('plane landing and taking off', function() {

    beforeEach(function(){
      plane = new Plane();
    });

    describe ('landing', function(){

      it ('a plane can land at an airport', function(){
        airport.land(plane);
        expect(airport.planes).toEqual([plane]);
      });

      it ('raises an error when airport is full', function() {
        for (i = 0; i < 50; i++) {
              airport.land(plane);
            }
        expect(function(){ airport.land(plane); }).toThrow('Airport is full!');
      });
    });

    describe ('take off', function() {

      it('a plane can take off from an airport', function() {
        airport.land(plane);
        airport.take_off(plane);
        expect(airport.planes).not.toContain(plane);
      });
    });
  });
});