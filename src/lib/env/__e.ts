import nodemailer from 'nodemailer';

export class sender {
	static auto(message: string, to: string, subject: string, from: string) {
		const transporter = nodemailer.createTransport({
			host: 'smtp.hostinger.com',
			port: 465,
			secure: true,
			auth: {
				user: from,
				pass: 'Heslo4Em@il'
			}
		});
		const mailOptions = {
			from: from,
			to: to,
			subject: subject,
			text: message
		};
		transporter.sendMail(mailOptions, (error: any) => {
			if (error) {
				return 400;
			} else {
				return 200;
			}
		});
	}
}
