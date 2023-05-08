const Visitenkarte = () => {
    return (
        <section className='cards'>
            <h3 className='cards_title'>Unsere Daten</h3>
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
                Fax:{" "}
                <a href='fax:04072693844' className='site-links'>
                    040 / 726 93844
                </a>
            </p>
            <p className='paragraph'>
                E-Mail:{" "}
                <a href='mailto:praxis@vet-gerlitzki.de' className='site-links'>
                    praxis@vet-gerlitzki.de
                </a>
            </p>{" "}
            <div className='warning'>
                <h3>Achtung</h3>
                <br />
                <p className='paragraph'>
                    Bitte haben Sie Verständnis, dass wir telefonisch oder per
                    E-Mail keine Diagnosen stellen können.
                </p>
                <p className='paragraph'>
                    Im Krankheitsfall vereinbaren Sie bitte einen Termin.
                </p>
            </div>
        </section>
    );
};

export default Visitenkarte;
