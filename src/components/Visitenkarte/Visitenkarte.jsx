const Visitenkarte = () => {
    return (
        <section className='cards'>
            <h3 className="cards_title">Unsere Daten</h3>
                <p className='paragraph'>
                    Tierarzpraxis Dr. med. vet. Volker R. Gerlitzki
                </p>
                <p className='paragraph'>Wentorfer Straße 15</p>
                <p className='paragraph'>21029 Hamburg</p>
                <p className='paragraph'>
                    Telefon:{" "}
                    <a href='tel:0407214244' className='site-links'>
                        040 / 721 4244
                    </a>
                </p>
                <p className='paragraph'>
                    <a
                        href='mailto:praxis@vet-gerlitzki.de'
                        className='site-links'
                    >
                        praxis@vet-gerlitzki.de
                    </a>
                </p>
        </section>
    );
};

export default Visitenkarte;
