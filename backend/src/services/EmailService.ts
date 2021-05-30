
interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  content: string;
  attachment?: string[];
}

// DTO -> Data Transfer Object
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request:IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({to , message}: IMessageDTO) {
    console.log(`Sent email to ${to.name}: ${message.subject}`);    
  }
}

export default EmailService;