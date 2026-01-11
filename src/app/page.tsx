
import Link from 'next/link';
import { getNews } from '@/lib/db';

export default async function Home() {
    const news = await getNews();

    return (
        <main>
            <section className="hero-section">
                {/* Background Image */}
                <div className="hero-bg" style={{
                    backgroundImage: "url('/assets/images/hero-bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.3
                }}></div>

                <div className="container hero-content">
                    <h1 className="hero-title">Modern Healthcare, Simplified.</h1>
                    <p className="hero-subtitle">
                        Connecting patients with top-tier verified specialists.
                        Access digital records, instant booking, and world-class care from your home.
                    </p>

                    <div className="hero-cards-container">
                        {/* Doctor Card */}
                        <div className="hero-card" style={{
                            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/assets/images/doctor-portal.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'top'
                        }}>
                            <h3 className="card-title" style={{ color: 'white', fontSize: '1.5rem' }}>Medical Professionals</h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Manage your schedule, patients, and clinical notes securely.</p>
                            <Link href="/professionals" className="btn btn-primary" style={{ width: '100%' }}>
                                Staff Portal Access
                            </Link>
                        </div>

                        {/* Patient Card */}
                        <div className="hero-card" style={{
                            border: '1px solid rgba(255,255,255,0.4)',
                            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('/assets/images/patient-portal.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            <h3 className="card-title" style={{ color: 'white', fontSize: '1.5rem' }}>Patients</h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Book appointments, view history, and download lab reports.</p>
                            <Link href="/patients" className="btn btn-white" style={{ width: '100%' }}>
                                Patient Portal Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Streamlined Medical Services</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Experience a new standard of healthcare management with our digital-first approach designed for the modern patient.
                    </p>
                </div>

                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon-box">🔍</div>
                        <h3>Find a Specialist</h3>
                        <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            Search by specialization, city, or hospital name to find the most qualified verified doctors in your vicinity.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon-box">📅</div>
                        <h3>Instant Booking</h3>
                        <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            Skip the queues. Schedule appointments in real-time with top practitioners and get instant confirmation.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="service-icon-box">📂</div>
                        <h3>Secure Medical Records</h3>
                        <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            Access your entire medical history, prescriptions, and lab reports anytime, anywhere with our encrypted storage.
                        </p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Experience 24/7 Care with Top Specialists</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        Join thousands of patients and doctors already using our platform for better health outcomes.
                    </p>
                    <div className="cta-buttons">
                        <Link href="/careers" className="btn btn-primary">Join our Team (Careers)</Link>
                        <Link href="/book" className="btn btn-white">Book an Appointment</Link>
                    </div>
                </div>
            </section>

            {/* Keeping the functional News Requirement as a smaller section */}
            <section className="section container">
                <h3 className="text-center" style={{ marginBottom: '2rem' }}>Latest Updates</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {news.slice(0, 3).map((item) => (
                        <article key={item.id} style={{ padding: '1.5rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.content.substring(0, 100)}...</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
