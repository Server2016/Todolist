(function() {
  angular
  .module('app.helpers')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var users = ['john', 'sally'];
    var service = {
      getData: getData,
      getRandom: getRandom
    };
    return service;

    function getRandom(){
      return users[Math.floor(Math.random()*users.length)];
    }

    function getData(path) {
      return $http.get('data/'+path+'.json').then(function(res) {
        return res.data.testData;
      })
    }
  }
})();