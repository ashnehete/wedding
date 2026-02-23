import goofyImage from '../assets/goofy-3.webp';

const ThingsToDo = () => {
    return (
        <div className="page-content">
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
                Coming soon!
            </p>
            <img
                src={goofyImage}
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

export default ThingsToDo;