# HireHub – Next.js Job Board Application

## 🚀 Overview
HireHub is a full-stack job board application built using Next.js and Prisma. It allows users to browse job listings, save jobs for later, and apply directly through an intuitive interface.

The application demonstrates modern web development practices including dynamic routing, REST API integration, and state management.

---

## ✨ Features
- 🔍 Browse available job listings
- 💾 Save jobs for later viewing
- ❌ Remove saved jobs
- 📄 Apply to jobs with a structured form
- 🔄 Dynamic routing using Next.js (`/apply/[id]`)
- ⚡ API-driven data fetching
- ⏳ Loading states and user feedback

---

## 🛠️ Tech Stack
- **Frontend:** Next.js (Pages Router), React
- **Backend:** Next.js API routes
- **Database:** SQLite with Prisma ORM
- **Styling:** Material UI (MUI)

---

## 🧠 Key Concepts Demonstrated
- Dynamic and static routing in Next.js
- Using route parameters (`useRouter`)
- REST API integration and data fetching
- State management with React hooks
- CRUD operations (Save, Delete, Apply)

---

## 📂 Project Structure
/pages
/apply/[id].js → Job application page
/saved-jobs.js → Saved jobs list

/components
/apply → Application form & success message
/savedJobs → Saved job UI components

/utils/api
jobs.js → API interaction functions

---

## ⚙️ Setup Instructions

```bash
npm install
npm run generate-db
npm run dev