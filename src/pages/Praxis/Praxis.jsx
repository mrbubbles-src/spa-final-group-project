import VolkerGerlitzki from "/public/images/aerzte/volkerg.jpeg";
import BirgitJoswig from "/public/images/aerzte/birgit-5d30482f.jpg";
import GalleryContainer from "../../components/GalleryContainer/GalleryContainer";
import { praxis } from "../../assets/imageArrays/galerieBilderPraxis";
import { Link } from "react-router-dom";

const Praxis = () => {
    return (
        <>
            <h2 className='sub-head'>Über die Praxis</h2>
            <section className='praxis-section-container'>
                <article className='cards'>
                    <img
                        className='cards_image'
                        src={VolkerGerlitzki}
                        alt='Tierarzt Dr. Volker Robert Gerlitzki'
                    />
                    <h3 className='cards_title'>
                        Tierarzt Dr. Volker Robert Gerlitzki
                    </h3>
                    <p className='paragraph'>
                        Von 1983 bis 1989 hat Dr. Gerlitzki Tiermedizin an der
                        tierärztlichen Hochschule in Hannover studiert und
                        begleitend in den verschiedenen Kliniken an der
                        Hochschule, z.B. in der Vogelklinik, der Heimtierklinik,
                        und der Klinik für kleine Haustiere gearbeitet. Nach
                        seiner Approbation 1989 war er vielfach als
                        Stellvertreter für verschiedene Kleintierpraxen rund um
                        Hannover sowie als Klinikreferent tätig.
                        <br />
                        <br />
                        Seine erste eigene Praxis eröffnete er Ende 1993 in Form
                        einer Gemeinschaftspraxis mit Schwerpunkten in den
                        Bereichen Kleintiere und Pferde. 1996 promovierte Dr.
                        Gerlitzki zum Thema Insektengifte. Anschließend übernahm
                        er eine bestehende Kleintierpraxis in Hamburg Bergedorf.
                        <br />
                        <br />
                        Neben seiner Praxistätigkeit betreut der Tierarzt die
                        Sporthundevereine in Geesthacht und Trittau.
                        <br />
                        <br />
                        Sozial engagiert sich Dr. Gerlitzki im Verein (Tierärzte
                        ohne Grenzen) e.V. Durch das Elend der wilden Hunde und
                        Katzen auf Rhodos stark beeindruckt engagiert er sich
                        seit 2011 intensiv im RAWS, dem Tierschutzverein Rhodos
                        und arbeitet ehrenamtlich auch direkt vor Ort als
                        Tierarzt. Weiterhin ist er im Vorstand der Lehmann
                        Stiftung für das Miteinander von Mensch, Tier und Natur
                        tätig.
                    </p>
                </article>
                <article className='cards'>
                    <img
                        className='cards_image img_zwei'
                        src={BirgitJoswig}
                        alt='Tierärztin Dr. Birgit Joswig'
                    />
                    <h3 className="cards_title">
                        Tierärztin Dr. Birgit Joswig
                    </h3>
                    <p className='paragraph'>
                        Von 2000 bis 2009 führte sie eine eigene Praxis in
                        Vierlanden.
                        <br />
                        <br />
                        Seit 2009 ist sie für die pharmazeutische Industrie in
                        der vorklinischen und klinischen Forschung tätig sowie
                        feste Mitarbeiterin der Tierarztpraxis Dr. Gerlitzki.
                        <br />
                        <br />
                        In mehreren lokalen Vereinen tätig, kümmert sie sich
                        ebenfalls um Ihren beachtlichen Tierbestand.
                    </p>
                </article>
            </section>
            <section className='galerie-container galerie-praxis'>
                <h2 className='sub-head'>Unsere Räumlichkeiten</h2>
                <p>
                    Hier sehen Sie einen kleinen Vorgeschmack auf unsere
                    Räumlichkeiten.
                </p>
                <p>
                    Für mehr Bilder besuchen Sie doch unsere{" "}
                    <Link to={"/galerie#praxis-gal"} className='site-links'>
                        Galerie
                    </Link>.
                </p>
                <GalleryContainer
                    galerie={praxis.slice(0, 3)}
                    galleryId='aboutPraxis'
                />
            </section>
        </>
    );
};

export default Praxis;
