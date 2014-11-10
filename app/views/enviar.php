<?php
$data = json_decode($HTTP_RAW_POST_DATA);

$email_remetente = "contato@intermediar.com"; 
$email_destinatario = "charleycesar@gmail.com"; 
$email_reply = "charleycesar@gmail.com";
$email_assunto = "Contato via site";

$nome = $data->nome;
$email = $data->email;
$mensagem = $data->message;

$email_conteudo = "Nome = $nome \n"; 
$email_conteudo .= "Email = $email \n"; 
$email_conteudo .=  "Mensagem = $mensagem \n";
	
$email_headers = implode ( "\n",array ( "From: $email_remetente", "Reply-To: $email_reply", "Subject: $email_assunto","Return-Path:  $email_remetente","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );


if (mail ($email_destinatario, $email_assunto, nl2br($email_conteudo), $email_headers)){
	return true; 
}else{
	return false;
}
	
?>