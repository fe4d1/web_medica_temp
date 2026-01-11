
import Link from 'next/link';

export default function Header() {
    return (
        <header className="main-header">
            <div className="container header-inner">
                <Link href="/" className="brand">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#00D664" />
                        <path d="M12 7V17M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>VitalCare Medical</span>
                </Link>

                <nav className="nav-links">
                    <Link href="/doctors">Specialists</Link>
                    <Link href="/patients">Patients</Link>
                    <Link href="/professionals">Medical Staff</Link>
                    <a href="#footer">Contact</a>
                </nav>
            </div>
        </header>
    );
}
