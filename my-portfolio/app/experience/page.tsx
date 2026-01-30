export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Thoughtminds.ai | Kochi, India',
      duration: 'Feb 2025 - Present',
      responsibilities: [
        'Built and enhanced ClearlyRated dashboard UI using React, TypeScript, and React ECharts for real-time analytics',
        'Developed interactive data visualizations (charts, KPIs) improving client reporting speed by 30%',
        'Implemented API integration with React Query for faster, cached data loading',
        'Ensured code quality and maintainability using SonarQube and unit testing',
        'Collaborated with design & backend teams to deliver pixel-perfect, responsive layouts in an Agile environment'
      ],
      technologies: ['React', 'TypeScript', 'React ECharts', 'React Query', 'SonarQube', 'Agile']
    },
    {
      role: 'Software Engineer',
      company: 'Sinergia Media Labs (SIME LABS) | Kochi, India',
      duration: 'Oct 2021 - Feb 2025',
      responsibilities: [
        'Delivered 4+ production web apps with React & TypeScript, improving performance by 30% and user retention',
        'Migrated large codebase from JavaScript to TypeScript, reducing production bugs by 40%',
        'Implemented state management with Redux Toolkit & Zustand for real-time data updates',
        'Optimized page load speed to under 2 seconds with code-splitting and API caching',
        'Wrote unit tests (Jest, React Testing Library) to ensure stable feature delivery'
      ],
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Zustand', 'Jest', 'React Testing Library']
    }
  ];

  return (
    <main className="min-h-screen pt-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Work Experience</h1>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold text-purple-300">{exp.role}</h2>
                <h3 className="text-xl font-medium text-gray-200">{exp.company}</h3>
              </div>
              <span className="bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium">
                {exp.duration}
              </span>
            </div>
            
            <ul className="mt-6 space-y-3">
              {exp.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-gray-700/50 text-gray-200 text-sm rounded-full border border-gray-600"
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
