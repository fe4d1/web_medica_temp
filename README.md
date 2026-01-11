# VitalCare Medical Platform

A modern, responsive healthcare management platform built with Next.js 15. This application serves as a comprehensive portal for patients, medical professionals, and hospital administrators.

![Concept](public/assets/images/hero-bg.png)

## Features

### 🏥 For Patients
- **Online Portal**: Secure login access to view medical history and prescriptions.
- **Appointment Booking**: Easy-to-use form to book appointments with specialists.
- **Find Doctors**: Browse verified specialists by department (Cardiology, Neurology, etc.).

### 🩺 For Medical Professionals
- **Staff Dashboard**: Dedicated secure area for doctors and nurses.
- **Daily Schedule**: View upcoming patient appointments and status.
- **Quick Stats**: At-a-glance view of pending lab results and messages.

### ⚙️ Platform Features
- **Server-Side Rendering (SSR)**: Optimized performance using Next.js App Router.
- **Responsive Design**: Mobile-first architecture using standard CSS variables and Flexbox/Grid.
- **News System**: A server-action based news posting system for hospital updates.
- **Mock Persistence**: Uses a local JSON-based "database" for demonstration purposes (no external DB setup required).

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (CSS Modules & Global CSS Variables)
- **Data**: JSON-based mock storage (FileSystem API)

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vitalcare-medical.git
   cd vitalcare-medical
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app`: Application routes and pages (Next.js App Router).
- `/src/components`: Reusable UI components (Header, Footer, etc.).
- `/src/lib`: Data access layer and utilities.
- `/src/data`: JSON files acting as the database (`doctors.json`, `patients.json`, `staff.json`, `news.json`).
- `/public/assets`: Static images and assets.

## Demo Credentials

**Patient Portal:**
- **MRN**: `123456`
- **Password**: `demo`

**Staff Portal:**
- **ID**: `DOC-001`
- **Password**: `admin`

## License

This project is licensed under the MIT License.
