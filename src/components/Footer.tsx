
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="brand" style={{ marginBottom: '1rem' }}>
                            <span style={{ color: 'var(--primary)' }}>VitalCare Medical</span>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            A leading digital healthcare ecosystem dedicated to bridging the gap between patients and quality healthcare providers.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">About Us</Link></li>
                            <li><Link href="/doctors">Medical Panel</Link></li>
                            <li><Link href="/lab">Laboratory</Link></li>
                            <li><Link href="/legal/privacy">Privacy Policy</Link></li>
                            <li><Link href="/legal/terms">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Details</h4>
                        <ul>
                            <li>123 Healthcare Blvd, Medical District</li>
                            <li>+1 (555) 123-4567</li>
                            <li>support@vitalcare.com</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Leave a Message</h4>
                        <form className="footer-form">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Email Address" />
                            <textarea rows={3} placeholder="Message"></textarea>
                            <button className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="copyright">
                    © 2026 VitalCare Medical. All rights reserved. Licensed Medical Provider.
                </div>
            </div>
        </footer>
    );
}
