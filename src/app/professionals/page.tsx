
import { getStaffMember } from '@/lib/db-staff';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ProfessionalsPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
    const params = await searchParams;

    async function login(formData: FormData) {
        'use server';
        const staffId = formData.get('staffId') as string;
        const password = formData.get('password') as string;

        const staff = await getStaffMember(staffId);

        if (staff && staff.password === password) {
            (await cookies()).set('staff_session', staff.staff_id);
            redirect('/professionals/dashboard');
        } else {
            redirect('/professionals?error=Invalid Credentials');
        }
    }

    return (
        <main className="container section" style={{ paddingTop: '4rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Medical Professionals Portal</h1>
                <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                    Secure access for Doctors, Nurses, and Lab Technicians.
                </p>

                <div style={{ background: 'var(--white)', padding: '3rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', maxWidth: '400px', margin: '0 auto', border: '1px solid var(--gray-200)' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Staff Login</h3>

                    {/* Demo Credentials Helper */}
                    <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.9rem', textAlign: 'left' }}>
                        <strong>Demo Credentials:</strong><br />
                        Staff ID: DOC-001<br />
                        Password: admin
                    </div>

                    {params?.error && (
                        <div style={{ background: '#fef2f2', color: '#dc2626', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', textAlign: 'center' }}>
                            {params.error}
                        </div>
                    )}

                    <form action={login}>
                        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Staff ID</label>
                            <input type="text" name="staffId" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }} placeholder="e.g. DOC-998" />
                        </div>
                        <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Password</label>
                            <input type="password" name="password" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }} />
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Portal Access</button>
                    </form>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Unauthorized access is strictly prohibited and monitored.
                    </p>
                </div>
            </div>
        </main>
    );
}
