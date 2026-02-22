import goofy3Image from '../assets/goofy-3.jpg';

const ThingsToDo = () => {
    return (
        <div className="page-content">
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
                Coming soon!
            </p>
            <img
                src={goofy3Image}
                alt="Home"
                style={{
                    width: '100%',
                    objectFit: 'cover',
                    margin: '2rem 0'
                }} />
        </div>
    );
};

export default ThingsToDo;