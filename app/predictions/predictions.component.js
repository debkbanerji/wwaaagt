angular.module('predictions').component('predictions', {
    templateUrl: 'predictions/predictions.template.html',

    controller: ['$routeParams', '$route', '$firebaseObject', '$firebaseArray', function predictionsController($routeParams, $route, $firebaseObject, $firebaseArray) {
        var self = this;
        // var canPredict = false;
        self.user = firebase.auth().currentUser;
        self.rangesRef = firebase.database().ref().child("ranges");
        self.predicted = firebase.database().ref().child("already-predicted");
        self.thisUserRef = self.predicted.child(self.user.uid);

        console.log(self.user.uid);
        self.ranges = $firebaseArray(self.rangesRef);
        // console.log("PREDICTED");

        self.thisUserObj = $firebaseObject(self.thisUserRef);
        // console.log(self.thisUserObj);

        self.predict = function(range) {
            self.thisUserObj.$value = self.user.displayName;
            self.thisUserObj.$save();
            // console.log(range.users);
            // console.log(self.user);
            if (!range.users) {
                range.users = [];
            }
            range.users.push(self.user.displayName);
            self.ranges.$save(range).then(function(ref) {
                // console.log(ref);
            }, function(error) {
                // console.log("Error:", error);
            });
        }
    }]
});