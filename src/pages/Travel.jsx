import { MapPin, Plane, TramFront, TrainFront, Bed } from 'lucide-react';

const Travel = () => {
    const headingStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'normal'
    }

    const subHeadingStyle = {
        textTransform: 'uppercase',
        letterSpacing: '0.15rem',
        fontWeight: '500',
        fontSize: '1.2rem',
        marginBottom: '1rem',
        color: 'var(--accent-color)'
    }

    const sectionStyle = {
        marginTop: '4rem'
    }

    const subsectionStyle = {
        marginTop: '1.5rem'
    }

    return (
        <div className="page-content">
            <p style={{ marginTop: '1rem' }}>
                We are excited to celebrate with you! Here is some information to help you plan your trip.
            </p>

            <div style={sectionStyle}>
                <h3 style={headingStyle}>
                    <MapPin size={24} /> Venue
                </h3>
                <div style={subsectionStyle}>
                    <p style={subHeadingStyle}>
                        <a href="https://maps.app.goo.gl/GCWtm3LYZi1iNZh77" target="_blank">
                            Tyee Yacht Club
                        </a>
                    </p>
                    <p>3229 Fairview Ave E, Seattle, WA 98102</p>
                </div>
            </div>

            <div style={sectionStyle}>
                <h3 style={headingStyle}>
                    <Plane size={24} /> Flights
                </h3>
                <div style={subsectionStyle}>
                    <p style={subHeadingStyle}>Seattle-Tacoma International Airport (SEA)</p>
                    <p>
                        Most guests will find it easiest to fly into SEA, which is the best option with the most flight choices.
                    </p>
                </div>
                <div style={subsectionStyle}>
                    <p style={subHeadingStyle}>Paine Field (PAE)</p>
                    <p>
                        Located in Everett, this is another option, though it is further north.
                    </p>
                </div>
            </div>

            <div style={sectionStyle}>
                <h3 style={headingStyle}>
                    <TramFront size={24} /> Getting Around in the City
                </h3>
                <div style={subsectionStyle}>
                    <p style={subHeadingStyle}>Sound Transit Link Light Rail (1 Line)</p>
                    <p>
                        From SeaTac Airport, you can take the Light Rail north to the <strong>U-District station</strong>. This stop is the closest to the venue and several nearby hotels.
                    </p>
                </div>
                <div style={subsectionStyle}>
                    <p style={subHeadingStyle}>King County Metro Bus</p>
                    <p>
                        Bus routes <strong>70</strong> and <strong>49</strong> provide frequent service between Downtown, Capitol Hill, and the U-District, with stops within walking distance of the venue.
                    </p>
                </div>
            </div>

            <div style={sectionStyle}>
                <h3 style={headingStyle}>
                    <TrainFront size={24} /> Train
                </h3>
                <div style={subsectionStyle}>
                    <p style={subHeadingStyle}>King Street Station (Amtrak)</p>
                    <p>
                        For those traveling by train, this is the main hub in Seattle, located downtown and a short rideshare away from the venue.
                    </p>
                </div>
            </div>

            <div style={sectionStyle}>
                <h3 style={headingStyle}>
                    <Bed size={24} /> Accommodation
                </h3>
                <div style={subsectionStyle}>
                    <p style={subHeadingStyle}>Areas</p>
                    <p>
                        We recommend staying in the <strong>U-District</strong>, <strong>South Lake Union</strong>, or <strong>Capitol Hill</strong> which are all easily accessible by public transportation and have a variety of accommodations to choose from.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Travel;
