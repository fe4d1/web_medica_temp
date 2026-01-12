# VitalCare Medical Platform

A modern, responsive healthcare management platform built for patients, doctors, and medical professionals.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## Overview

VitalCare connects patients with healthcare providers through a seamless digital experience. The platform facilitates appointment booking, medical record access, and professional management tools.

### Key Features

- **Patient Portal**: Dashboard for appointment history, upcoming visits, and medical records.
- **Provider Dashboard**: Tools for doctors to manage schedules and patient details.
- **News & Updates**: Integrated system for hospital announcements.
- **Responsive Interface**: Fully optimized for mobile, tablet, and desktop devices.
- **Booking System**: Streamlined process for scheduling consultations.

## Technology Stack

Built with performance, SEO, and scalability in mind:

- **Frontend Core**: [Next.js 15](https://nextjs.org/) (App Router Architecture)
- **Language**: TypeScript (Strict type safety)
- **Styling**: Modern CSS3 (Variables, Flexbox/Grid, Glassmorphism)
- **State Management**: React Server Components & Server Actions

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js 18.17+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/vitalcare-medical.git
   cd vitalcare-medical
   ```

2. **Install dependencies**
   ```bash
   npm install (or pnpm install)
   ```

3. **Start the development server**
   ```bash
   npm run dev (or pnpm run dev)
   ```

4. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## Credentials (Demo)

Use these credentials to explore the different portals:

| Role | Username / ID | Password | access URL |
|------|--------------|----------|------------|
| **Patient** | `123456` (MRN) | `demo` | `/patients/dashboard` |
| **Doctor** | `DOC-001` | `admin` | `/professionals/dashboard` |

## Project Structure

The codebase follows a Domain-Driven structure within the Next.js App Router:

```
src/
├── app/ # Next.js App Router (Pages and Routes)
│ ├── admin/ # News/Article Management
│ ├── patients/ # Patient Portal (Dashboard and History)
│ ├── professionals/ # Medical Staff Portal (Staff Dashboard)
│ ├── doctors/ # Public Listing of Specialists
│ ├── book/ # Appointment Booking System
│ ├── careers/ # Recruitment Section
│ ├── legal/ # Terms and Privacy Pages
│ └── globals.css # Global Styles and Design Variables
├── components/ # Components UI (Header, Footer, JS Demos)
├── data/ # Persistence Layer (JSON Files)
└── lib/ # Data Logic (Access Layer and Calculators)
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
