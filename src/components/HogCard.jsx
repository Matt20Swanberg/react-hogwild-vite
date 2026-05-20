import React, { useState } from "react"

function HogCard({ hog, onHideHog }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            aria-label="hog card"
            onClick={() => setShowDetails(!showDetails)}

        >
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} />
            {showDetails && (
                <div>
                    <p>{hog.specialty}</p>
                    <p>{hog.greased}</p>
                    <p>{hog.weight}</p>
                    <p>{hog["highest medal achieved"]}</p>
                    <button onClick={(e) => {
                        e.stopPropagation()
                        onHideHog(hog.name)
                    }}>
                        Hide Me
                    </button>
                </div>

            )}
        </div>
    )
}

export default HogCard;