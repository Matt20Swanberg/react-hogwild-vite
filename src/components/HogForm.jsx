/**
 * Form component for creating new hogs.
 *
 * Responsibilities:
 * - Manages controlled form inputs
 * - Builds new hog object
 * - Sends new hog to parent App component
 */

import React, { useState } from "react"

function HogForm({ onAddHog }) {
    const [name, setName] = useState("");
    const [greased, setGreased] = useState(false);
    const [specialty, setSpecialty] = useState("");
    const [weight, setWeight] = useState("");
    const [medal, setMedal] = useState("");
    const [image, setImage] = useState("");

    /**
     * Creates a new hog object from form state
     * and sends it to the parent App component.
     */
    function handleSubmit(e) {
        e.preventDefault();

        const newHog = {
            name: name,
            specialty: specialty,
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
                <label htmlFor="hog-name">Name:</label>
                <input
                    id="hog-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="hog-greased">Greased?</label>
                <input
                    id="hog-greased"
                    type="checkbox"
                    checked={greased}
                    onChange={(e) => setGreased(e.target.checked)}
                />

                <label htmlFor="hog-specialty">Specialty:</label>
                <input
                    id="hog-specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}

                />

                <label htmlFor="hog-weight">Weight:</label>
                <input
                    id="hog-weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}

                />

                <label htmlFor="hog-medal">Hog medal:</label>
                <input
                    id="hog-medal"
                    value={medal}
                    onChange={(e) => setMedal(e.target.value)}

                />

                <label htmlFor="hog-image">Hog image:</label>
                <input
                    id="hog-image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}

                />
            </div>
            <div>
                <button type="submit">Add Hog</button>
            </div>
        </form>
    )
}

export default HogForm;