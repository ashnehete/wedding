import { NavLink } from 'react-router-dom';
import headerImage from '../assets/header-image.webp';

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
                backgroundPosition: 'bottom center'
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
                justifyContent: 'space-evenly',
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--white)',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-sans)',
                flexWrap: 'wrap'
            }}>
                <NavLink to="/" style={linkStyle}>Home</NavLink>
                <NavLink to="/schedule" style={linkStyle}>Schedule</NavLink>
                <NavLink to="/travel" style={linkStyle}>Travel</NavLink>
                {/* <NavLink to="/things-to-do" style={linkStyle}>Things to Do</NavLink> */}
                <NavLink to="/registry" style={linkStyle}>Registry</NavLink>
                <NavLink to="/faq" style={linkStyle}>FAQ</NavLink>
                <NavLink to="/rsvp" style={linkStyle}>RSVP</NavLink>
            </nav>
        </header>
    );
};

export default Navigation;
