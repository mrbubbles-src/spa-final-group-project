import "./visitenkarte.scss";

const Visitenkarte = () => {
    return (
        <>
            <h3>Unsere Daten</h3>
            <div className='contact_data'>
                <p>Tierarzpraxis Dr. med. vet. Volker R. Gerlitzki</p>
                <p>Wentorfer Straße 15</p>
                <p>21029 Hamburg</p>
                <p>
                    Telefon: <a href='tel:0407214244'>040 / 721 4244</a>
                </p>
                <p>
                    <a href='mailto:praxis@vet-gerlitzki.de'>
                        praxis@vet-gerlitzki.de
                    </a>
                </p>
            </div>
        </>
    );
};

export default Visitenkarte;
