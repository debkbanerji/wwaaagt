angular.module('predictions').component('predictions', {
    templateUrl: 'predictions/predictions.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function predictionsController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        var user = firebase.auth().currentUser;
        self.predictionsRef = firebase.database().ref().child("users").child(user.uid).child("predictions");
    }]
});