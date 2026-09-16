import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ paddingTop: '150px', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className="glow-text" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Lost in the system.</h1>
      <p style={{ marginBottom: '2rem' }}>Error 404 - Page not found.</p>
      <Link to="/" style={{ padding: '12px 24px', background: 'var(--text-primary)', color: 'var(--bg-base)', borderRadius: 'var(--radius-pill)', fontWeight: 600 }}>Return Home →</Link>
    </div>
  );
}
