export type TicketStatus = 'open' | 'in_progress' | 'closed';

export interface Ticket {
  _id: string;
  title: string;
  description: string;
  date: string;        // YYYY-MM-DD
  status: TicketStatus;
  assignedTo: string;
  location: string;
}
