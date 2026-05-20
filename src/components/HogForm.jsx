import React, { useState } from "react"

function HogForm({ onAddHog }) {
    const [name, setName] = useState("");
    const [greased, setGreased] = useState(false);
    const [specialty, setSpecialty] = useState("");
    const [weight, setWeight] = useState("");
    const [medal, setMedal] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newHog = {
            Name: name,
            Specialty: specialty,
            greased: greased,
            weight: Number(weight),
            "highest medal achieved": medal,
            image: image
        }

        onAddHog(newHog)
        setName("")
        setSpecialty("")
        setWeight("")
        setMedal("")
        setImage("")
        setGreased(false)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="hog-name">Hog name:</label>
                <input
                    id="hog-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="hog-greased">Is greased?:</label>
                <input
                    id="hog-greased"
                    type="checkbox"
                    checked={greased}
                    onChange={(e) => setGreased(e.target.checked)}
                />

                <label htmlFor="hog-specialty">Hog specialty:</label>
                <input
                    id="hog-specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}

                />

                <label htmlFor="hog-weight">Hog weight</label>
                <input
                    id="hog-weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}

                />

                <label htmlFor="hog-medal">Hog medal</label>
                <input
                    id="hog-medal"
                    value={medal}
                    onChange={(e) => setMedal(e.target.value)}

                />

                <label htmlFor="hog-image">Hog image</label>
                <input
                    id="hog-image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}

                />
            </div>
            <div>
                <button type="submit">Add new hog</button>
            </div>
        </form>
    )
}

export default HogForm;