app.controller('HomeCtrl', function($scope,$rootScope, $location){
    $rootScope.activetab = $location.path();
    $scope.path = path;
});
 
app.controller('ObjetivosCtrl', function($rootScope, $location){
    $rootScope.activetab = $location.path();
  	//Definindo Objetivos para o pagina de objetivos
  	$rootScope.Objetivos = [{
  		"objetivo":"Favorecer a vivência, por parte da criança, de experiências intelectuais, afetivas e sociais agradáveis e ricas do ponto de vista do seu desenvolvimento. Pelo modo com que se dá o trabalho, situando-se entre as relações, pode-se colocar como objetivos complementares: o enriquecimento dos laços entre ela e os pais, e entre ela, as demais crianças e o professor, favorecendo o potencial desses laços influenciarem positivamente nas aprendizagens e no seu desenvolvimento."},{
		  "objetivo":"Outro objetivo a ser destacado é a busca pela inclusão efetiva da criança na escola, não apenas com a criação de condições materiais e de objetos adequados para seu uso, mas também pela construção de uma cultura inclusiva na escola. "},{
		  "objetivo":"O grupo de mediadores reúne-se semanalmente, ocasião em que os casos atendidos por cada profissional são apresentados e as intervenções são discutidas a luz de leituras da área da psicologia do desenvolvimento, da psicomotricidade, da pedagogia, psicopedagogia e do trabalho clínico de acompanhamento terapêutico. A coordenadora do grupo acompanha dando suporte nos casos atendidos e via relatórios semanais caso a caso. Conversa com pais, terapeutas, médicos e escola. Ocorre também supervisão individual conforme demanda do profissional. Oferecemos mensalmente capacitação para os mediadores, professores e demais interessados na temática."},{
		  "objetivo":"O PAPEL DO MEDIADOR NO PROCESSO DE ENSINO - APRENDIZADO DE ALUNOS ESPECIAIS. A função do mediador é sempre de extrema complexidade e merece cuidado constante. A profissão de mediador, como vimos, surge a partir de uma demanda educacional especial nova, que não provém de nenhuma regulamentação no que diz respeito a sua contratação e isso não facilita o processo de Inclusão. Mediadores, hoje, são indispensáveis para a construção de autonomia da escola e do aluno. É esse profissional que demanda todas as necessidades de mudança do processo, sinalizando o que dá certo e o que não dá."},{
		  "objetivo":"É ele que possui a relação mais estreita com o aluno especial e sua escuta, se torna fundamental. Porém sua forma de contratação ainda gera muitas dúvidas de conduta à escola. Em muitos momentos, a escola, o professor não se sente confortável com a sua presença, e o sentimento de ameaça pode assombrar, por não sabermos como nos relacionar com ele. Devemos esclarecer em primeiro lugar, que independente de onde venha a sua remuneração, o mediador tem como cliente o aluno. Ele deverá fazer todas as intervenções necessárias junto a escola, à equipe e à família sempre que necessitar."},{
		  "objetivo":"Porém alguns acordos são necessários entre mediador e escola, como por exemplo, buscarem sempre saídas juntos para os desafios do cotidiano, antes de acionarem ajuda à família. Por esse motivo, é sempre necessário acolher o profissional de mediação, em suas necessidades básicas de comunicação, não o excluindo, não o delegando todas as responsabilidades. Dialogando sempre, sobre as possíveis soluções, independente de onde provém o seu salário. O mediador deve ser considerado da equipe de trabalho e ele, acolhido em suas demandas. O mediador poderá ser atendido por uma equipe externa para pensar estratégias de trabalho, sempre os acordando com a escola."},{
		  "objetivo":"O mediador deverá acionar a família para alguma intervenção, somente em último caso, por esse motivo é vital que a escola se responsabilize pelo aluno, caso o mediador perceba que a escola não se interessa pelo aluno e não colabora para o seu processo, é dever do mediador informar esse aspecto à equipe, de que a família poderá questiona-lo sobre o processo e que não caberá a ele se omitir, tendo em vista seu compromisso com o desenvolvimento do aluno. Nesses casos, gera-se uma relação difícil entre escola e mediação e isso pode se evitar com o comprometimento da escola."},{
      "objetivo":"Quando há envolvimento, a mediação percebe isso, sem precisar cobrar da escola. O papel do mediador em relação ao aluno é descobrir ao tempo do aluno o seu funcionamento e com ele utilizar as ferramentas produzidas pela equipe para incluí-lo. Proporcionar autonomia para que o aluno possa frequentar a escola, sozinho, sem mediação. Portanto, construção constante de autonomia cognitiva e social. É a arte do encontro, que a mediação e aluno terão de descobrir no processo."
  }];
});
 
app.controller('EquipeCtrl', function($rootScope, $location){
    $rootScope.activetab = $location.path();
    $rootScope.equipe = [
    {
      'nome':'Kamilla Cardoso',
      'descricao':'pedagoga, especialista em Alfabetização, Leitura e Escrita pela UFRJ, Técnica de Assuntos Educacionais do Colégio Pedro Ii, atuando como orientadora Educacional. Já atuou como professora do primeiro.',
      'imagem':path+'/app/images/kamila.jpg'
    },{
      'nome':'Delayne Cunha',
      'descricao':'estudante de pedagogia, fazendo mediação no colégio Oficina do Fazer-CEPAENI – RJ.',
      'imagem':path+'/app/images/Delayne.jpg'
    },{
      'nome':'Elisabete Marques',
      'descricao':'Professora, Psicopedagoga, fazendo mediação na creche Talento em Laranjeiras.',
      'imagem':path+'/app/images/Elisabete.jpg'
    },{
      'nome':'Tarna Morena',
      'descricao':'Professora de História e Inglês e Psicopedagoga, fazendo mediação no Colégio Cepaeni Oficina do Fazer em Nova Iguaçu.',
      'imagem':path+'/app/images/tama.jpg'
    },{
      'nome':'Juliana Regina',
      'descricao':'Estudante de psicologia, UFF, mediação colégio Curiosidade.',
      'imagem':path+'/app/images/Juliana.jpg'
    }
    /*{
      'nome':'Mônica Farias',
      'descricao':'Psicóloga, mestre em Psicologia pela UFF, especialista em Psicomotricidade pelo Anthropos. Mediadora escolar, acompanhante terapêuta (Esquizoanalise). Orientadora Educacional seguimento Educação Infantil e Creche ISERJ .',
      'imagem':path+'/app/images/pic01.jpg'
    },{
      'nome':'Mariana Barbosa de Castro',
      'descricao':'psicóloga pela UFF, atualmente (Junho/2013) fazendo mediação, no Colégio Coração Eucarístico- Flamengo, criança com diagnostico de melingocele.',
      'imagem':path+'/app/images/pic03.jpg'
    },{
      'nome':'Isabel Vilela',
      'descricao':'Pedagoga- Mediando criança autista no Colégio Coração Eucarístico- Flamengo.',
      'imagem':path+'/app/images/pic04.jpg'
    },{
      'nome':'Rafael Mantuano',
      'descricao':'pedagogo UERJ, mediando no colégio Legrand em Botafogo. ( Em 2014).',
      'imagem':path+'/app/images/pic05.jpg'
    },{
      'nome':'Maria Celeste',
      'descricao':'Estudante de pedagogia. (Argentina) fazendo mediação no Colégio Oficina do Fazer CEPAENI – Nova Iguaçu (em 2014).',
      'imagem':path+'/app/images/pic06.jpg'
    },{
      'nome':'Carla Giovanna',
      'descricao':'Psicóloga, fazendo mediação no colégio Legrand, em Botafogo.',
      'imagem':path+'/app/images/pic05.jpg'
    },{
      'nome':'Carolina Reina',
      'descricao':'Psicopedagoga (Argentina), fazendo mediação no Colégio Municipal Alberto Barth no Flamengo.',
      'imagem':path+'/app/images/pic04.jpg'
    },*/
    ];
});

app.controller('GaleriaCtrl', function($rootScope, $scope, $location){
    pathGallery = path+'/app/images/galeria/';
    $scope.path = path;
    
    $scope.Images = [{
      img:pathGallery+'IMG_8765_min.jpg'
    },{
      img:pathGallery+'IMG_8767_min.jpg'
    },{
      img:pathGallery+'IMG_8775_min.jpg'
    },{
      img:pathGallery+'IMG_8824_min.jpg'
    },{
      img:pathGallery+'IMG1.jpg'
    },{
      img:pathGallery+'IMG2.JPG'
    },{
      img:pathGallery+'IMG3.JPG'
    },{
      img:pathGallery+'IMG4.jpg'
    },{
      img:pathGallery+'IMG5.jpg'
    }
    ];
    $rootScope.activetab = $location.path();
});
 
app.controller('QuemSomosCtrl', function($rootScope, $location, $scope){
    $rootScope.activetab = $location.path();
    $scope.path = path;
    
});

app.controller('ContatoCtrl', function($rootScope, $location, $scope,$http){
    $rootScope.activetab = $location.path();
    $scope.enviarEmail = function(){
      data = $scope.contato;
      url = path+'/app/views/enviar.php';
      $http({
        method: "post",
        url: url,
        data: data
      }).success(function(d){
        console.log(d);
        $scope.failed = d;
        $scope.enviado = d;
      });
    }
});