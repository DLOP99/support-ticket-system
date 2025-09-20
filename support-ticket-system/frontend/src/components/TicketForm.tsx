import { useState } from 'react';

export default function TicketForm({ initialValues, onSubmit }: {
  initialValues: { title: string; description: string; date: string; location: string };
  onSubmit: (v: { title: string; description: string; date: string; location: string }) => void;
}) {
  const [v, setV] = useState(initialValues);
  const [err, setErr] = useState('');

  function update<K extends keyof typeof v>(k: K, val: (typeof v)[K]) { setV(s => ({ ...s, [k]: val })); }
  function validate(): string | null {
    if (!v.title || v.title.trim().length < 3) return 'Titel min. 3 Zeichen';
    if (!/\d{4}-\d{2}-\d{2}/.test(v.date)) return 'Datum YYYY-MM-DD';
    return null;
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const eMsg = validate();
    if (eMsg) { setErr(eMsg); return; }
    onSubmit(v);
  }

  return (
    <form className="form" onSubmit={submit}>
      {err && <p className="error">{err}</p>}
      <label>
        Titel
        <input value={v.title} onChange={e => update('title', e.target.value)} />
      </label>
      <label>
        Datum
        <input type="date" value={v.date} onChange={e => update('date', e.target.value)} />
      </label>
      <label>
        Ort
        <input value={v.location} onChange={e => update('location', e.target.value)} />
      </label>
      <label>
        Beschreibung
        <textarea value={v.description} onChange={e => update('description', e.target.value)} />
      </label>
      <div className="row actions">
        <button type="submit">Erstellen</button>
      </div>
    </form>
  );
}
