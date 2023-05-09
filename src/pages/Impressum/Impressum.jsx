const Impressum = () => {
    return (
        <>
            <h2 className='sub-head'>Impressum</h2>
            <div className='cards_impressum'>
                <p className='paraImpr'>
                    Es gelten unsere Allgemeinen Geschäftsbedingungen. Sofern
                    Teile oder einzelne Formulierungen des Textes der geltenden
                    Rechtslage nicht, nicht mehr oder nicht vollständig
                    entsprechen, bleiben die übrigen Teile in ihrem Inhalt und
                    ihrer Gültigkeit davon unberührt.
                </p>
                <br />
                <p className='paraImpr'>
                    Für Schäden durch Medikationen und Behandlungen, die mittels
                    Informationen dieser Website oder Verweisen von dieser Site
                    vorgenommen wurden, ist jede Haftung ausgeschlossen. Wir
                    empfehlen in jedem Krankheitsfall eine ärztliche oder
                    anderweitig medizinische Hilfe zu Rate zu ziehen.
                </p>{" "}
                <br />
                <p className='paraImpr'>
                    Die Tierarztpraxis Gerlitzki übernimmt keine Haftung für
                    Schäden, die durch die Nutzung der Internet-Sites entstehen.
                    Dies betrifft jegliche Probleme, die während oder nach der
                    Nutzung der Website auf dem Rechner oder im Netzwerk des
                    Nutzers auftreten, seien es Ausfälle von Hard- oder
                    Software, Datenverluste, Virenbefall oder andere
                    Unregelmäßigkeiten. Es können weder für direkte Schäden noch
                    für Folgeschäden (Zeitverlust, indirekte Schäden,
                    entgangener Gewinn) Schadenersatzansprüche geltend gemacht
                    werden.
                </p>{" "}
                <br />
                <p className='paraImpr'>
                    Für den Inhalt externer Links sind ausschließlich dessen
                    Urheber und Autoren, nicht jedoch die Tierarztpraxis
                    Gerlitzki verantwortlich. Zum Zeitpunkt der Verknüpfung
                    waren diese frei von illegalen Inhalten.
                </p>{" "}
                <br />
                <div className='einrückImpr'>
                    <h3 className='cards_title'>
                        Verantwortlich gem. §6 MDStV:
                    </h3>
                    <p className='paraImpr'>Dr.Volker R.Gerlitzki</p>
                    <p className='paraImpr'>Wentorfer Str. 15</p>
                    <p className='paraImpr'>21029 Hamburg</p>
                    <p className='paraImpr'>
                        Tel.:{" "}
                        <a className='site-links' href='tel:+0407214244'>
                            040/7214244
                        </a>
                    </p>
                    <p className='paraImpr'>
                        E-Mail:{" "}
                        <a
                            className='site-links'
                            href='mailto:praxis@vet-gerlitzki.de'
                        >
                            praxis@vet-gerlitzki.de
                        </a>
                    </p>{" "}
                    <br />
                </div>
                <div className='einrückImpr'>
                    <h3 className='cards_title'>
                        Zuständige Aufsichtsbehörde:
                    </h3>
                    <p className='paraImpr'>
                        Behörde für Umwelt und Gesundheit der Hansestadt
                        Hamburg.
                    </p>{" "}
                    <br />
                </div>
                <div className='einrückImpr'>
                    <h3 className='cards_title'>Zuständige Kammer</h3>
                    <p className='paraImpr '>Tierärztekammer Hamburg</p>
                    <p className='paraImpr '>Sternstrasse 106</p>
                    <p className='paraImpr '>20357 Hamburg</p>
                    <p className='paraImpr '>
                        Tel.:{" "}
                        <a className='site-links' href='tel:+0404391623'>
                            040-439 16 23
                        </a>
                    </p>
                    <p className='paraImpr '>
                        Telefax:{" "}
                        <a className='site-links' href='fax:+04043250577'>
                            040-432 505 77
                        </a>
                    </p>
                    <p className='paraImpr '>
                        E-Mail:{" "}
                        <a
                            className='site-links'
                            href='mailto:post@tieraerztekammer-hamburg.de'
                        >
                            post@tieraerztekammer-hamburg.de
                        </a>
                    </p>{" "}
                    <br />
                </div>
                <div className='einrückImpr'>
                    <h3 className='cards_title'>
                        Gesetzliche Berufsbezeichnung:
                    </h3>
                    <p className='paraImpr'>Tierarzt</p>
                    <p className='paraImpr'>
                        Berufsbezeichnung verliehen in der Bundesrepublik
                        Deutschland, Niedersachsen
                    </p>
                    <br />
                </div>
                <div className='einrückImpr'>
                    <h3 className='cards_title'>Berufsordnung:</h3>
                    <p className='paraImpr'>
                        Die berufsrechtlichen Regelungen sind über die
                        Internetseiten der Tierärztekammer Hamburg zugänglich.
                        Der direkte Link lautet:{" "}
                        <a
                            className='site-links'
                            href='http://www.tieraerzte-hamburg.de'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            www.tieraerzte-hamburg.de
                        </a>
                    </p>{" "}
                    <br />
                </div>
                <div className='einrückImpr'>
                    <h3 className='cards_title'>USt-IdNr.:</h3>
                    <p className='paraImpr'>DE194731486</p> <br />
                </div>
                <div className='einrückImpr'>
                    <h3 className='cards_title'>Berufshaftpflicht:</h3>
                    <p className='paraImpr'>Allianz Versicherungs AG</p>
                    <p className='paraImpr'>
                        Versicherungsnehmer: Volker R. Gerlitzki
                    </p>
                    <p className='paraImpr'>
                        Räumlicher Geltungsbereich: Deutschland
                    </p>
                </div>
            </div>{" "}
        </>
    );
};

export default Impressum;
