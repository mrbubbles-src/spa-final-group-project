import { useState } from "react";

const KontaktForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const names = target.name;
        setFormState({ ...formState, [names]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(
            `Name: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`
        );

        try {
            const response = await fetch("https://reqres.in/api/users", {
                method: "POST",
                body: JSON.stringify(formState),
                headers: { "Content-type": "application/json" },
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }

        setFormState({ name: "", email: "", message: "" });
    };

    return (
        <form className="cards" onSubmit={handleSubmit}>
            <h2 className="cards_title">Kontaktieren Sie uns!</h2>
            <label className="cards_title" htmlFor="name">
                Name:{" "}
            </label>{" "}
            <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Vollständiger Name"
            />
            <label className="cards_title" htmlFor="email">
                Email:{" "}
            </label>
            <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="E-Mail Adresse"
            />
            <label className="cards_title" htmlFor="message">
                {" "}
                Ihre Nachricht:{" "}
            </label>
            <textarea
                name="message"
                id="message"
                onChange={handleChange}
                value={formState.message}
                placeholder="Ihre Nachricht an uns"
                required
            ></textarea>
            <input id="submit" type="submit" value="Senden" />
        </form>
    );
};

export default KontaktForm;
