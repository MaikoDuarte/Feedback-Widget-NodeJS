import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1709dd562ab743",
    pass: "6c810a5812a3f7"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    
  await transport.sendMail({
  from: 'equipe Feedget <oi@feedget.com>',
  to: 'Maiko <mkdu185@gmail.com>',
  subject,
  html: body,

});
  };

}