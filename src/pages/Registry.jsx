import goofyImmage from '../assets/goofy-4.webp';

const Registry = () => {
    return (
        <div className="page-content">
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
                We are so incredibly grateful to be able to celebrate our wedding day with you, and that is all we really wished for. We're also lucky enough to have everything we need for this new chapter together, so no gifts, please.
            </p>
            <img
                src={goofyImmage}
                alt="Home"
                style={{
                    width: '100%',
                    objectFit: 'cover',
                    marginTop: '2rem'
                }} />
            <p style={{ textAlign: 'center', fontStyle: 'italic' }}></p>
        </div>
    );
};

export default Registry;