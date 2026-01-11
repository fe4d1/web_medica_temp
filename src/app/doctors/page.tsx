
import Link from 'next/link';
import { getDoctors } from '@/lib/db';

export default async function DoctorsPage() {
    const doctors = await getDoctors();

    return (
        <main className="container section" style={{ paddingTop: '3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 className="hero-title" style={{ color: 'var(--text-main)', fontSize: '2.5rem' }}>Our Medical Panel</h1>
                <p style={{ color: 'var(--text-muted)' }}>Meet our top-tier verified specialists.</p>
            </div>

            <div className="doctors-grid">
                {doctors.map((doc) => (
                    <div key={doc.id} className="doctor-card">
                        <div style={{
                            height: '250px',
                            background: 'var(--gray-100)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            color: 'var(--primary)',
                            backgroundImage: doc.image ? `url(${doc.image})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'top center'
                        }}>
                            {!doc.image && doc.name[0]}
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{doc.name}</h2>
                            <span style={{
                                display: 'inline-block',
                                background: 'var(--accent-light)',
                                color: 'var(--primary)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem'
                            }}>
                                {doc.specialty}
                            </span>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                {doc.bio}
                            </p>
                            <Link href={`/book?doctor=${encodeURIComponent(doc.name)}`} className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--primary)', color: 'var(--primary)', textAlign: 'center' }}>
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
