function About() {
    return (
        <div className="call-to-action" style={{ backgroundColor: 'unset', flexWrap: 'wrap', borderBottom: '2px solid black' }}>
            <div className="description" style={{ width: '635px' }}>
                <h1>Little Lemon</h1>
                <h5 style={{ color: 'black' }}>Chicago</h5>
                <p style={{ color: 'black', height: 'auto' }}>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
            </div>
            <div style={{ position: 'relative', height: '455px', width: '500px' }}>
                <img src="about-2.jpg" height={325} width={300} style={{ objectFit: 'fill', position: 'absolute', top: '110px' }} />
                <img src="about-1.jpg" height={325} width={300} style={{ objectFit: 'fill', position: 'absolute', top: '19px', left: '201px' }} />
            </div>
        </div>
    )
}

export default About