import { Link } from 'react-router-dom';
import type { Ticket } from '../types';

export default function TicketList({ items }: { items: Ticket[] }) {
  if (items.length === 0) return <p>Noch keine Tickets vorhanden.</p>;
  return (
    <ul className="list">
      {items.map(t => (
        <li key={t._id} className="card">
          <div className="row">
            <strong>{t.title}</strong>
            <span>{t.status}</span>
          </div>
          <div className="row">
            <span>{t.date}</span>
            <span>{t.assignedTo || '—'}</span>
          </div>
          <p>{t.description}</p>
          <div className="row actions">
            <Link to={`/ticket/${t._id}`}>Öffnen</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
