import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assignTicket, closeTicket, getTicket, updateTicket } from '../api';
import type { Ticket } from '../types';

export default function TicketDetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState<Ticket | null>(null);
  const [assignee, setAssignee] = useState('');
  const [msg, setMsg] = useState('');

  async function load() {
    if (!id) return;
    try { setItem(await getTicket(id)); } catch { setMsg('Ticket nicht gefunden'); }
  }
  useEffect(() => { load(); }, [id]);

  async function handleUpdate() {
    if (!item || !id) return;
    const updated = await updateTicket(id, item);
    setItem(updated);
    setMsg('Gespeichert');
  }
  async function handleClose() {
    if (!id) return;
    const updated = await closeTicket(id);
    setItem(updated);
  }
  async function handleAssign() {
    if (!id || !assignee) return;
    const updated = await assignTicket(id, assignee);
    setItem(updated);
    setAssignee('');
  }

  if (!item) return <p>Lade… {msg && `(${msg})`}</p>;

  return (
    <div className="card">
      <h2>{item.title}</h2>
      <p><b>Status:</b> {item.status}</p>
      <p><b>Datum:</b> {item.date}</p>
      <p><b>Ort:</b> {item.location || '—'}</p>
      <p>{item.description || 'Keine Beschreibung'}</p>

      <div className="row">
        <input value={item.title} onChange={e => setItem({ ...item, title: e.target.value })} />
        <input value={item.date} type="date" onChange={e => setItem({ ...item, date: e.target.value })} />
      </div>
      <textarea value={item.description} onChange={e => setItem({ ...item, description: e.target.value })} />
      <input placeholder="Ort" value={item.location} onChange={e => setItem({ ...item, location: e.target.value })} />

      <div className="row actions">
        <button onClick={handleUpdate}>Speichern</button>
        {item.status !== 'closed' && <button onClick={handleClose}>Schliessen</button>}
      </div>

      <div className="row">
        <input placeholder="Mitarbeiter zuweisen" value={assignee} onChange={e => setAssignee(e.target.value)} />
        <button onClick={handleAssign}>Zuweisen (Admin)</button>
      </div>
    </div>
  );
}
