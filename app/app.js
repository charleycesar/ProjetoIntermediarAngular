    Imagens = [];
    var app = angular.module('app',['ngRoute','angular-carousel','ngSanitize']);
     
    app.config(function($routeProvider, $locationProvider)
    {
          
    // remove o # da url
    $locationProvider.html5Mode(true);
    
    $routeProvider
    // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
    .when('/home', {
    templateUrl : path+'/app/views/home.html',
    controller : 'HomeCtrl',
    })
     
    // para a rota '/objetivos', carregaremos o template objetivos.html e o controller 'ObjetivosCtrl'
    .when('/objetivos', {
    templateUrl : path+'/app/views/objetivos.html',
    controller : 'ObjetivosCtrl',
    })
    
    // para a rota '/equipe', carregaremos o template equipe.html e o controller 'EquipeCtrl'
    .when('/equipe', {
    templateUrl : path+'/app/views/equipe.html',
    controller : 'EquipeCtrl',
    })

    // para a rota '/galeria', carregaremos o template galeria.html e o controller 'GaleriaCtrl'
    .when('/galeria', {
    templateUrl : path+'/app/views/galeria.html',
    controller : 'GaleriaCtrl',
    })

    // para a rota '/quem_somos', carregaremos o template quem_somos.html e o controller 'QuemSomosCtrl'
    .when('/quem_somos', {
    templateUrl : path+'/app/views/quem_somos.html',
    controller : 'QuemSomosCtrl',
    })
     
    // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
    .when('/contato', {
    templateUrl : path+'/app/views/contato.php',
    controller : 'ContatoCtrl',
    })
     
    // caso não seja nenhum desses, redirecione para a rota '/'
    .otherwise ({ redirectTo: '/home' });
    });

