app.controller('HomeCtrl', function($rootScope, $location){
    $rootScope.activetab = $location.path();
});
 
app.controller('ObjetivosCtrl', function($rootScope, $location){
    $rootScope.activetab = $location.path();
  	//Definindo Objetivos para o pagina de objetivos
  	$rootScope.Objetivos = [{
  		"objetivo":"Favorecer a vivência, por parte da criança, de experiências intelectuais, afetivas e sociais agradáveis e ricas do ponto de vista do seu desenvolvimento. Pelo modo com que se dá o trabalho, situando-se entre as relações, pode-se colocar como objetivos complementares: o enriquecimento dos laços entre ela e os pais, e entre ela, as demais crianças e o professor, favorecendo o potencial desses laços influenciarem positivamente nas aprendizagens e no seu desenvolvimento."},{
		"objetivo":"Outro objetivo a ser destacado é a busca pela inclusão efetiva da criança na escola, não apenas com a criação de condições materiais e de objetos adequados para seu uso, mas também pela construção de uma cultura inclusiva na escola. "},{
		"objetivo":"O grupo de mediadores reúne-se semanalmente, ocasião em que os casos atendidos por cada profissional são apresentados e as intervenções são discutidas a luz de leituras da área da psicologia do desenvolvimento, da psicomotricidade, da pedagogia, psicopedagogia e do trabalho clínico de acompanhamento terapêutico. A coordenadora do grupo acompanha dando suporte nos casos atendidos e via relatórios semanais caso a caso. Conversa com pais, terapeutas, médicos e escola. Ocorre também supervisão individual conforme demanda do profissional. Oferecemos mensalmente capacitação para os mediadores, professores e demais interessados na temática."},{
		"objetivo":"<strong>O PAPEL DO MEDIADOR NO PROCESSO DE ENSINO - APRENDIZADO DE ALUNOS ESPECIAIS.</strong> A função do mediador é sempre de extrema complexidade e merece cuidado constante. A profissão de mediador, como vimos, surge a partir de uma demanda educacional especial nova, que não provém de nenhuma regulamentação no que diz respeito a sua contratação e isso não facilita o processo de Inclusão. Mediadores, hoje, são indispensáveis para a construção de autonomia da escola e do aluno. É esse profissional que demanda todas as necessidades de mudança do processo, sinalizando o que dá certo e o que não dá."},{
		"objetivo":"É ele que possui a relação mais estreita com o aluno especial e sua escuta, se torna fundamental. Porém sua forma de contratação ainda gera muitas dúvidas de conduta à escola. Em muitos momentos, a escola, o professor não se sente confortável com a sua presença, e o sentimento de ameaça pode assombrar, por não sabermos como nos relacionar com ele. Devemos esclarecer em primeiro lugar, que independente de onde venha a sua remuneração, o mediador tem como cliente o aluno. Ele deverá fazer todas as intervenções necessárias junto a escola, à equipe e à família sempre que necessitar."},{
		"objetivo":"Porém alguns acordos são necessários entre mediador e escola, como por exemplo, buscarem sempre saídas juntos para os desafios do cotidiano, antes de acionarem ajuda à família. Por esse motivo, é sempre necessário acolher o profissional de mediação, em suas necessidades básicas de comunicação, não o excluindo, não o delegando todas as responsabilidades. Dialogando sempre, sobre as possíveis soluções, independente de onde provém o seu salário. O mediador deve ser considerado da equipe de trabalho e ele, acolhido em suas demandas. O mediador poderá ser atendido por uma equipe externa para pensar estratégias de trabalho, sempre os acordando com a escola."},{
		"objetivo":"O mediador deverá acionar a família para alguma intervenção, somente em último caso, por esse motivo é vital que a escola se responsabilize pelo aluno, caso o mediador perceba que a escola não se interessa pelo aluno e não colabora para o seu processo, é dever do mediador informar esse aspecto à equipe, de que a família poderá questiona-lo sobre o processo e que não caberá a ele se omitir, tendo em vista seu compromisso com o desenvolvimento do aluno. Nesses casos, gera-se uma relação difícil entre escola e mediação e isso pode se evitar com o comprometimento da escola."},{
		"objetivo":"Quando há envolvimento, a mediação percebe isso, sem precisar cobrar da escola. O papel do mediador em relação ao aluno é descobrir ao tempo do aluno o seu funcionamento e com ele utilizar as ferramentas produzidas pela equipe para incluí-lo. Proporcionar autonomia para que o aluno possa frequentar a escola, sozinho, sem mediação. Portanto, construção constante de autonomia cognitiva e social. É a arte do encontro, que a mediação e aluno terão de descobrir no processo."
	}];
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