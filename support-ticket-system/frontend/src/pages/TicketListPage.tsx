import { useEffect, useState } from 'react';
import { listTickets } from '../api';
import type { Ticket } from '../types';
import TicketList from '../components/TicketList';

export default function TicketListPage() {
  const [items, setItems] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function load() {
    try {
      setLoading(true);
      setItems(await listTickets());
    } catch {
      setError('Fehler beim Laden');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  if (loading) return <p>Lade…</p>;
  if (error) return <p style={{ color: 'crimson' }}>{error}</p>;
  return <TicketList items={items} />;
}
