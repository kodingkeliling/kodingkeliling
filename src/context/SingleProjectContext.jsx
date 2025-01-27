import { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';
import { useParams } from 'react-router-dom';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const { slug } = useParams();
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson.filter(project => project.slug === slug)?.[0]
	);

	if(singleProjectData.length === 0){
		return null; 
	}

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
