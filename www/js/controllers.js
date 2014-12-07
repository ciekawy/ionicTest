angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaCamera,  $cordovaBarcodeScanner) {
  
  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
        console.log("Cancelled -> " + imageData.cancelled);
    }, function(error) {
        console.log("An error happened -> " + error);
    });
  };
  
  $scope.aztec = function() {
    alert('start scanning...');
    try {
      scanner.startScanning();
    } catch (e) {
      alert('exception: ' + e);
    }
  };

  $scope.takePicture = function() {
    alert('x');
    var options = { 
        quality : 75, 
        destinationType : Camera.DestinationType.FILE_URI, 
        sourceType : Camera.PictureSourceType.CAMERA, 
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageURI) {
        $scope.imgURI = imageURI;
    }, function(err) {
        $scope.imageError = err;
        // An error occured. Show a message to the user
    });
  };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
