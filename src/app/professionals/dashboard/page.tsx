
import { getStaffMember } from '@/lib/db-staff';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function StaffDashboardPage() {
    const cookieStore = await cookies();
    const staffId = cookieStore.get('staff_session')?.value;

    if (!staffId) {
        redirect('/professionals');
    }

    const staff = await getStaffMember(staffId);

    if (!staff) {
        redirect('/professionals');
    }

    return (
        <main className="container section" style={{ paddingTop: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--gray-200)', paddingBottom: '1rem' }}>
                <h1 className="hero-title" style={{ fontSize: '2rem', marginBottom: 0 }}>Medical Staff Portal</h1>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{staff.name}</div>
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{staff.role}</span>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ID: {staff.staff_id}</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: '2rem' }}>
                {/* Sidebar Actions */}
                <div>
                    <div style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Quick Actions</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'var(--primary)' }}>View Schedule</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'var(--primary)' }}>Patient Directory</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'var(--primary)' }}>Lab Requests</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: 'var(--primary)' }}>Internal Messaging</a></li>
                        </ul>
                    </div>

                    <form action={async () => {
                        'use server';
                        (await cookies()).delete('staff_session');
                        redirect('/professionals');
                    }}>
                        <button className="btn btn-outline" style={{ width: '100%', borderColor: '#ef4444', color: '#ef4444' }}>Log Out</button>
                    </form>
                </div>

                {/* Main Content */}
                <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{staff.patients.length}</div>
                            <div style={{ color: 'var(--text-muted)' }}>Appointments Today</div>
                        </div>
                        <div style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>3</div>
                            <div style={{ color: 'var(--text-muted)' }}>Pending Lab Results</div>
                        </div>
                        <div style={{ background: 'var(--white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)', boxShadow: 'var(--shadow-sm)' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>12</div>
                            <div style={{ color: 'var(--text-muted)' }}>New Messages</div>
                        </div>
                    </div>

                    <h3 style={{ marginBottom: '1rem' }}>Today's Schedule</h3>
                    {staff.patients.length === 0 ? <p>No appointments for today.</p> : (
                        <div style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ background: 'var(--gray-100)', borderBottom: '1px solid var(--gray-200)' }}>
                                    <tr>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Time</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Patient Name</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Type</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Status</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staff.patients.map((p, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                                            <td style={{ padding: '1rem' }}>{p.time}</td>
                                            <td style={{ padding: '1rem', fontWeight: 'bold' }}>{p.name}</td>
                                            <td style={{ padding: '1rem' }}><span style={{ background: '#e0f2fe', color: '#0284c7', padding: '2px 8px', borderRadius: '10px', fontSize: '0.85rem' }}>{p.type}</span></td>
                                            <td style={{ padding: '1rem' }}>Confirmed</td>
                                            <td style={{ padding: '1rem' }}>
                                                <button style={{ marginRight: '0.5rem', background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}>View</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
