'use strict';

/**
 * `sendmail` service.
 */

module.exports = {
  // exampleService: (arg1, arg2) => {
  //   return isUserOnline(arg1, arg2);
  // }
  send: async (ctx) => {
    const { name, phone, subject, message } = ctx.request.body;

    const sendTo = process.env.EMAIL_SMTP_USER;
    strapi.log.debug(`Trying to send an email to ${sendTo}`)
    try {
      const emailOptions = {
        to: sendTo,
        subject: subject,
        html: 
        `          
        <p>Nome: ${name}</p>
        <p>Telefone: ${phone}</p>
        <p>Mensagem: ${message}</p>`,
      }
      await strapi.plugins['email'].services.email.send(emailOptions)
      strapi.log.debug(`Email sent to ${sendTo}`)
      ctx.send({ message: 'Email sent' })
    } catch (err) {
      console.log(err)
      strapi.log.error(`Error sending email to ${sendTo}`, err)
      ctx.send({ error: 'Error sending email' })
    }
  },
};
