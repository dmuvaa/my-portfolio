import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import SEImg from '../images/SE.jpg';

const projects = [
    {
        id: uuidv4(),
        name: 'PataDoc',
        description: 'An application that enables patients to connect with doctors from different regions',
        img: UTrackerImg,
    },
    {
        id: uuidv4(),
        name: 'TakaSmart',
        description: 'A smart waste management system that reduces landfills that cause a lot of carbon emissions',
        img: GreenCtgImg,
    },
    {
        id: uuidv4(),
        name: 'AfricaExplore',
        description: 'A tourist application for Africa to promote tourism in Africa',
        img: CoinTrackerImg,
    },
    {
        id: uuidv4(),
        name: 'Simple Shell',
        description: 'An application that provides a command prompt for to interact with the unix operating system',
        img: SEImg,
    },
    {
        id: uuidv4(),
        name: 'Printf',
        description: 'This is a project that emulates the printf command of the C programming language',
        img: SEImg,
    },
]

export default projects;