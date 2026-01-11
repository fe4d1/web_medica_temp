
import { saveNews } from '@/lib/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export default function CreateNewsPage() {

    async function createNews(formData: FormData) {
        'use server';

        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        const adminKey = formData.get('adminKey') as string;

        // Simple security check for prototype
        if (adminKey !== 'admin123') {
            redirect('/admin/news/create?error=Invalid Admin Key');
        }

        if (!title || !content) {
            throw new Error('Title and Content are required');
        }

        await saveNews({ title, content });
        revalidatePath('/');
        redirect('/');
    }

    return (
        <main className="container section">
            <header style={{ marginBottom: '2rem', borderBottom: '1px solid var(--gray-200)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="brand" style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>VitalCare Admin</div>
                    <Link href="/" className="btn btn-outline" style={{ borderColor: 'var(--gray-200)', color: 'var(--text-muted)' }}>Back to Home</Link>
                </div>
            </header>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 className="section-title text-center" style={{ marginBottom: '2rem' }}>Publish News Update</h1>

                <div className="form-wrapper" style={{ background: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                    <form action={createNews}>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="adminKey" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Admin Key (Required)</label>
                            <input type="password" id="adminKey" name="adminKey" required placeholder="Enter admin key (hint: admin123)" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="title" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Title</label>
                            <input type="text" id="title" name="title" required placeholder="Enter news title" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }} />
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="content" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Content</label>
                            <textarea id="content" name="content" rows={6} required placeholder="Enter news content" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Publish News</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
