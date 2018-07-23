using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Net.Mail;

namespace MySite.Controllers
{
    [Route("api/[controller]")]
    public class EmailController : Controller
    {
        protected internal const string smtpAddress = "smtp.gmail.com";
        protected internal const int portNumber = 587;
        protected internal const bool enableSSL = true;
        protected internal const string emailFromAddress = "jacobs2jacob@gmail.com";
        protected internal const string password = "HGECHGECHBHC";
        protected internal const string emailToAddress = "jacobs2jacob@gmail.com";    

        [HttpGet("[action]")]
        public GenericResponse Send(MailMessage message)
        {
            try
            {
                string senderName = message.From.DisplayName;
                message.From = new MailAddress(emailFromAddress, senderName);
                message.To.Add(emailToAddress);
                message.IsBodyHtml = true;

                using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
                {
                    smtp.Credentials = new NetworkCredential(emailFromAddress, password);
                    smtp.EnableSsl = enableSSL;
                    smtp.Send(message);
                }

                return GenericResponse.Success();
            }
            catch (Exception ex)
            {
                return GenericResponse.Fail("An error occured while attemping to send the mail - " + ex.ToString());
            }
        }
    }
}
