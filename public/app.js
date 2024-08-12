const app = angular.module('MAapp', []);

app.controller('MAcontroller', ['$http', function($http){
    const ctrl = this;
    this.msg = 'this is connected';

}] );