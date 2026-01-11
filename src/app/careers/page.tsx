
export default function CareersPage() {
    return (
        <main className="container section">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Join Our Team</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                    VitalCare Medical is always looking for dedicated professionals to join our mission of providing world-class healthcare.
                </p>

                <div style={{ background: 'var(--accent-light)', padding: '3rem', borderRadius: 'var(--radius-md)', marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--primary-dark)', marginBottom: '1rem' }}>How to Apply</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        Please send your CV and Cover Letter to our HR department.
                        Quote the position you are applying for in the subject line.
                    </p>
                    <a href="mailto:jobs@vitalcare.com" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
                        ✉️ email: jobs@vitalcare.com
                    </a>
                </div>

                <h3 style={{ marginBottom: '2rem' }}>Open Positions</h3>
                <div style={{ display: 'grid', gap: '1.5rem', textAlign: 'left' }}>
                    {[
                        { title: 'Senior Cardiologist', description: 'Experienced cardiologist needed for our new Heart Center. Must have 10+ years experience and board certification.', type: 'Full Time' },
                        { title: 'ICU Nurse - Night Shift', description: 'Registered Nurse for intensive care unit. Critical care experience required. Competitive night shift differential.', type: 'Full Time' },
                        { title: 'Lab Technician', description: 'Analytical and detail-oriented technician to handle specimen processing and equipment maintenance.', type: 'Full Time' },
                        { title: 'Medical Receptionist', description: 'Friendly front-desk staff to handle patient check-ins and appointments. Prior medical office experience preferred.', type: 'Part Time' }
                    ].map(job => (
                        <div key={job.title} style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{job.title}</span>
                                <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', background: 'var(--accent-light)', padding: '2px 8px', borderRadius: '4px' }}>{job.type}</span>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
