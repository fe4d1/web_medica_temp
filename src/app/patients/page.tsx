
import { getPatient } from '@/lib/db-patient';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function PatientPortalPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
    // await searchParams in Next.js 15
    const params = await searchParams;

    async function login(formData: FormData) {
        'use server';
        const mrn = formData.get('mrn') as string;
        const password = formData.get('password') as string;

        const patient = await getPatient(mrn);

        if (patient && patient.password === password) {
            (await cookies()).set('user_session', patient.mr_number);
            redirect('/patients/dashboard');
        } else {
            redirect('/patients?error=Invalid Credentials');
        }
    }

    return (
        <main className="container section" style={{ paddingTop: '4rem' }}>
            <div style={{ maxWidth: '500px', margin: '0 auto', background: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--gray-200)' }}>
                <h1 className="text-center" style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Patient Login</h1>

                {/* Helper for the User */}
                <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                    <strong>Demo Credentials:</strong><br />
                    MR Number: 123456<br />
                    Password: demo
                </div>

                {params?.error && (
                    <div style={{ background: '#fef2f2', color: '#dc2626', padding: '0.75rem', borderRadius: 'var(--radius-sm)', marginBottom: '1rem', textAlign: 'center' }}>
                        {params.error}
                    </div>
                )}

                <form action={login}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>MR Number</label>
                        <input type="text" name="mrn" required style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }} placeholder="e.g. 123456" />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Password</label>
                        <input type="password" name="password" required style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }} />
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Sign In</button>
                </form>
                <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem' }}>
                    <a href="#" style={{ color: 'var(--primary)' }}>Forgot Password?</a>
                </div>
            </div>
        </main>
    );
}
