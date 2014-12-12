<div class="col-xs-12 col-sm-12" ng-controller="ContatoCtrl">
	<div class="page-header">
		<h1>Contato</h1>
	</div>
	<div class="contact-form col-md-6">
		<div class="alert alert-warning" ng-show="failed == 'falha'" ng-init="failed = true">
		    <a href="#" class="close" data-dismiss="alert">&times;</a>
		    <strong>Error!</strong> Houve um erro ao enviar o email tente novamente mais tarde.
		</div>
		<div class="alert alert-success" ng-show="enviado == 'sucesso'" ng-init="enviado = false">
			<a href="#" class="close" data-dismiss="alert">&times;</a>
			<strong>Enviado com sucesso!</strong> .
		</div>
		<div class="row">
			<div class="col-xs-6 col-md-6 form-group">
				<input class="form-control" id="name" ng-model="contato.nome" placeholder="Nome" type="text" required autofocus />
			</div>
			<div class="col-xs-6 col-md-6 form-group">
				<input class="form-control" id="email" ng-model="contato.email" placeholder="Email" type="email" required />
			</div>
		</div>
		<textarea class="form-control" id="message" ng-model="contato.message" placeholder="Mensagem" rows="5"></textarea>
		<br />
		<div class="row">
			<div class="col-xs-12 col-md-12 form-group">
				<button class="btn btn-primary pull-right" ng-click="enviarEmail();">Enviar</button>
			</div>
		</div>
	</div>
	<div class="col-md-6">
        <div>
            <div class="panel panel-default">
                <div class="text-center header">Intermediar - Grupo de mediação escolar</div>
                	<div class="panel-body">
                    	<span class="glyphicon glyphicon-user"></span>Coordenadora Mônica Farias<br />
                    	<span class="glyphicon glyphicon-earphone"></span> 21 - 98590-7033<br />
                    	<span class="glyphicon glyphicon-earphone"></span> 21 - 99823-7559<br />
                    	<span class="glyphicon glyphicon-envelope"></span> intermediarmediacaoescolar@gmail.com<br />
                	</div>
                    <hr />
                </div>
            </div>
        </div>
    </div>

</div>

<style>
    .header {
        background-color: #F5F5F5;
        color: #36A0FF;
        height: 70px;
        font-size: 22px;
        padding: 10px;
    }
    .panel{
    	padding-left: 20px;
    }
</style>