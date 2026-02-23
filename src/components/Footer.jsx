const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem 1rem',
            marginTop: 'auto',
            borderTop: '1px solid #eaeaea',
            fontSize: '0.9rem',
            color: 'var(--text-color)',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.1rem'
        }}>
            <p style={{ margin: 0 }}>Made with ❤️ by Shruti & Aashish</p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#666' }}>May 9, 2026 • Seattle, WA</p>
        </footer>
    );
};

export default Footer;
