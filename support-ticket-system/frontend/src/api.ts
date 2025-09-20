import type { Ticket } from './types';

const BASE = (import.meta.env.VITE_API_BASE as string) || 'http://localhost:3000';
const ADMIN_TOKEN = import.meta.env.VITE_ADMIN_TOKEN as string | undefined;

async function http(path: string, init?: RequestInit) {
  const headers = new Headers(init?.headers);
  if (!headers.has('Content-Type') && init?.body) headers.set('Content-Type', 'application/json');
  if (ADMIN_TOKEN && path.match(/assign|close/)) headers.set('X-Admin-Token', ADMIN_TOKEN);
  const res = await fetch(`${BASE}${path}`, { ...init, headers });
  if (!res.ok) throw new Error(`${res.status}`);
  return res.status === 204 ? null : res.json();
}

export async function listTickets(): Promise<Ticket[]> {
  const data = await http('/api/v1/tickets');
  return data.items as Ticket[];
}
export function getTicket(id: string): Promise<Ticket> {
  return http(`/api/v1/tickets/${id}`);
}
export function createTicket(payload: Omit<Ticket, '_id' | 'status' | 'assignedTo'>): Promise<Ticket> {
  return http('/api/v1/tickets', { method: 'POST', body: JSON.stringify(payload) });
}
export function updateTicket(id: string, payload: Partial<Ticket>): Promise<Ticket> {
  return http(`/api/v1/tickets/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}
export function closeTicket(id: string): Promise<Ticket> {
  return http(`/api/v1/tickets/${id}/close`, { method: 'PATCH' });
}
export function assignTicket(id: string, assignee: string): Promise<Ticket> {
  return http(`/api/v1/tickets/${id}/assign`, { method: 'PATCH', body: JSON.stringify({ assignee }) });
}
