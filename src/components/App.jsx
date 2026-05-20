/**
 * Main application component for the Hogwild app.
 *
 * Responsibilities:
 * - Stores global hog state
 * - Handles filtering and sorting
 * - Adds/removes hogs
 * - Renders form and hog cards
 */

import React, { useState } from "react";
import Nav from "./Nav";

import hogData from "../porkers_data";
import HogCard from "./HogCard"
import HogForm from "./HogForm"


function App() {
	// Stores all currently displayed hogs
	const [hogs, setHogs] = useState(hogData);

	// Controls whether only greased hogs are shown
	const [greasedOnly, setGreasedOnly] = useState(false);

	const [sortBy, setSortBy] = useState("none")

	/**
	 * Removes a hog from the displayed hog list.
	 * @param {string} hogName - Name of hog to hide
	 */
	function handleHideHog(hogName) {
		const updatedHogs = hogs.filter(hog => hog.name !== hogName);
		setHogs(updatedHogs);
	};

	function handleHogSubmit(newHog) {
		const mergedHogs = [...hogs, newHog]
		setHogs(mergedHogs);
	}

	// Apply greased filter before sorting hogs
	let displayedHogs = greasedOnly ? hogs.filter(hog => hog.greased) : hogs
	if (sortBy === "name") { displayedHogs = [...displayedHogs].sort((a, b) => a.name.localeCompare(b.name)) }
	if (sortBy === "weight") { displayedHogs = [...displayedHogs].sort((a, b) => a.weight - b.weight) }

	return (
		<div className="App">
			<Nav />
			<label htmlFor="greased-filter">Greased Pigs Only?</label>
			<input id="greased-filter"
				type="checkbox"
				checked={greasedOnly}
				onChange={(e) => setGreasedOnly(e.target.checked)}
			/>

			<HogForm onAddHog={handleHogSubmit} />

			<label htmlFor="sort-select">Sort by:</label>
			<select
				id="sort-select"
				value={sortBy}
				onChange={(e) => setSortBy(e.target.value)}>

				<option value="none">None</option>
				<option value="name">Name</option>
				<option value="weight">Weight</option>

			</select>

			{displayedHogs.map(hog => (
				<HogCard key={hog.name} hog={hog} onHideHog={handleHideHog} />
			))}
		</div>

	);
};


export default App;