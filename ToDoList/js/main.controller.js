(function() {
  'use strict';

  angular.module('app').controller('MainController', MainController);

  MainController.$inject = ['dataservice', '$q'];

  function MainController(dataservice, $q) {
    var vm = this;
    vm.activate = activate;
 

    function activate() {
      console.log(dataservice.getRandom());
      dataservice.getData('users/john').then(function(res) {
        vm.data1 = res;
        console.log(vm.data1);
        return dataservice.getData('todolist/'+vm.data1.todoListUrl);
      }).then(function(res2){
        vm.data2 = res2;
        console.log(vm.data2);
        return dataservice.getData('meetings/'+vm.data2.meet);
      }).then(function(res3){
        vm.data3 = res3;
        console.log(vm.data3);
      });
    }
  }
})();