import Ticket from '../models/Ticket.js';
import { validateTicket } from '../utils/validate.js';

export async function listTickets(req, res) {
  const items = await Ticket.find().sort({ createdAt: -1 });
  res.json({ items });
}

export async function getTicket(req, res) {
  const item = await Ticket.findById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not Found', message: 'Ticket nicht gefunden' });
  res.json(item);
}

export async function createTicket(req, res) {
  const { valid, errors } = validateTicket(req.body);
  if (!valid) return res.status(400).json({ error: 'Bad Request', details: errors });
  const created = await Ticket.create({ ...req.body });
  res.status(201).json(created);
}

export async function updateTicket(req, res) {
  const { valid, errors } = validateTicket(req.body);
  if (!valid) return res.status(400).json({ error: 'Bad Request', details: errors });
  const updated = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: 'Not Found', message: 'Ticket nicht gefunden' });
  res.json(updated);
}

export async function closeTicket(req, res) {
  const updated = await Ticket.findByIdAndUpdate(req.params.id, { status: 'closed' }, { new: true });
  if (!updated) return res.status(404).json({ error: 'Not Found' });
  res.json(updated);
}

export async function assignTicket(req, res) {
  const { assignee } = req.body || {};
  if (typeof assignee !== 'string' || assignee.trim().length === 0) {
    return res.status(400).json({ error: 'Bad Request', message: 'assignee erforderlich' });
  }
  const updated = await Ticket.findByIdAndUpdate(
    req.params.id,
    { assignedTo: assignee, status: 'in_progress' },
    { new: true }
  );
  if (!updated) return res.status(404).json({ error: 'Not Found' });
  res.json(updated);
}
