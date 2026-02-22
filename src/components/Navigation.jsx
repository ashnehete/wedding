import { NavLink } from 'react-router-dom';
import headerImage from '../assets/header-image.jpg';

const Navigation = () => {
    const linkStyle = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? 'var(--accent-color)' : 'var(--text-color)',
        padding: '0.5rem',
        textDecoration: 'none',
        letterSpacing: '0.2rem',
        borderBottom: isActive ? '2px solid var(--accent-color)' : 'none'
    });

    return (
        <header style={{
            backgroundColor: 'var(--white)'
        }}>
            <div style={{
                width: '100%',
                height: '30vh',
                backgroundImage: `url(${headerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom center',
                marginBottom: '0.5rem'
            }}></div>

            <div style={{
                textAlign: 'center',
                padding: '0.8rem 0 0.2rem 0',
                fontSize: '2rem',
                color: 'var(--text-color)',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.2rem'
            }}>
                Shruti & Aashish
            </div>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--white)',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)'
            }}>
                <NavLink to="/" style={linkStyle}>Home</NavLink>
                <NavLink to="/schedule" style={linkStyle}>Schedule</NavLink>
                <NavLink to="/travel" style={linkStyle}>Travel</NavLink>
            </nav>
        </header>
    );
};

export default Navigation;
