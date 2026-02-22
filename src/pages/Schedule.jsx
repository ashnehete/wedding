const Schedule = () => {
    const schedule = [
        {
            time: '4:30 PM',
            event: 'Arrival & Baraat',
            description: 'The groom arrives with his family and friends in a grand procession.'
        },
        {
            time: '5:00 PM',
            event: 'Wedding Ceremony',
            description: 'Traditional ceremony starts with appetizers and drinks for the guests.'
        },
        {
            time: '7:00 PM',
            event: 'Reception Dinner',
            description: 'Join us for dinner after the ceremony.'
        },
        {
            time: '8:30 PM',
            event: 'Desserts & Toast',
            description: 'Join us for desserts and a toast to the happy couple.'
        },
        {
            time: '9:00 PM',
            event: 'DJ & Dancing',
            description: 'Let\'s dance the night away!'
        },
        {
            time: '10:30 PM',
            event: 'Farewell',
            description: 'We will carry this night in our hearts forever. Thank you for being a part of our journey.'
        }
    ];

    return (
        <div className="page-content">
            <div style={{ marginTop: '2rem' }}>
                <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>All events will be held at the same venue.</p>
                {schedule.map((item, index) => (
                    <div key={index} style={{
                        padding: '1rem',
                        marginBottom: '1rem',
                        display: 'grid',
                        gridTemplateColumns: '1fr 4fr',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <div>
                            <p style={{
                                fontStyle: 'italic',
                                textAlign: 'center'
                            }}>{item.time}</p>
                        </div>
                        <div style={{
                            // borderLeft: '2px solid ' + (index % 2 === 0 ? 'var(--primary-color)' : 'var(--accent-color)'),
                            borderLeft: '2px solid var(--primary-color)',
                            paddingLeft: '1rem',
                            // paddingBottom: '0.5rem'
                        }}>
                            <p style={{
                                margin: 0,
                                letterSpacing: '0.1rem',
                                fontSize: '1.2rem',
                                textTransform: 'uppercase',
                                color: 'var(--accent-color)'
                            }}>{item.event}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
