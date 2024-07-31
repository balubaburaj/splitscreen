var app = angular.module("spit-screen", ["youtube-embed"]);

app.controller("MainCtrl", function ($scope, $timeout) {
  $scope.name = "World";
  $scope.theBestVideo = "sMKoNBRZM1M";
  $scope.anotherGoodOne = "https://www.youtube.com/watch?v=18-xvIjH8T4";
  $scope.playerVars = {
    autoplay: 0,
    mute: 1,
  };
  $scope.videos = [
    {
      url: "https://www.youtube.com/watch?v=1wECsnGZcfc",
      isMuted: true,
    },
    {
      url: "https://www.youtube.com/live/HGOiuQUwqEw",
      isMuted: true,
    },
    {
      url: "https://www.youtube.com/live/Ko18SgceYX8",
      isMuted: true,
    },
    {
      url: "https://www.youtube.com/live/YGEgelAiUf0",
      isMuted: true,
    },
    {
      url: "https://www.youtube.com/live/tgBTspqA5nY",
      isMuted: true,
    },
    {
      url: "https://www.youtube.com/live/GIT1lX0NdHo",
      isMuted: true,
    },
  ];

  $scope.buttonClick = function (player) {
    //debugger;
    player.stopVideo();
    $scope.playerList.push(player);
  };
  $scope.playerList = [];
  $scope.onLoad = function (testLoad) {
    $scope.playerList.push(testLoad);
    console.log("Div has been loaded and is visible");
    // Custom logic here
  };
  $scope.$on("youtube.player.ready", function ($event, player) {
    // play it again
    //player.playVideo();
    $scope.playerList.push(player);
  });

  $scope.unMute = function (player, video) {
    for (i = 0; i < $scope.playerList.length; i++) {
      $scope.playerList[i].mute();
    }
    player.unMute();
    video.isMuted = false;

    // player.isMuted();
    // //$("#unmute-tbn").trigger("click");
    // //alert(data);
    // if (!player.isMuted()) {
    //   $timeout(function () {
    //     angular.element("#unmute-tbn").triggerHandler("click");
    //   });
    // }

    // // player.unMute();
    // // player.getPlayerState();
    // setTimeout(function () {
    //   $scope.unMute();
    // }, 1000);
  };
  $scope.mute = function (player, video) {
    player.mute();
    video.isMuted = true;
  };
  $scope.play = function (player) {
    player.playVideo();
  };
  $scope.pause = function (player) {
    player.pauseVideo();
  };
  $scope.stop = function (player) {
    player.stopVideo();
  };

  $scope.stopAll = function () {
    for (i = 0; i < $scope.playerList.length; i++) {
      $scope.playerList[i].stopVideo();
      $scope.playerList[i].mute();
      video[i].isMuted = true;
    }
  };
  $scope.startAll = function () {
    //playVideo
    for (i = 0; i < $scope.playerList.length; i++) {
      $scope.playerList[i].playVideo();
    }
  };
  $scope.muteAll = function () {
    //playVideo
    for (i = 0; i < $scope.playerList.length; i++) {
      $scope.playerList[i].mute();
      $scope.videos[i].isMuted = true;
    }
  };
  $scope.pauseAll = function () {
    //playVideo
    for (i = 0; i < $scope.playerList.length; i++) {
      $scope.playerList[i].pauseVideo();
    }
  };
});

app.filter("trusted", [
  "$sce",
  function ($sce) {
    return function (url) {
      var video_id = url.split("v=")[1].split("&")[0];
      return $sce.trustAsResourceUrl(
        "https://www.youtube.com/embed/" + video_id
      );
    };
  },
]);

app.directive("myDirective", function () {
  return {
    restrict: "A",
    link: function (scope, element, attrs) {
      // Watch for the element to be inserted into the DOM
      if (scope.$eval(attrs.myDirective)) {
        scope.$eval(attrs.myDirective);
      }
    },
  };
});
