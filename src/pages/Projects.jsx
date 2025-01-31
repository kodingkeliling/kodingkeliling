import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import { useEffect } from 'react';

const Projects = () => {
	useEffect(() => {
        document.title = "Koding Keliling | Projek";
    }, []);
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
