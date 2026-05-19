import React, { useState } from "react";
import Nav from "./Nav";

import hogData from "../porkers_data";
import HogCard from "./HogCard"

function App() {
	const [hogs, setHogs] = useState(hogData)
	return (
		<div className="App">
			<Nav />
			{hogs.map(hog => (
				<HogCard key={hog.name} hog={hog} />
			))}
		</div>

	);
}


export default App;
