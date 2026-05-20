import React, { useState } from "react";
import Nav from "./Nav";

import hogData from "../porkers_data";
import HogCard from "./HogCard"


function App() {
	const [hogs, setHogs] = useState(hogData);
	const [greasedOnly, setGreasedOnly] = useState(false);

	function handleHideHog(hogName) {
		const updatedHogs = hogs.filter(hog => hog.name !== hogName);
		setHogs(updatedHogs);
	};


	const displayedHogs = greasedOnly ? hogs.filter(hog => hog.greased) : hogs;

	return (
		<div className="App">
			<Nav />
			<label htmlFor="greased-filter">Show only greased hogs</label>
			<input id="greased-filter"
				type="checkbox"
				checked={greasedOnly}
				onChange={(e) => setGreasedOnly(e.target.checked)}
			/>

			{displayedHogs.map(hog => (
				<HogCard key={hog.name} hog={hog} onHideHog={handleHideHog} />
			))}
		</div>

	);
};


export default App;