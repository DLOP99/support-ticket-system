import mongoose from 'mongoose';

export async function connect(uri) {
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, { dbName: 'support_ticket_system_lite' });
  console.log('[DB] Connected');
}
