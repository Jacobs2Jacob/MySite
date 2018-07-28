using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Net.Mail;


namespace MySite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : Controller
    {
        protected internal const string smtpAddress = "smtp.gmail.com";
        protected internal const int portNumber = 587;
        protected internal const bool enableSSL = true;
        protected internal const string emailFromAddress = "jacobs2jacob@gmail.com";
        protected internal const string password = "HGECHGECHBHC";
        protected internal const string emailToAddress = "jacobs2jacob@gmail.com";    

        [HttpPost("[action]")]
        public GenericResponse Send([FromBody] dynamic message)
        {
            var newMessage = new MailMessage();

            try
            {
                string senderName = message.From.DisplayName;
                newMessage.From = new MailAddress(emailFromAddress, senderName);
                newMessage.To.Add(emailToAddress);
                newMessage.IsBodyHtml = true;
                newMessage.Body = message.Body;
                newMessage.Subject = message.Subject;

                using (SmtpClient smtp = new SmtpClient(smtpAddress, portNumber))
                {
                    smtp.Credentials = new NetworkCredential(emailFromAddress, password);
                    smtp.EnableSsl = enableSSL;
                    smtp.Send(newMessage);
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
