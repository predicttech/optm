interface ContactEmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    message: string;
  }
  
  export function ContactEmailTemplate({
    name,
    email,
    phone,
    message,
  }: ContactEmailTemplateProps) {
    return (
      <div>
        <h2>New Contact Form Submission</h2>
  
        <p>
          <strong>Name:</strong> {name}
        </p>
  
        <p>
          <strong>Email:</strong> {email}
        </p>
  
        <p>
          <strong>Phone:</strong> {phone}
        </p>
  
        <p>
          <strong>Message:</strong>
        </p>
  
        <p>{message}</p>
      </div>
    );
  }