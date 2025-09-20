import { Router } from 'express';
import { listTickets, getTicket, createTicket, updateTicket, closeTicket, assignTicket } from '../controllers/ticketController.js';
import { adminOnly } from '../middleware/adminOnly.js';

const router = Router();

router.get('/', listTickets);
router.get('/:id', getTicket);
router.post('/', createTicket);
router.put('/:id', updateTicket);
router.patch('/:id/close', adminOnly, closeTicket);
router.patch('/:id/assign', adminOnly, assignTicket);

export default router;
