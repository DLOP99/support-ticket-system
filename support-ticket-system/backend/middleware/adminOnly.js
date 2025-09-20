export function adminOnly(req, res, next) {
  const token = req.header('X-Admin-Token');
  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden', message: 'Admin-Token ungültig' });
  }
  next();
}
