angular.module('meanApp')
       .controller('PeopleController', PeopleController);

function PeopleController($http) {
  console.log('PeopleController loaded');
  var controller = this;
  controller.people = [];

  controller.listPeople = function(){
    console.log('Listing people');
    $http.get('/people').then(function(response){
      console.log('response', response);
      controller.people = response.data;
    }, function(error){
      console.log('error making request', error);
    });
  };

  controller.addPerson = function() {
    var data = {name: controller.person.name, hometown: controller.person.hometown, movie: controller.person.movie};
    console.log('data', data);
    $http.post('/people', data).then(function(response){
      console.log('response', response);
    });
  };
}
