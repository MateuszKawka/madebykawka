<?php

$email = $_POST['email'];
$message = $_POST['message'];

$message_content = "<div>
<p>
  Wiadomość z madebykawka.pl
</p>
<br/>
<p>
  Email: $email
</p>
<p>
Treść:
</p>
<br/>
<br/>
<p>
<p>
  $message
</p>
</p>
</div>";

$feedback_message_content = '<table border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td style="padding: 10px 0 30px 0;"><table style="border: 1px solid #cccccc; border-collapse: collapse;" border="0" width="600" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;" align="center" bgcolor="#f3f3f3"><img style="display: block;" src="https://www.madebykawka.pl/email-header.gif" alt="Creating Email Magic" width="300" height="230" /></td></tr><tr><td style="padding: 40px 30px 40px 30px;" bgcolor="#ffffff"><table border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;"><strong>Twoja wiadomość została dostarczona!</strong></td></tr><tr><td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">Skontaktuję się niezwłocznie po przeczytaniu wiadomości.</td></tr><tr><td>&nbsp;</td></tr></tbody></table></td></tr><tr><td style="padding: 30px 30px 30px 30px;" bgcolor="#3b5249"><table border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">&reg; www.madebykawka.pl 2020<br /> Wiadomość wysłana automatycznie, proszę na nią nie odpowiadać.</td><td align="right" width="25%"><table border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">&nbsp;</td><td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><p>&nbsp;</p>';
$to_email = 'kontakt@madebykawka.pl';
$subject = "Wiadomość z madebykawka.pl";
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'madebykawka.pl';

mail($email, $subject, $feedback_message_content, implode("\r\n", $headers));
mail($to_email, $subject, $message_content, implode("\r\n", $headers));
?>