app.controller('HomeCtrl', function($rootScope, $location){
    $rootScope.activetab = $location.path();
});
 
app.controller('ObjetivosCtrl', function($rootScope, $location){
    $rootScope.activetab = $location.path();
});
 
app.controller('EquipeCtrl', function($rootScope, $location){
    $rootScope.activetab = $location.path();
});

app.controller('GaleriaCtrl', function($rootScope, $location){
    Imagens = [{'imagem':'caminho'},{'imagem':'caminho4'},{'imagem':'caminho2'}]
    $rootScope.activetab = $location.path();
});
 
app.controller('QuemSomosCtrl', function($rootScope, $location){
    $rootScope.activetab = $location.path();
});

app.controller('ContatoCtrl', function($rootScope, $location){
    $rootScope.activetab = $location.path();
});