(function () {
  'use strict'

angular
  .module('shoppingApp')
  .controller('StoreController', StoreController);

StoreController.$inject = ['$timeout', 'InventoryService'];

  function StoreController ($timeout, InventoryService) {
    var vm = this;
    vm.items = InventoryService.getTeas();
    vm.view = 'store!';
    vm.cart = [];
    vm.cartSubtotal = 0;
    vm.cartQuantity = 0;
    vm.tooMany = false;
    vm.categories = [];
    vm.orderByCategory = '';

    vm.filterOut = function(item) {
      if((item.categories.indexOf(vm.orderByCategory) > -1) ||
          vm.orderByCategory === ''){
        return true;
      }else{
        return false;
      }
    }

    for(var i = 0; i < vm.items.length; i++) {
      vm.items[i].quantityInCart = 0;
      vm.items[i].quantityToAdd = 1;
      vm.items[i].quantityInStock = 5;
      if(vm.items[i].quantityInStock > 0) {
        vm.items[i].inStock = true;
      }
      for(var j = 0; j < vm.items[i].categories.length; j++) {
        if(vm.categories.indexOf(vm.items[i].categories[j]) < 0) {
          vm.categories.push(vm.items[i].categories[j]);
        }
      }
    }

    vm.addQuantity = function(index) {
      if((vm.items[index].quantityInCart +
        vm.items[index].quantityToAdd) > vm.items[index].quantityInStock){
          vm.tooMany = true;
          $timeout(function(){
            vm.tooMany = false}, 3000);
          return;
        }
      vm.items[index].quantityInCart += vm.items[index].quantityToAdd;
      vm.cartQuantity += vm.items[index].quantityToAdd;
      vm.items[index].quantityToAdd = 1;
      vm.cartSubtotal += vm.items[index].price * vm.items[index].quantityInCart;
    }

    vm.editQuantity = function (index) {
      // vm.items[index].quantityOn = !vm.items[index].quantityOn;
    }

  }
})();
