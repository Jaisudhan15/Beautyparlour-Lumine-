# BeautyParlour

A two-part web project for a beauty parlour business.

## Project structure

- `backend/` - Flask API for booking and email notification
- `frontend/` - React + Vite client UI

## Getting started

### Backend

1. Open a terminal in `backend/`
2. Create a virtual environment:
   ```powershell
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   ```
3. Install backend dependencies:
   ```powershell
   pip install -r requirements.txt
   ```
4. Copy `backend/.env.example` to `backend/.env` and fill in your email settings.
5. Run the backend:
   ```powershell
   python app.py
   ```

### Frontend

1. Open a terminal in `frontend/`
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Run the development server:
   ```powershell
   npm run dev
   ```

## Notes

- Do not commit `backend/.env` to GitHub.
- Use `backend/.env.example` as the template for email credentials.
- The frontend package metadata is managed through `frontend/package.json`.

## 🖼️ Screenshots

### Home Page
<img src="screenshots/Home.png" width="800">

### Services Page
<img src="screenshots/Services.png" width="800">

### Contacts
<img src="screenshots/Contacts.png" width="800">
