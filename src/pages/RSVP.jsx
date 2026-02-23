const RSVP = () => {
    return (
        <div className="page-content">
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
                Kindly RSVP by March 30<sup>th</sup>
            </p>
            <div style={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingTop: '177.7778%',
                paddingBottom: 0,
                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                marginTop: '1.6em',
                marginBottom: '0.9em',
                overflow: 'hidden',
                borderRadius: '8px',
                willChange: 'transform'
            }}>
                <iframe
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0
                    }}
                    src="https://withjoy.com/shruti-parvekar-and-aashish/rsvp"
                    allowFullScreen={true}
                    allow="fullscreen"
                    title="Wedding RSVP"
                >
                </iframe>
            </div>
        </div>
    );
};

export default RSVP;
