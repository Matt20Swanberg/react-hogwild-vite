import React, { useState } from "react";
import Nav from "./Nav";

import hogData from "../porkers_data";
import HogCard from "./HogCard"
import HogForm from "./HogForm"


function App() {
	const [hogs, setHogs] = useState(hogData);
	const [greasedOnly, setGreasedOnly] = useState(false);
	const [sortBy, setSortBy] = useState("none")

	function handleHideHog(hogName) {
		const updatedHogs = hogs.filter(hog => hog.name !== hogName);
		setHogs(updatedHogs);
	};

	function handleHogSubmit(newHog) {
		const mergedHogs = [...hogs, newHog]
		setHogs(mergedHogs);
	}

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