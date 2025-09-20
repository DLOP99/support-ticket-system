import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connect } from './db.js';
import ticketsRouter from './routes/tickets.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/v1/tickets', ticketsRouter);

const PORT = process.env.PORT || 3000;

connect(process.env.MONGODB_URI)
  .then(() => app.listen(PORT, () => console.log(`[API] http://localhost:${PORT}`)))
  .catch(err => { console.error('[DB] connection error', err); process.exit(1); });
