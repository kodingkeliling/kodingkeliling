import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
        document.title = "Koding Keliling | Home";
    }, []);
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projek"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-secondBlue-light hover:bg-thirdBlue-light dark:bg-firstBlue-light focus:ring-1 focus:bg-thirdBlue-light text-white text-lg sm:text-xl duration-300"
					aria-label="Selengkapnya"
				>
					<Button title="Selengkapnya" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
