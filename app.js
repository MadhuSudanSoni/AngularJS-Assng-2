(function () {
'use strict';

angular.module('DIApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//**1** controller for ToBuy section
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
 	var ToBuy = this;
 	ToBuy.mad = "madhu";
 	ToBuy.toBuy = ShoppingListCheckOffService.getToBuyItems();

	ToBuy.toBought = function (no) {
		ShoppingListCheckOffService.transfer(no);
	}; 	
}

//**2** controller for ToBuy section
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
 	var AlreadyBought = this;
 	AlreadyBought.mad = "madhu";
 	AlreadyBought.bought = ShoppingListCheckOffService.getToBoughtItems();
}


// service function constructor
function ShoppingListCheckOffService () {
	var service = this;
	var toBuy = [];
	toBuy = [
 		{name:"Cookies",quant:"10 Bags"},
 		{name:"Mountain Due",quant:"20 Botels"},
 		{name:"Sugary Drinks",quant:"50 Botels"},
 		{name:"Milk",quant:"100 Botels"},
 		{name:"Cofeee",quant:"25 Packests"},
 		{name:"Cold Drinks",quant:"20 Botels"},
 		{name:"Cake",quant:"40"},
 		{name:"Latte",quant:"20 Botels"},
 		{name:"Chocolate",quant:"15"},
 		{name:"Protien Bar",quant:"10"},
 		];

 	var bought = [];
 	var position = bought.length;

 	service.transfer = function (index) {
 		bought[bought.length] = toBuy[index];
 		toBuy.splice(index, 1)
 		//position++;
 	};

 	service.getToBoughtItems = function () {
 		return bought;
 	};		
 	service.getToBuyItems = function () {
 		return toBuy;
 	};

}

})();
