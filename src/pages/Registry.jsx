import goofy4Image from '../assets/goofy-4.jpg';

const Registry = () => {
    return (
        <div className="page-content">
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
                We are so incredibly grateful to be able to celebrate our wedding day with you, and that is all we really wished for. We're also lucky enough to have everything we need for this new chapter together, so no gifts, please.
            </p>
            <img
                src={goofy4Image}
                alt="Home"
                style={{
                    width: '100%',
                    objectFit: 'cover',
                    margin: '2rem 0'
                }} />
        </div>
    );
};

export default Registry;