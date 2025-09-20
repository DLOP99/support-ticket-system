import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3 },
  description: { type: String, default: '' },
  date: { type: String, required: true }, // YYYY-MM-DD
  status: { type: String, enum: ['open', 'in_progress', 'closed'], default: 'open' },
  assignedTo: { type: String, default: '' },
  location: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('Ticket', TicketSchema);
