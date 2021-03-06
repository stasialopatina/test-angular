"use strict"
angular.module('products')
   .config(function estateConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('products', {
                url: '/products',
                views: {
                  "navbar": {
                      templateUrl: 'app/modules/products/views/navbar.html'
                  },
                    "products": {
                        controller: 'productsController',
                        templateUrl: 'app/modules/products/views/products.html'
                    }
                }
            })
    });
