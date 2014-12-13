<?php
ini_set("error_reporting",E_ALL);
$to = 'charleycesar@gmail.com';
$subject = 'the subject';
$message = 'hello';
var_dump(mail($to,'asf','asdfadsfa'));
if(mail($to, $subject, $message)){
    echo "Mail Sent";
}else{
    echo "***ERROR***";
}
?> 
