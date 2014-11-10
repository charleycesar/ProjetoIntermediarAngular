<div class="col-xs-12 col-sm-12" ng-controller="ContatoCtrl">
	<div class="page-header">
		<h1>Contato</h1>
	</div>
	<div class="contact-form">
		<div class="alert alert-warning" ng-hide="failed" ng-init="failed = true">
		    <a href="#" class="close" data-dismiss="alert">&times;</a>
		    <strong>Error!</strong> Houve um erro ao enviar o email tente novamente mais tarde.
		</div>
		<div class="alert alert-success" ng-show="enviado" ng-init="enviado = false">
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
</div>
