(function () {
  'use strict'

angular
  .module('shoppingApp')
  .controller('StoreController', StoreController);

  function StoreController () {
    var vm = this;
    vm.view = 'store!';
    vm.quantity = 0;
    vm.subtotal = '$$$$$$';
    vm.quantityOn = true;
    vm.editQuantity = function () {
      vm.quantityOn = !vm.quantityOn;
    }
    vm.addQuantity = function(number) {
      vm.quantity = number;
      vm.quantityOn = true;
      vm.quantity = 0;
    }
    vm.items = [{
        "_id": "55c8ee82152165d244b98300",
        "name": "Bayard stew",
        "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
        "caffeineScale": 244,
        "price": 1540,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
        "__v": 0,
        "categories": [ "dark", "cold"]
    },
    {
      'one': 'first',
      'two': 'second',
      'three': 'third',
      'four': 'fourth',
      'five': 'fifth',
      'imageUrl': 'http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$',
      'name' : 'thereisnoname',
      'categories': ['cat1', 'cat2', 'cat3', 'cat4']
    },
    {
      'one': 'first',
      'two': 'second',
      'three': 'third',
      'four': 'fourth',
      'five': 'fifth',
      'imageUrl': 'http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$',
      'name' : 'thereisnoname',
      'categories': ['cat1', 'cat2', 'cat3', 'cat4']
    }]
  }
})();
