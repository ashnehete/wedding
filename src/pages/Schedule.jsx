const Schedule = () => {
    const schedule = [
        {
            time: '10:00 AM',
            event: 'Wedding Ceremony',
            description: 'Traditional ceremony followed by lunch.'
        },
        {
            time: '7:00 PM',
            event: 'Reception',
            description: 'Dinner, dancing, and celebration.'
        }
    ];

    return (
        <div className="page-content">
            <div style={{ marginTop: '2rem' }}>
                {schedule.map((item, index) => (
                    <div key={index} style={{
                        padding: '1rem',
                        borderLeft: '2px solid ' + (index % 2 === 0 ? 'var(--primary-color)' : 'var(--accent-color)'),
                        marginBottom: '1.5rem'
                    }}>
                        <p style={{ margin: 0, letterSpacing: '0.1rem', fontSize: '1.2rem' }}>{item.event}</p>
                        <p style={{ fontStyle: 'italic', margin: '0.5rem 0' }}>{item.time}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
