export default function Skills() {
  const technicalSkills = [
    'JavaScript',
    'ES6 Features',
    'ReactJS',
    'HTML5',
    'CSS',
    'RESTful APIs',
    'Web Components',
    'Redux',
    'TypeScript'
  ];

  const tools = [
    'Git',
    'ECharts',
    'Formik',
    'RTK Query'
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Malayalam', level: 'Native' },
    { name: 'Tamil', level: 'Beginner' },
    { name: 'Hindi', level: 'Beginner' }
  ];

  const contactInfo = [
    { type: 'Location', value: 'Kochi, Kerala, India' },
    { type: 'Phone', value: '+91-9746840914' },
    { type: 'Email', value: 'meeramjmeera@gmail.com' }
  ];

  return (
    <main className="min-h-screen pt-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">My Skills & Expertise</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div className="bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-purple-300">Contact Information</h2>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="font-medium text-gray-300 w-24">{item.type}:</span>
                <span className="text-gray-200">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-gray-800/50 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-purple-300">Languages</h2>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-200">{lang.name}</span>
                  <span className="text-sm text-gray-400">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-purple-500 h-2.5 rounded-full" 
                    style={{ 
                      width: lang.level === 'Fluent' || lang.level === 'Native' ? '90%' : 
                             lang.level === 'Beginner' ? '40%' : '60%' 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="bg-gray-800/50 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-purple-300">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {technicalSkills.map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-sm font-medium text-purple-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="bg-gray-800/50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6 text-purple-300">Tools & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-full text-sm font-medium text-blue-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
