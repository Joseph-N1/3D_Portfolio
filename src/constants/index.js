import { meta, shopify, starbucks, tesla } from "../assets_3d_portfolio/assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    motion,
    nextjs,
    python,
    nodejs,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    mimo,
    contra,
    Bright
} from "../assets_3d_portfolio/assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Fullstack",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Developer of Chatbot2.0(F1)",
        company_name: "GitHub (Personal Project)",
        icon: github, 
        iconBg: "#333",
        date: "March 2023 - Present",
        points: [
            "Developed an interactive chatbot designed to provide information about Formula 1 races, drivers, and statistics from the years 2020 to 2024.",
            "Fetched and processed data from relevant APIs, saving historical F1 data locally in JSON format.",
            "Implemented data transformation scripts to restructure raw JSON data files, creating a centralized knowledge base for the chatbot.",
            "Utilized Python libraries such as Spacy for natural language processing and JSON for data handling to manage and query the knowledge base.",
            "Created a dynamic learning system where the chatbot updates its knowledge base from past queries and includes new data as it becomes available.",
            "Designed and maintained an interactive chat interface to handle various user intents, providing relevant F1 data upon request.",
            "Planned future development including front-end integration and expansion of data sources and temporal coverage.",
        ],
    },
    {
        title: "IEUK 2024: Technology",
        company_name: "Bright Network",
        icon: Bright, 
        iconBg: "#333",
        date: "June 17th - June 20th",
        points: [
            "Participated in the four-day virtual internship hosted by Bright Network and sponsored by multiple companies in the tech industry such as PWC, BA, BT Group, Clyde & Co., and more.",
            "Attended presentations by members of various companies discussing their current roles and covering their career journeys so far.",
            "Interviewed a couple of the speakers on positive changes in the tech space and other industries and how their companies are either participating in or advancing the cause for a more sustainable working environment.",
            "Had discussions about different tech stacks used in companies such as Lloyds Bank, PWC, British Airways, and the rate at which the apps and languages change in their ever-growing industries.",
            "Executed a BT Group project which involved creating a presentation for a six-month project to increase sales for a fitness app that had been losing customers and paid subscribers over the last year as the incoming product manager.",
            "Learned new networking tips and improved my presentation and communication skills.",
            "Received insight on front-end and full-stack software engineering from experts in the field."
        ]
    },    
    {
        title: "Developer of Slot Machine Project",
        company_name: "Mimo App",
        icon: mimo,
        iconBg: "#FFCC00",
        date: "February 2023 - March 2023",
        points: [
            "Developed a slot machine simulation project as part of my Python learning journey on the Mimo app.",
            "Created a simple command-line interface to simulate slot machine spins with randomized outcomes and a reward system.",
            "Utilized foundational Python concepts such as loops, functions, conditional statements, lists, dictionaries, user input handling, and random number generation.",
            "Implemented loops to manage repeated execution of code blocks and to ensure accurate slot machine spins.",
            "Refactored the get_slot_machine_spin function to correctly handle column and row value assignments, improving the reliability of the slot machine outcomes.",
            "Enhanced the check_winnings function to accurately calculate and report winnings by simplifying the logic and improving the loop structure.",
            "Planned future development to include a graphical user interface (GUI) using Tkinter or a web-based interface to enhance user interaction and visual appeal.",
            "Aimed to expand game features to include saving high scores, supporting multiple users, and incorporating advanced betting systems.",
        ],
    },
    {
        title: "Developer of Skillet Toggle Switch Animation Project",
        company_name: "Contra",
        icon: contra,
        iconBg: "#FFA07A",
        date: "January 2024 - February 2024",
        points: [
            "Developed a unique skillet toggle switch animation project using HTML, CSS, and JavaScript to enhance online interfaces with engaging animations.",
            "Set up the fundamental structure of the project with three crucial files: `index.html` for content organization, `index.css` for styling, and `index.js` for interactivity.",
            "Ensured the HTML structure was well-formatted, accessible, and ready for styling and scripting.",
            "Utilized modern CSS techniques, including flexbox for layout and keyframe animations for dynamic effects, to create a visually appealing and responsive design.",
            "Added interactivity to the toggle switch using JavaScript to respond to user inputs, providing dynamic feedback and enhancing the user experience.",
            "Improved the visual appeal by centering the animation on the web page using CSS flexbox properties.",
            "Implemented custom animations to mimic the behavior of a skillet toggle switch, combining CSS styles and JavaScript for interaction.",
            "Planned future customization to add client-specific designs and integrate the components into larger projects.",
        ],
    },
    {
        title: "Full Stack Developer ",
        company_name: "Contra",
        icon: contra, 
        iconBg: "#98FB98",
        date: "March 2024 - April 2024",
        points: [
            "Developed a Python-based chatbot to assist users in planning holiday packages, enhancing my understanding of Python through practical application.",
            "Created an interactive text-based chatbot interface that provides custom holiday package suggestions based on user preferences.",
            "Integrated pandas for efficient data handling, utilizing DataFrames to manage user inputs for holiday planning.",
            "Employed foundational Python concepts such as lists, functions, while loops, if/else statements, and break statements to build the chatbot.",
            "Organized code into reusable blocks, including functions like `Holiday_package` to encapsulate complex logic for user sessions and vacation planning.",
            "Implemented decision structures to guide chatbot responses and ensure accurate handling of user inputs.",
            "Enhanced input validation for dates and user responses, using functions and conditionals to improve data integrity and user friendliness.",
            "Improved the user experience by adding clearer prompts and validation checks for inputs.",
            "Planned future enhancements, including developing a graphical user interface (GUI) using Tkinter or web-based technologies to make the interaction more user-friendly and visually appealing.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'http://github.com/JosephNimyel',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'http://www.linkedin.com/in/joseph-nimyel',
    }
];

export const projects = [
    {
        iconUrl: 'Buttons(Light up)',  
        theme: 'btn-back-blue',  
        name: 'Front-end Animation - Glowing Buttons',
        description: 'Created an interactive front-end animation project featuring glowing buttons using HTML, CSS, and JavaScript to enhance user engagement and visual appeal.',
        link: 'https://github.com/Joseph-N1/Front-end-Animations',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Self-Learning Chatbot',
        description: 'This project implements a self-learning chatbot using Python. It is designed to improve its knowledge over time by interacting with users and storing new information in a JSON-based knowledge base.',
        link: 'https://github.com/Joseph-N1/Chat_Bot/tree/main/Chatbot', 
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'UI WORLD',
        description: 'Created and designed multiple UI elements that can be used in other projects by ensuring the source code is opensourse, highly customizable , and adding features such as light mode and dark mode to most desgins.',
        link: 'https://github.com/Joseph-N1/UI-WORLD',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'NBA Neural Network',
        description: 'Built a simple neural network using python, where the inputs can be obtained using player stats per the last 10 games, the weights are based on the odds given by different betting sites approximately 6 hours before start of game, and the bias changes as needed to produce a predictive output .',
        link: 'https://github.com/Joseph-N1/Python-Kaizen',
    },  
];
