#!/usr/bin/perl
use strict;
use warnings;
use Authen::Captcha;
use CGI ;

my $cgi = new CGI ;

# this directory is not accessible via the web.
my $captcha_datadir = "/home/sites/1a/e/e1a5c09094/public_html/../.captcha_data";

# this directory will store the captcha images. This should
# be accessible via the web because it will be included on the page.
my $captcha_outputdir = "/home/sites/1a/e/e1a5c09094/public_html/contact/img";

# This directory is the same as above, but using the web accessible
# URL path.
my $image_dir = "/contact/img";

# This should be the location of the FormMail.cgi script.
my $formmail = "/contact/FormMail.cgi";

# This is where the user should be taken to after submitting the form.
my $redirect = "http://mjwasbrough.com/contact/email_sent.html";


my $captcha = Authen::Captcha->new(
  data_folder => $captcha_datadir,
  output_folder => $captcha_outputdir,
  );

my ($md5sum, $chars) = $captcha->generate_code(4);
# eliminate ambiguous chars from $chars
my $bad_chars = 1;
while ($bad_chars) {
    if ( $chars =~ m/o|0|O|l|i|1|q|9|6|b|s|S|5|2|Z/) {
        ($md5sum, $chars) = $captcha->generate_code(4);
    } else {
        $bad_chars = 0;
    }
}
my $title      = 'Contact us' ;
my $recipient  = 'web\@mjwasbrough.com' ;
my $invitation = '
' ;
my $email    ;
my $realname  ;

print $cgi->header () ;

print << "END_OF_HTML";

<!DOCTYPE html>
<html>
<head>
<title>Contact us</title>
</head>
<body>
<p>
</p>
<form  action="/contact/FormMail.cgi" method='post'>
<table>
<tr><td><label>Your Name </label></td><td><input type='text' name='realname' size=40></td></tr>
<tr><td><label>Your Email </label></td><td><input type='text' name='email' size=40></td></tr>
<tr><td><label>Subject </label></td><td><input type='text' name='subject' size=60></td></tr>
<tr><td><label>Your message </label></td><td><textarea name='message' cols=64 rows=8 wrap=virtual></textarea></td></tr>
        <!-- The following section displays a captcha request  -->
        <tr>
          <td><label>Enter the letters </label></td>
          <td><img src="/contact/img/$md5sum.png" /> <input type="text" size="20" name="captcha-text" id="captcha-text" /><td></td>
        </tr>
        <!-- End section -->
<tr><td>&nbsp;</td><td aligh='center'> <button value='Send my email'>Send my email </button></td></tr>
</table>
<p> <p>
<input type='hidden' name='title' value="Contact us" >
<input type='hidden' name='recipient' value='web\@mjwasbrough.com' >
<input type='hidden' name='redirect' value="http://mjwasbrough.com/contact/email_sent.html" >
<input type='hidden' name='captcha-md5sum' value="$md5sum" >
</form>

</body></html>
END_OF_HTML
