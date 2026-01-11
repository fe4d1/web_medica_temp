
export default async function BookAppointmentPage({ searchParams }: { searchParams: Promise<{ doctor?: string }> }) {
    const { doctor } = await searchParams;

    return (
        <main className="container section" style={{ paddingTop: '2rem' }}>
            <h1 className="text-center" style={{ marginBottom: '2rem', color: 'var(--primary-dark)' }}>Book an Appointment</h1>
            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray-200)' }}>
                <form>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name</label>
                        <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone Number</label>
                            <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }} />
                        </div>
                        <div>
                            {doctor ? (
                                <>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Doctor</label>
                                    <input type="text" value={doctor} readOnly style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)', background: 'var(--accent-light)', color: 'var(--primary-dark)' }} />
                                </>
                            ) : (
                                <>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Department</label>
                                    <select style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)', background: 'white' }}>
                                        <option>General Medicine</option>
                                        <option>Cardiology</option>
                                        <option>Neurology</option>
                                        <option>Pediatrics</option>
                                        <option>Orthopedics</option>
                                    </select>
                                </>
                            )}
                        </div>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Preferred Date</label>
                        <input type="date" style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)' }} />
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Confirm Request</button>
                </form>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    Our reception team will call you to confirm the exact time slot.
                </p>
            </div>
        </main>
    );
}
