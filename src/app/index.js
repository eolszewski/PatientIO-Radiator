'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies', 'ngTouch',
  'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                    $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.platform', {
        url: '/platform',
        templateUrl: 'app/views/platform.html',
        controller: 'PlatformController',
        controllerAs: 'vm',
        data: {
          title: 'Platform'
        }
      })
      .state('home.dashboard', {
        url: '/dashboard',
        controller: 'DashboardController',
        controllerAs: 'vm',
        templateUrl: 'app/views/dashboard.html',
        data: {
          title: 'Dashboard'
        }
      })
      .state('home.mobile', {
        url: '/mobile',
        controller: 'MobileController',
        controllerAs: 'vm',
        templateUrl: 'app/views/mobile.html',
        data: {
          title: 'Mobile'
        }
      });

    $urlRouterProvider.otherwise('/platform');

    $mdThemingProvider
      .theme('default')
        .primaryPalette('teal', {
          'default': '300'
        })
        .accentPalette('teal', {
          'default': '300'
        })
        .warnPalette('magenta')
        .backgroundPalette('white');

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('white', 'default')
      .primaryPalette('white');

    $mdThemingProvider.definePalette('magenta', {
      '50':  '#E75753',
      '100': '#E75753',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

  $mdThemingProvider.definePalette('white', {
    '50': '#FFFFFF',
    '100': '#FFFFFF',
    '200': '#FFFFFF',
    '300': '#FFFFFF',
    '400': '#FFFFFF',
    '500': '#FFFFFF',
    '600': '#FFFFFF',
    '700': '#FFFFFF',
    '800': '#FFFFFF',
    '900': '#FFFFFF',
    'A100': '#FFFFFF',
    'A200': '#FFFFFF',
    'A400': '#FFFFFF',
    'A700': '#FFFFFF',
    'contrastDefaultColor': 'dark'
  });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
  });
