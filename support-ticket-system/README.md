# Support Ticket System Lite (React + Node + MongoDB)

Einfaches Ticketing-System als **SPA** (React + TypeScript) mit **Express-API** und **MongoDB**.  
Ziel: **Basis-CRUD** für Tickets inkl. Admin-Aktionen (Zuweisen, Schließen).  
Ausgelegt auf eine **solide Note (≥4.0)** mit sauberer Struktur, Doku und Minimal-Tests.

---

## ✅ Kurzüberblick

- **Frontend:** React + TS + React Router (Tickets-Liste, Detail, Formular)  
- **Backend:** Express + Mongoose (REST-API `/api/v1/tickets`)  
- **DB:** MongoDB (Atlas empfohlen)  
- **Auth light:** Admin-Aktionen via `X-Admin-Token` (für Schulprojekt ausreichend)  
- **Tests:** 1 Mini-Unit-Test (Validierung)  
- **ENV:** `.env.example` in Frontend/Backend vorhanden (keine Secrets im Repo!)

---

## 🚀 Projekt starten

### 1) Backend
```bash
cd backend
cp .env.example .env
# .env anpassen: MONGODB_URI und ADMIN_TOKEN
npm install
npm run dev
```
→ Erwartet: `[DB] Connected` und `[API] http://localhost:3000`

### 2) Frontend
```bash
cd frontend
cp .env.example .env
# .env anpassen: VITE_API_BASE=http://localhost:3000, VITE_ADMIN_TOKEN wie Backend
npm install
npm run dev
```
→ Browser: `http://localhost:5173`

---

## 🧪 Smoke Test

- `POST /api/v1/tickets` → Ticket anlegen  
- `GET /api/v1/tickets` → Liste abrufen  
- `PATCH /api/v1/tickets/:id/close` (mit Admin-Token) → Ticket schließen  

---

## 📡 API Kurzreferenz

Basis: `http://localhost:3000/api/v1/tickets`

| Methode | Pfad       | Beschreibung         |
|---------|------------|----------------------|
| GET     | `/`        | Liste aller Tickets |
| GET     | `/:id`     | Ticket lesen        |
| POST    | `/`        | Ticket erstellen    |
| PUT     | `/:id`     | Ticket ändern       |
| PATCH   | `/:id/close` | Ticket schließen (Admin) |
| PATCH   | `/:id/assign` | Ticket zuweisen (Admin) |

---

## 📦 Abgabehinweise

- Keine `node_modules` oder echte `.env` ins ZIP.  
- Immer `.env.example` mitliefern.  
- README + Screenshots + Dokumentation beilegen.  

---

## 📌 Bewertungssicht

- SPA + Routing (React) ✔  
- REST-API + DB (Express + MongoDB) ✔  
- Validierung + Statuscodes ✔  
- 1 Mini-Test ✔  
- README + ENV-Beispiele ✔  
