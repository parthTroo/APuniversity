import Campus from "./components/Campus";
import Courses from "./components/Courses";
import Facility from "./components/Facility";
import { Homepage } from "./components/Homepage";
import Testimonials from "./components/Testimonials";

function App() {
	return (
		<>
			<Homepage />
			<Courses />
			<Campus />
			<Facility />
			<Testimonials />
		</>
	);
}

export default App;
