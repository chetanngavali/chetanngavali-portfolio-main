import { storage } from '../server/storage';
import { insertContactSchema } from '../shared/schema';
import { sendContactEmail } from '../server/email';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = insertContactSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: result.error.issues,
      });
    }
    const contact = await storage.createContact(result.data);
    const emailSent = await sendContactEmail(result.data);
    if (!emailSent) {
      console.warn('Failed to send email notification, but contact was saved');
    }
    return res.status(201).json({ message: 'Message sent successfully!', contact });
  } else if (req.method === 'GET') {
    const contacts = await storage.getContacts();
    return res.status(200).json(contacts);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
