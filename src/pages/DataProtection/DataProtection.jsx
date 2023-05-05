// import React from "react";

const DataProtection = () => {
    return (
        <>
            <div>
                <h2 className="sub-title">Datenschutzerklärung</h2>
            </div>
            <h2 className="sub-title">Grundlegendes</h2>
            <p className="paragraph">
                Diese Datenschutzerklärung soll die Nutzer dieser Website über
                die Art, den Umfang und den Zweck der Erhebung und Verwendung
                personenbezogener Daten durch den Websitebetreiber [Ihre
                Kontaktdaten einfügen] informieren.
            </p>
            <p className="paragraph">
                Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und
                behandelt Ihre personenbezogenen Daten vertraulich und
                entsprechend der gesetzlichen Vorschriften. Da durch neue
                Technologien und die ständige Weiterentwicklung dieser Webseite
                Änderungen an dieser Datenschutzerklärung vorgenommen werden
                können, empfehlen wir Ihnen sich die Datenschutzerklärung in
                regelmäßigen Abständen wieder durchzulesen.
            </p>
            <p className="paragraph">
                Definitionen der verwendeten Begriffe (z.B. “personenbezogene
                Daten” oder “Verarbeitung”) finden Sie in Art. 4 DSGVO.
            </p>
            <h2 className="sub-title">Zugriffsdaten</h2>
            <p className="paragraph">
                Wir, der Websitebetreiber bzw. Seitenprovider, erheben aufgrund
                unseres berechtigten Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO)
                Daten über Zugriffe auf die Website und speichern diese als
                „Server-Logfiles“ auf dem Server der Website ab. Folgende Daten
                werden so protokolliert:
            </p>
            <ul className="dataprotection-list-container">
                <li className="dataprotection-list-item">Besuchte Website</li>
                <li className="dataprotection-list-item">
                    Uhrzeit zum Zeitpunkt des Zugriffes
                </li>
                <li className="dataprotection-list-item">
                    Menge der gesendeten Daten in Byte
                </li>
                <li className="dataprotection-list-item">
                    Quelle/Verweis, von welchem Sie auf die Seite gelangten
                </li>
                <li className="dataprotection-list-item">
                    Verwendeter Browser
                </li>
                <li className="dataprotection-list-item">
                    Verwendetes Betriebssystem
                </li>
                <li className="dataprotection-list-item">
                    Verwendete IP-Adresse
                </li>
            </ul>
            <p className="paragraph">
                Die Server-Logfiles werden für maximal 7 Tage gespeichert und
                anschließend gelöscht. Die Speicherung der Daten erfolgt aus
                Sicherheitsgründen, um z. B. Missbrauchsfälle aufklären zu
                können. Müssen Daten aus Beweisgründen aufgehoben werden, sind
                sie solange von der Löschung ausgenommen bis der Vorfall
                endgültig geklärt ist.
            </p>
            <h2 className="sub-head">Umgang mit Kontaktdaten</h2>
            <p className="paragraph">
                Nehmen Sie mit uns als Websitebetreiber durch die angebotenen
                Kontaktmöglichkeiten Verbindung auf, werden Ihre Angaben
                gespeichert, damit auf diese zur Bearbeitung und Beantwortung
                Ihrer Anfrage zurückgegriffen werden kann. Ohne Ihre
                Einwilligung werden diese Daten nicht an Dritte weitergegeben.
            </p>
            <h2 className="sub-head">Umgang mit Kommentaren und Beiträgen</h2>
            <p className="paragraph">
                Hinterlassen Sie auf dieser Website einen Beitrag oder
                Kommentar, wird Ihre IP-Adresse gespeichert. Dies erfolgt
                aufgrund unserer berechtigten Interessen im Sinne des Art. 6
                Abs. 1 lit. f. DSGVO und dient der Sicherheit von uns als
                Websitebetreiber: Denn sollte Ihr Kommentar gegen geltendes
                Recht verstoßen, können wir dafür belangt werden, weshalb wir
                ein Interesse an der Identität des Kommentar- bzw.
                Beitragsautors haben.
            </p>
            <h2 className="sub-head">Rechte des Nutzers</h2>
            <p className="paragraph">
                Sie haben als Nutzer das Recht, auf Antrag eine kostenlose
                Auskunft darüber zu erhalten, welche personenbezogenen Daten
                über Sie gespeichert wurden. Sie haben außerdem das Recht auf
                Berichtigung falscher Daten und auf die
                Verarbeitungseinschränkung oder Löschung Ihrer personenbezogenen
                Daten. Falls zutreffend, können Sie auch Ihr Recht auf
                Datenportabilität geltend machen. Sollten Sie annehmen, dass
                Ihre Daten unrechtmäßig verarbeitet wurden, können Sie eine
                Beschwerde bei der zuständigen Aufsichtsbehörde einreichen.
            </p>
            <h2 className="sub-head">Löschung von Daten</h2>
            <p className="paragraph">
                Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur
                Aufbewahrung von Daten (z. B. Vorratsdatenspeicherung)
                kollidiert, haben Sie ein Anrecht auf Löschung Ihrer Daten. Von
                uns gespeicherte Daten werden, sollten sie für ihre
                Zweckbestimmung nicht mehr vonnöten sein und es keine
                gesetzlichen Aufbewahrungsfristen geben, gelöscht. Falls eine
                Löschung nicht durchgeführt werden kann, da die Daten für
                zulässige gesetzliche Zwecke erforderlich sind, erfolgt eine
                Einschränkung der Datenverarbeitung. In diesem Fall werden die
                Daten gesperrt und nicht für andere Zwecke verarbeitet.
            </p>
            <h2 className="sub-head">Widerspruchsrecht</h2>
            <p className="paragraph">
                Nutzer dieser Webseite können von ihrem Widerspruchsrecht
                Gebrauch machen und der Verarbeitung ihrer personenbezogenen
                Daten zu jeder Zeit widersprechen.
            </p>
            <p className="paragraph">
                Wenn Sie eine Berichtigung, Sperrung, Löschung oder Auskunft
                über die zu Ihrer Person gespeicherten personenbezogenen Daten
                wünschen oder Fragen bzgl. der Erhebung, Verarbeitung oder
                Verwendung Ihrer personenbezogenen Daten haben oder erteilte
                Einwilligungen widerrufen möchten, wenden Sie sich bitte an
                folgende
                <a href="mailto:info@vet-gerlitzki.de" className="site-links">
                    E-Mail-Adresse: info@vet-gerlitzki.de
                </a>
            </p>
        </>
    );
};

export default DataProtection;
