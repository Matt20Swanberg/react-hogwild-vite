/**
 * Displays an individual hog card.
 *
 * Responsibilities:
 * - Shows hog image/name
 * - Toggles additional hog details
 * - Allows user to hide a hog
 */

import React, { useState } from "react"

function HogCard({ hog, onHideHog }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            aria-label="hog card"
            className="ui card"
            onClick={() => setShowDetails(!showDetails)}

        >
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={"Photo of " + hog.name} />
            <button onClick={(e) => {
                e.stopPropagation()
                onHideHog(hog.name)
            }}>
                Hide Me
            </button>
            {showDetails && (
                <div>
                    <p>{`Specialty: ${hog.specialty}`}</p>
                    <p>{hog.greased ? "Greased" : "Nongreased"}</p>
                    <p>{hog.weight}</p>
                    <p>{hog["highest medal achieved"]}</p>
                </div>

            )}
        </div>
    )
}

export default HogCard;