import homeImage from '../assets/home-image.jpg';

const Home = () => {
    return (
        <div
            className="page-content"
            style={{
                textAlign: 'center',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.2rem',
                fontWeight: 'lighter'
            }}>

            <div style={{
                fontSize: '2rem',
                color: 'var(--accent-color)',
                textTransform: 'uppercase'
            }}>
                We're getting married!
            </div>

            <img
                src={homeImage}
                alt="Home"
                style={{
                    width: '100%',
                    objectFit: 'cover',
                    margin: '2rem 0'
                }} />

            <div
                style={{
                    fontSize: '1.5rem',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1rem',
                    marginBottom: '1rem',
                    justifyContent: 'center',
                }}>
                <span>
                    MAY 9, 2026
                </span>
                <span style={{ borderLeft: '1px solid var(--accent-color)' }}>
                </span>
                <span>
                    SEATTLE, WA
                </span>
            </div>

            <a href="/rsvp" style={{
                fontSize: '1.2rem',
                margin: '2rem 0',
                color: 'white',
                backgroundColor: 'var(--accent-color)',
                padding: '0.5rem 1rem',
                display: 'inline-block',
                width: '50%'
            }}>
                RSVP
            </a>
            {/* Map */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.6912947037167!2d-122.32571602329824!3d47.65156548487098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014fa9b01c5a9%3A0x7255e0b0c23557df!2sTyee%20Yacht%20Club!5e0!3m2!1sen!2sus!4v1771278723979!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0, marginTop: '2rem' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div >
    );
};

export default Home;
