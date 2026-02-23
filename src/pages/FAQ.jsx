const FAQ = () => {
    const faqs = [
        {
            question: "By when should I fill my RSVP?",
            answer: <span>We request you fill and submit your RSVP <strong>before 30<sup>th</sup> March</strong> to help us plan the event better.</span>
        },
        {
            question: "Is there a dress code?",
            answer: <span>We would love to see you in <strong>Indian ethnic wear</strong>, but please feel free to dress in whatever makes you feel most comfortable!</span>
        },
        {
            question: "Can I bring a date?",
            answer: <span>Please check your RSVP for your +1.</span>
        },
        {
            question: "What kind of food will be served?",
            answer: <span>We will be serving <strong>vegetarian food</strong>. Some desserts may contain egg which will be clearly labeled.</span>
        },
        {
            question: "What is the venue like?",
            answer: <span>
                The entire ceremony will be held indoors with an open-air patio so please carry jackets as Seattle can be rainy and chilly during early May.
                We will have a better idea about the weather as the date approaches.
            </span >
        }, {
            question: "Will there be parking available at the venue?",
            answer: <span>There is plenty of free parking available near the venue.</span>
        },
        {
            question: "Who do I reach out with questions?",
            answer: <span>You can reach out to the bride or groom with any questions.</span>
        },
    ]

    return (
        <div className="page-content">
            <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
                Somethings I hope you are wondering about.
            </p>

            {faqs.map((item, index) => {
                return <div key={index} style={{
                    padding: '1rem',
                    marginBottom: '1rem',
                }}>
                    <p style={{
                        color: 'var(--accent-color)',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                    }}>{item.question}</p>
                    <p>{item.answer}</p>
                </div>
            })}
        </div>
    );
};

export default FAQ;
