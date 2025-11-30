import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'
import { FaGalacticSenate } from 'react-icons/fa6'

function Projects() {
  // Structure: title, description, tech (array), github (url), demo (url, optional), wip (boolean, optional)
  const projects = [
      {
      title: 'Weather Appropriate Clothing Recommender',
      description: 'A tool that recommends clothing based on current weather conditions to help users dress appropriately. Utilizes weather APIs to fetch real-time data and provides suggestions tailored to temperature, precipitation, and wind conditions. Also has ability to take into account personal constraints, travel plans etc. during clothing suggestions.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'AI Agents', 'LLMs'],
      github: 'https://github.com/gauravkdesai/Family-Weather-Wardrobe',
      demo: 'https://weather-appropriate-wardrobe.gaurav-desai.com/',
      wip: false
    },
    {
      title: 'AgenticTravelPlanner',
      description: 'A complete agentic travel planner that uses multiple AI agents to create personalized itineraries with natural language input. Features interactive question flow, multi-agent system for flights/hotels/transport/events, day-by-day itinerary generation, and iterative refinement capabilities.',
      tech: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'AI Agents', 'LLMs'],
      github: 'https://github.com/gauravkdesai/AgenticTravelPlanner',
      demo: null,
      wip: true
    },
    {
      title: 'Kid-Friendly Memory Game',
      description: 'A colorful, engaging memory card matching game specifically designed for young children. Features 20 kid-friendly themed sets (vehicles, animals, dinosaurs, space, sports, superheroes), theme rotation system, bright animations, and adjustable difficulty levels.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/gauravkdesai/memory_game_for_kids',
      demo: 'https://gauravkdesai.github.io/memory_game_for_kids/',
      wip: false
    },
    {
      title: 'Medical Insurance Payment Assistant',
      description: 'An intelligent assistant that helps users navigate medical insurance payment processes. Built as part of MIDS W210 coursework, featuring natural language processing and automated decision-making capabilities.',
      tech: ['Python', 'Jupyter Notebook', 'Machine Learning', 'NLP'],
      github: 'https://github.com/gauravkdesai/MIDS-W210-Medical_Insurance_Payment_Assistant',
      demo: null,
      wip: false
    },
    {
      title: 'Fake News & Bias Detection with OOV',
      description: 'MIDS w266 final project to detect Out of Vocabulary words in fake news and bias detection. Implements advanced NLP techniques to identify misinformation and media bias using novel approaches for handling unknown vocabulary.',
      tech: ['Python', 'Jupyter Notebook', 'NLP', 'Deep Learning', 'Mimick Embeddings'],
      github: 'https://github.com/gauravkdesai/w266-final-project-OOV-fake-bias-detection',
      demo: null,
      wip: false
    },
    {
      title: 'COWIN API Wrapper',
      description: 'Python wrapper for India\'s COVID-19 vaccination appointment API. Includes real-time monitoring for available vaccine slots, district-wise search functionality, and automated notification system to help citizens find vaccination appointments.',
      tech: ['Python', 'REST API', 'Automation'],
      github: 'https://github.com/gauravkdesai/COWIN-API-WRAPPER',
      demo: null,
      wip: false
    },
    {
      title: 'TicTacToe with Machine Learning',
      description: 'Traditional TicTacToe game enhanced with machine learning capabilities. The AI learns to play the game using decision tree algorithms, improving its strategy through gameplay experience.',
      tech: ['Python', 'Machine Learning', 'Decision Trees', 'Game AI'],
      github: 'https://github.com/gauravkdesai/TicTacToeWithML',
      demo: null,
      wip: true
    },
    {
      title: 'SimpleJsonStore',
      description: 'Asynchronous servlet application to store and retrieve JSON messages from MongoDB. Demonstrates asynchronous request/response pipeline using blocking queue executors, async context handling, and MongoDB async drivers. Can be deployed on Jetty server.',
      tech: ['Java', 'MongoDB', 'Jetty', 'Async Servlets', 'REST API'],
      github: 'https://github.com/gauravkdesai/SimpleJsonStore',
      demo: null,
      wip: false
    },
    {
      title: 'Home Credit Default Risk Prediction',
      description: 'w207 Applied Machine Learning final group project analyzing home credit default risk. Implements various ML algorithms to predict loan default probability, helping financial institutions make better lending decisions.',
      tech: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis', 'scikit-learn'],
      github: 'https://github.com/gauravkdesai/w207-FinalProject-HomeCreditDefaultRisk',
      demo: null,
      wip: false
    },  
    {
      title: 'Olympic Gold Medal Analysis',
      description: 'Data visualization project analyzing Olympic Gold Medal patterns for w209 final project. Interactive visualizations explore historical trends, country performances, and athletic achievements across different Olympic games.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'D3.js', 'Data Visualization'],
      github: 'https://github.com/gauravkdesai/MIDS-w209-OlympicGoldMedalAnalysis',
      demo: null,
      wip: false
    }
  ]
  

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
        Portfolio of Personal Projects 
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.wip ? 'project-card-wip' : ''}`}>
              <div className="project-title-container">
                <h3 className="project-title">{project.title}</h3>
                {project.wip && (
                  <span className="wip-badge" title="Work in Progress">WIP</span>
                )}
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} demo`}
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

