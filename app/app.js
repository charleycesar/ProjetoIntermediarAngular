    Imagens = [];
    var app = angular.module('app',['ngRoute']);
     
    app.config(function($routeProvider, $locationProvider)
    {
    // remove o # da url
    $locationProvider.html5Mode(true);
     
    $routeProvider
     
    // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
    .when('/onpage', {
    templateUrl : '/onpage/app/views/home.html',
    controller : 'HomeCtrl',
    })
     
    // para a rota '/objetivos', carregaremos o template objetivos.html e o controller 'ObjetivosCtrl'
    .when('/objetivos', {
    templateUrl : '/onpage/app/views/objetivos.html',
    controller : 'ObjetivosCtrl',
    })
    
    // para a rota '/equipe', carregaremos o template equipe.html e o controller 'EquipeCtrl'
    .when('/equipe', {
    templateUrl : '/onpage/app/views/equipe.html',
    controller : 'EquipeCtrl',
    })

    // para a rota '/galeria', carregaremos o template galeria.html e o controller 'GaleriaCtrl'
    .when('/galeria', {
    templateUrl : '/onpage/app/views/galeria.html',
    controller : 'GaleriaCtrl',
    })

    // para a rota '/quem_somos', carregaremos o template quem_somos.html e o controller 'QuemSomosCtrl'
    .when('/quem_somos', {
    templateUrl : '/onpage/app/views/quem_somos.html',
    controller : 'QuemSomosCtrl',
    })
     
    // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
    .when('/contato', {
    templateUrl : '/onpage/app/views/contato.html',
    controller : 'ContatoCtrl',
    })
     
    // caso não seja nenhum desses, redirecione para a rota '/'
    .otherwise ({ redirectTo: '/onpage' });
    });

