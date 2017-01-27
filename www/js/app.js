// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// .run(function ($rootScope, $state, $log) is from https://market.ionic.io/plugins/material-design

var choosingApp = angular.module('starter', ['ionic', 'ngCordova'])


.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


// Route for the tabs

choosingApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('tabs', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

// Difficulties tab
  .state('tabs.difficulties', {
    url:'/difficulties',
    views: {
      'difficulties-tab' : {
        templateUrl: 'templates/difficulties.html',
        controller: 'DifficultiesController'
      }
    }
  })

// Details difficulties
  .state('tabs.ddetails', {
    url:'/difficulties/:dId',
    views: {
      'difficulties-tab' : {
        templateUrl: 'templates/ddetails.html',
        controller: 'DifficultiesController'
      }
    }
  })

// Help tab
  .state('tabs.help', {
    url:'/help',
    views: {
      'help-tab' : {
        templateUrl: 'templates/help.html',
        controller: 'HelpController'
      }
    }
  })

// Details help
  .state('tabs.hdetails', {
    url:'/help/:hId',
    views: {
      'help-tab' : {
        templateUrl: 'templates/hdetails.html',
        controller: 'HelpController'
      }
    }
  })

// About tab
  .state('tabs.about', {
    url:'/about',
    views: {
      'about-tab' : {
        templateUrl: 'templates/about.html'
      }
    }
  })

// Useful information
  .state('tabs.usInfo', {
  url: '/about/usInfo',
  views: {
    'about-tab' : {
      templateUrl: 'templates/usInfo.html',
      controller: 'InfoController'
    }
  }
})

// Location of help centers
.state('tabs.center', {
  url: '/about/center',
  views: {
    'about-tab' : {
      templateUrl: 'templates/center.html',
      controller: 'InfoController'
    }
  }
})

// FAQ
.state('tabs.FAQ', {
  url: '/about/FAQ',
  views: {
    'about-tab' : {
      templateUrl: 'templates/FAQ.html'
    }
  }
})

// What ratings mean
.state('tabs.rating', {
  url: '/about/rating',
  views: {
    'about-tab' : {
      templateUrl: 'templates/rating.html'
    }
  }
})

// Feedback
.state('feedback', {
      url: '/feedback',
      templateUrl: 'templates/feedback.html',
      controller: 'InfoController'
    })

// App guide
  .state('appguide', {
      url: '/appguide',
      templateUrl: 'templates/appguide.html'

    })

// Default
  $urlRouterProvider.otherwise('/tab/difficulties');
})


// Controller for the popover
choosingApp.controller('AppController', function($scope, $ionicPopover) {
  $ionicPopover.fromTemplateUrl('templates/settings.html', {
    scope: $scope,
  }).then(function(popover) {

    // Open popover
    $scope.popover = popover;
  });

    // Close popover
    $scope.closePopover = function() {
    $scope.popover.hide();
  };
})


// Difficulties tab controller. Gets data from data.json
choosingApp.controller('DifficultiesController', ['$scope', '$http', '$state',
function($scope, $http, $state) {
  $http.get('js/data.json').success(function(data) {
    $scope.difficulties = data.difficulties;
    $scope.whichdifficulty=$state.params.dId;
  })
}])

// Help tab controller. Gets data from data.json
choosingApp.controller('HelpController', ['$scope', '$http', '$state',
function($scope, $http, $state) {
  $http.get('js/data.json').success(function(data) {
    $scope.help = data.help;
    $scope.whichhelp=$state.params.hId;
  })
}])

// Useful information controller
choosingApp.controller('InfoController', ['$scope', '$http', '$state',
function($scope, $http, $state) {
  $http.get('js/data.json').success(function(data) {
    $scope.information = data.information;

  })

  $scope.openPage1 = function(){
  // Open in app browser
  window.open('http://www.addiss.co.uk/','_system','location=yes');
};
$scope.openPage2 = function(){
  // Open in app browser
  window.open('http://www.b-eat.co.uk/Home','_system','location=yes');
};
$scope.openPage3 = function(){
  // Open in app browser
  window.open('http://www.talktofrank.com/','_system','location=yes');
};
$scope.openPage4 = function(){
  // Open in app browser
  window.open('http://www.mentalhealth.org.uk/','_system','location=yes');
};
$scope.openPage5 = function(){
  // Open in app browser
  window.open('http://www.autism.org.uk/','_system','location=yes');
};
$scope.openPage6 = function(){
  // Open in app browser
  window.open('http://www.familylives.org.uk/','_system','location=yes');
};
$scope.openPage7 = function(){
  // Open in app browser
  window.open('http://www.rcpsych.ac.uk/mentalhealthinformation.aspx','_system','location=yes');
};
$scope.openPage8 = function(){
  // Open in app browser
  window.open('http://www.ru-ok.com/','_system','location=yes');
};
$scope.openPage9 = function(){
  // Open in app browser
  window.open('http://www.childline.org.uk/','_system','location=yes');
};
$scope.openPage10 = function(){
  // Open in app browser
  window.open('http://www.tourettes-action.org.uk/','_system','location=yes');
};
$scope.openPage11 = function(){
  // Open in app browser
  window.open('http://www.youngminds.org.uk/','_system','location=yes');
};
$scope.openPage12 = function(){
  // Open in app browser
  window.open('http://www.youthinmind.info/','_system','location=yes');
};
$scope.openPage13 = function(){
  // Open in app browser
  window.open('http://www.nice.org.uk/','_system','location=yes');
};

$scope.openMap1 = function(){
  // Open in app browser
  window.open('https://www.google.co.uk/maps/place/The+London+Mental+Healthcare+Centre/@51.4387395,-0.0160406,17z/data=!3m1!4b1!4m5!3m4!1s0x4876021b1d6c0f17:0x48c317df3afda5d6!8m2!3d51.4387362!4d-0.0138519','_system','location=yes');
};

$scope.openPage14 = function(){
  // Open in app browser
  window.open('https://www.surveymonkey.com/r/choosingfeedback?sm=GC7B3tiCrq78Zk9xHKqUbhlzbZrZB6dsqJkIUCl8MPM%3d','_system','location=yes');
};

$scope.openPage15 = function(){
  // Open in app browser
  window.open('mailto:ebpu@annafreud.org','_system','location=yes');
};

}])

// Puts tabs on the top for Android screens. Function from https://market.ionic.io/plugins/material-design
.run(function ($rootScope, $state, $log) {
    $rootScope.$on('$stateChangeSuccess', function () {
        $log.log($state.current.name);
        var tabs = angular.element(document.querySelector(".tabs-top"));
        if ($state.current.name == "tabs.difficulties") {
            tabs.addClass('subheader');
        }
        else {
            tabs.removeClass('subheader');
        }
    });
});
