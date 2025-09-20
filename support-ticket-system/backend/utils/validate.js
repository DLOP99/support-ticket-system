export function validateTicket(payload = {}, { partial = false } = {}) {
  const errors = [];
  const req = (field, cond, msg) => { if (!cond) errors.push({ field, message: msg }); };

  if (!partial || payload.title !== undefined) {
    req('title', typeof payload.title === 'string' && payload.title.trim().length >= 3, 'Titel min. 3 Zeichen');
  }
  if (!partial || payload.date !== undefined) {
    req('date', /\d{4}-\d{2}-\d{2}/.test(payload.date || ''), 'Datum im Format YYYY-MM-DD');
  }
  if (!partial || payload.status !== undefined) {
    const ok = ['open', 'in_progress', 'closed'].includes(payload.status);
    req('status', ok, 'Status muss open|in_progress|closed sein');
  }
  return { valid: errors.length === 0, errors };
}
