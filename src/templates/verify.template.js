export default function verifyTemplate(data){
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Message</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]--><!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail></w:DontUseAdvancedTypographyReadingMail>
    </w:WordDocument>
    </xml><![endif]-->
  <style type="text/css">
.rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
}
.rollover:hover .rollover-second {
  max-height:none!important;
  display:block!important;
}
.rollover span {
  font-size:0px;
}
u + .body img ~ div div {
  display:none;
}
#outlook a {
  padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
}
a.es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
}
a[x-apple-data-detectors],
#MessageViewBody a {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
}
.es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
}
@media only screen and (max-width:600px) {.es-m-p0r { padding-right:0px!important } .es-m-p20b { padding-bottom:20px!important } .es-m-p20r { padding-right:20px!important } .es-p-default { } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } .es-header-body p { } .es-content-body p { } .es-footer-body p { } .es-infoblock p { } h1 { font-size:40px!important; text-align:center } h2 { font-size:28px!important; text-align:center } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:40px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:28px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important; display:block } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important; padding:10px 20px 10px 20px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .h-auto { height:auto!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head>
 <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#4CAF4F"><!--[if gte mso 9]>
 <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
   <v:fill type="tile"  color="#4CAF4F" origin="0.5, 0" position="0.5, 0"></v:fill>
 </v:background>
<![endif]-->
   <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#4CAF4F">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table cellpadding="0" cellspacing="0" align="center" class="es-header" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table align="center" cellpadding="0" cellspacing="0" class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1D9AD1;border-radius:10px 10px 0px 0px;width:560px" role="none">
             <tr>
              <td align="left" bgcolor="#38761d" style="padding:20px;Margin:0;background-color:#38761d"><!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:250px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td valign="top" align="center" class="es-m-p0r es-m-p20b" style="padding:0;Margin:0;width:250px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:14px"><img src="https://ftnlhak.stripocdn.email/content/guids/CABINET_8279a3740ba92d0f731431dfb8d294876b0310cbcbd79f81232c972f8b213cd7/images/image.png" alt="Logo" title="Logo" width="58" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:250px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" align="right" class="es-right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:250px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="right" style="padding:0;Margin:0"><p class="es-m-txt-c" style="Margin:0;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:21px;letter-spacing:0;color:#FFFFFF;font-size:14px">March 24, 2022</p><h3 class="es-m-txt-c" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#FFFFFF">TECH BRIDGE</h3></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1D9AD1;border-radius:0 0 10px 10px;width:560px" role="none">
             <tr>
              <td align="left" bgcolor="#93c47d" style="padding:0;Margin:0;padding-top:20px;padding-bottom:30px;padding-left:20px;background-color:#93c47d"><!--[if mso]><table style="width:540px" cellpadding="0" cellspacing="0"><tr><td style="width:327px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td valign="top" align="center" class="es-m-p0r es-m-p20b" style="padding:0;Margin:0;width:327px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-m-p20r" style="padding:0;Margin:0;padding-top:20px;padding-bottom:10px"><h1 class="es-m-txt-l" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:40px;font-style:normal;font-weight:bold;line-height:48px;color:#FFFFFF">THIS EMAIL FOR VERIFY YOUR ACCOUNT</h1></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-m-p20r" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;padding-right:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:24px;letter-spacing:0;color:#FFFFFF;font-size:16px">Welcome to our platform, have a nice day!</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:5px"></td><td style="width:208px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" align="right" class="es-right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:208px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:16px"><img src="https://ftnlhak.stripocdn.email/content/guids/CABINET_4bcca2afc9156fbbd6e09babbb92c2d0/images/5883092.png" alt="" width="208" class="adapt-img" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table align="center" cellpadding="0" cellspacing="0" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:560px" role="none">
             <tr>
              <td align="left" style="Margin:0;padding-left:20px;padding-top:30px;padding-right:20px;padding-bottom:20px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:bold;line-height:33.6px;color:#FFFFFF">Hi,&nbsp;${data?.name}</h2></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-m-p20r" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;padding-right:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:24px;letter-spacing:0;color:#FFFFFF;font-size:16px">To verify your email click the below button.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
       </table>
       <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
       </table>
       <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table align="center" cellpadding="0" cellspacing="0" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:560px" role="none">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:40px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" class="es-m-txt-c" style="padding:0;Margin:0"><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email"
                style="height:55px; v-text-anchor:middle; width:274px" arcsize="50%" stroke="f"  fillcolor="#f76b0a">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:20px; font-weight:400; line-height:20px;  mso-text-raise:1px'>Manage Your Booking</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide" style="border-style:solid;border-color:#E29F33 #2CB543 #2CB543 #E29F33;background:#f76b0a;border-width:2px 0px 0px 2px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a href=${data?.link} target="_blank" class="es-button" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;padding:15px 30px 15px 30px;display:inline-block;background:#F76B0A;border-radius:30px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #F76B0A">CLICK HERE</a></span><!--<![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table align="center" cellpadding="0" cellspacing="0" bgcolor="#00000000" class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1D9AD1;border-radius:10px;width:560px" role="none">
             <tr>
              <td align="left" bgcolor="#38761d" style="Margin:0;padding-bottom:30px;padding-left:20px;padding-top:30px;padding-right:20px;background-color:#38761d">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:520px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="links">
                          <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-bottom:10px;padding-top:10px;padding-right:5px;padding-left:5px">
                           <div style="vertical-align:middle;display:block">
                            <a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;display:block;color:#FFFFFF;font-size:12px;font-weight:bold">About us</a>
                           </div></td>
                          <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-bottom:10px;padding-top:10px;padding-right:5px;padding-left:5px">
                           <div style="vertical-align:middle;display:block">
                            <a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;display:block;color:#FFFFFF;font-size:12px;font-weight:bold">News</a>
                           </div></td>
                          <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-bottom:10px;padding-top:10px;padding-right:5px;padding-left:5px">
                           <div style="vertical-align:middle;display:block">
                            <a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;display:block;color:#FFFFFF;font-size:12px;font-weight:bold">Career</a>
                           </div></td>
                          <td align="center" valign="top" width="25%" style="Margin:0;border:0;padding-bottom:10px;padding-top:10px;padding-right:5px;padding-left:5px">
                           <div style="vertical-align:middle;display:block">
                            <a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;display:block;color:#FFFFFF;font-size:12px;font-weight:bold">The shops</a>
                           </div></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px;font-size:0">
                       <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:12px"><img title="Facebook" src="https://ftnlhak.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="24" height="24" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:12px"><img title="Х" src="https://ftnlhak.stripocdn.email/content/assets/img/social-icons/circle-white/x-circle-white.png" alt="Х" width="24" height="24" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:12px"><img title="Instagram" src="https://ftnlhak.stripocdn.email/content/assets/img/social-icons/circle-white/instagram-circle-white.png" alt="Inst" width="24" height="24" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                          <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:12px"><img title="Youtube" src="https://ftnlhak.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png" alt="Yt" width="24" height="24" style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;line-height:18px;letter-spacing:0;color:#FFFFFF;font-size:12px"><br><strong><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:12px">Privacy police</a> | <a target="_blank" href="" style="mso-line-height-rule:exactly;text-decoration:none;color:#FFFFFF;font-size:12px">Unsubscribe</a></strong></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
  `
}