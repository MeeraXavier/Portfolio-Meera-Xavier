import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'ClearlyRated – Customer Analytics Dashboard',
      date: 'Feb 2025 - Ongoing',
      description: 'A responsive, data-driven dashboard for tracking customer satisfaction metrics and analytics.',
      achievements: [
        'Developed interactive UI components for real-time analytics',
        'Integrated REST APIs with React Query for faster, cached data loading',
        'Improved dashboard responsiveness by 25% through performance optimization',
        'Ensured code quality and maintainability using SonarQube and unit testing',
        'Collaborated with design and backend teams in an Agile environment'
      ],
      technologies: ['React', 'TypeScript', 'React Query', 'ECharts', 'SCSS', 'SonarQube', 'Jest', 'RTL', 'Agile (JIRA)'],
      link: '#',
      github: '#'
    },
    {
      title: 'FinApp - Financial Management Web Application',
      date: 'Feb 2024 - Ongoing',
      description: 'A comprehensive web application for tracking financial activities including sales, profit/loss analysis, resource allocation, and invoice generation.',
      achievements: [
        'Developed tools for financial tracking and analysis',
        'Created an efficient invoice generation system',
        'Implemented resource allocation features'
      ],
      technologies: ['React', 'TypeScript', 'Git', 'RESTful API', 'Formik', 'RTK Query'],
      link: '#',
      github: '#'
    },
    {
      title: 'Visitors Management System',
      date: 'Aug 2024',
      description: 'A visitor management system with barcode generation for event access in organizations.',
      achievements: [
        'Developed a user-friendly interface for visitor check-in',
        'Implemented barcode generation with event details',
        'Streamlined the check-in process for events'
      ],
      technologies: ['React', 'TypeScript', 'HTML5', 'CSS'],
      link: '#',
      github: '#'
    },
    {
      title: 'CartGPT',
      date: 'Dec 2023 - Jan 2024',
      description: 'A medical equipment marketing platform with AI-powered chatbot and voice interaction capabilities.',
      achievements: [
        'Designed and implemented the user interface',
        'Integrated Open AI for chatbot functionality',
        'Added speech-to-text and text-to-speech features'
      ],
      technologies: ['React', 'TypeScript', 'HTML5', 'CSS', 'Open AI'],
      link: '#',
      github: '#'
    },
    {
      title: 'DiabBot - Diabetes Monitoring Application',
      date: 'Nov 2023',
      description: 'A web application UI for the registration page of a diabetes monitoring mobile application.',
      achievements: [
        'Created an intuitive registration interface',
        'Ensured responsive design for various devices',
        'Implemented form validation and user feedback'
      ],
      technologies: ['ReactJS', 'Formik', 'HTML', 'CSS', 'RESTful APIs'],
      link: '#',
      github: '#'
    },
    {
      title: 'CareHQ - Patient Monitoring System',
      date: 'June 2022 - Sep 2023',
      description: 'A 24/7 patient vitals monitoring home-care system with real-time data visualization.',
      achievements: [
        'Developed real-time vitals monitoring interface',
        'Integrated with BLE devices for data collection',
        'Created data visualization for various health metrics'
      ],
      technologies: ['ReactJS', 'HTML', 'CSS', 'Formik', 'RESTful APIs', 'WebSocket', 'Redux'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <main className="min-h-screen pt-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-bold text-purple-300">{project.title}</h2>
                <p className="text-gray-400 text-sm mt-1">{project.date}</p>
              </div>
              <div className="flex gap-3">
                {project.link !== '#' && (
                  <Link 
                    href={project.link} 
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Link>
                )}
                {project.github !== '#' && (
                  <Link 
                    href={project.github} 
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors border border-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
            
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Key Achievements:</h3>
                <ul className="space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="pt-4 border-t border-gray-700">
              <h3 className="text-sm font-medium text-gray-400 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs rounded-full border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
