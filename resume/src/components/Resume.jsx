import Header from './Header.jsx';
import Section from './Section.jsx';
import './Resume.css';

export default function Resume() {
    const personalInfo = {
        name: 'RaphaMX',
        title: 'Game Developer',
        contact: {
            email: 'raphagamerbrxz@gmail.com',
            phone: '+55 (15) 98136-6108',
        },
        image: 'https://i.pinimg.com/originals/b3/3b/7f/b33b7f791ed9914a1074841c1c159faf.jpg'
    }

    const objective = "My objective is to develop engaging and cutting-edge gaming experiences through the application of my expertise in programming and design, resulting in the creation of premium titles that exceed player expectations."

    const education = [
        {
            instituition: 'ETEC Sales Gomes',
            degree: 'Systems Development Technic',
            period: '2023 - 2025'
        },
        {
            instituition: 'FATEC Tatuí',
            degree: 'Systems Development and Analysis',
            period: '2025 - 2027'
        },
        {
            instituition: 'New York University',
            degree: 'Game Design',
            period: '2027 - 2031'
        },
        {
            instituition: 'USP',
            degree: 'Physics',
            period: '2031 - 2035'
        },
    ]

    const courses = [
        {
            instituition: 'MK Academy',
            degree: '2D Game Development',
            period: '2021 - 2023'
        },
        {
            instituition: 'FISK',
            degree: 'English',
            period: '2021 - 2024'
        },
        {
            instituition: 'Udemy',
            degree: '2D with Unity + C#',
            period: '2024-2025'
        },
    ]

    const projects = [
        {
            title: 'Soulsborne Demake',
            description: 'The project aims to develop a series of games inspired by the Soulsborne franchise using GameMaker Studio. The objective is to capture the essence of the original games, adapting their challenging mechanics and unique atmosphere to a retro style. This approach will allow the games to be perceived as if they had been released for classic consoles, providing players with a nostalgic experience combined with the complexity and depth of modern games.',
            year: '2021 - Ongoing',
            instituition: 'Indie Project'
        },
        {
            title: 'Soulspedia',
            description: 'The development of a C# application that serves as a comprehensive repository of information on all the games in the Soulsborne franchise. What sets Soulspedia apart from traditional wikis is its offline functionality, allowing users to access detailed data even without an internet connection. Additionally, the application has dedicated channels for interaction between players, fostering an active and engaged community.',
            year: '2023 - Ongoing',
            instituition: 'Indie Project'
        },
        {
            title: 'EPA',
            description: 'The game, developed in GameMaker Studio, delves into the evolution of video game generations. It comprises a series of minigames, each representing a distinct era in the history of electronic games. The gameplay encapsulates the distinctive characteristics and styles of each generation, offering players a nostalgic and educational journey through time, from the earliest days of gaming to the most contemporary titles.',
            year: '2024',
            instituition: 'ETEC Sales Gomes'
        },
    ]

    const skills = ['GameMaker Studio', 'Unity', 'Construct3', 'Blender', 'Pixel Art', 'JavaScript', 'C++ & C#', 'Python', 'English C1']

    return (
        <div className="resume">
            <Header
            name={personalInfo.name}
            title={personalInfo.title}
            contact={personalInfo.contact}
            image={personalInfo.image}
            />

            <Section title="Objective">
                <div className="objective">
                    <p>{objective}</p>
                </div>
            </Section>

            <Section title="Education">
                {education.map((item, index) => (
                    <div key={index} className="education-item">
                        <h4>{item.period} | {item.instituition}</h4>
                        <span>{item.degree}</span>
                    </div>
                ))}
            </Section>

            <Section title="Courses">
                {courses.map((item, index) => (
                    <div key={index} className="course-item">
                        <h4>{item.period} | {item.instituition}</h4>
                        <span>{item.degree}</span>
                    </div>
                ))}
            </Section>

            <Section title="Projects">
                {projects.map((item, index) => (
                    <div key={index} className="project-item">
                        <h4>{item.year} | {item.instituition}</h4>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                    </div>
                ))}
            </Section>

            <Section title="Skills">
                <ul className="skills">
                    {skills.map((skill, index) => (
                        <li key={index} className="skill-item">{skill}</li>
                    ))}
                </ul>
            </Section>
        </div>
    )
}