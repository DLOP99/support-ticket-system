import { useNavigate } from 'react-router-dom';
import TicketForm from '../components/TicketForm';
import { createTicket } from '../api';

export default function TicketFormPage() {
  const nav = useNavigate();

  async function handleSubmit(values: { title: string; description: string; date: string; location: string }) {
    await createTicket(values as any);
    nav('/');
  }

  const initial = { title: '', description: '', date: new Date().toISOString().slice(0,10), location: '' };
  return <TicketForm initialValues={initial} onSubmit={handleSubmit} />;
}
