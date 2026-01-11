
import { getPatient } from '@/lib/db-patient';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const mrn = cookieStore.get('user_session')?.value;

    if (!mrn) {
        redirect('/patients');
    }

    const patient = await getPatient(mrn);

    if (!patient) {
        redirect('/patients');
    }

    return (
        <main className="container section" style={{ paddingTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--gray-200)', paddingBottom: '1rem' }}>
                <h1 className="hero-title" style={{ fontSize: '2rem', marginBottom: 0 }}>Patient Portal</h1>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{patient.name}</div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>MRN: {patient.mr_number}</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                {/* Sidebar Info */}
                <div>
                    <div style={{ background: 'var(--accent-light)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Personal Info</h3>
                        <div style={{ marginBottom: '0.5rem' }}><strong>DOB:</strong> {patient.dob}</div>
                        <div style={{ marginBottom: '0.5rem' }}><strong>Blood Group:</strong> {patient.blood_group}</div>
                    </div>

                    <form action={async () => {
                        'use server';
                        const cookieStore = await cookies(); // Use readonly cookies
                        // In a server action, to delete a cookie we need to use cookies().delete() but next/headers cookies are readonly in some contexts.
                        // Actually, in Server Actions we can set/delete cookies. 
                        // Let's rely on the client knowing to clear or just redirect to a logout route.
                        // For simplicity in this non-auth prototype, let's just use a Link to a logout route or simple redirect that clears cookie.
                        // Or proper way:
                        (await cookies()).delete('user_session');
                        redirect('/patients');
                    }}>
                        <button className="btn btn-outline" style={{ width: '100%', borderColor: '#ef4444', color: '#ef4444' }}>Sign Out</button>
                    </form>
                </div>

                {/* Main Content */}
                <div>
                    <h3 style={{ marginBottom: '1.5rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>Medical History</h3>

                    {patient.history.length === 0 ? <p>No records found.</p> : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {patient.history.map((record, idx) => (
                                <div key={idx} style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', padding: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 'bold', color: 'var(--primary-dark)' }}>{record.type}</span>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{record.date}</span>
                                    </div>
                                    <div style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}><strong>Doctor:</strong> {record.doctor}</div>
                                    <p style={{ background: 'var(--gray-100)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9rem' }}>{record.notes}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
