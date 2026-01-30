import React from 'react';

const achievements = [
  {
    title: "The Super Squad",
    type: "Spot Awards - Team Award",
    company: "ThoughtMinds",
    description: "Awarded for outstanding teamwork and collaboration in delivering exceptional results.",
    date: "2025"
  },
  {
    title: "Rock Star Techie",
    type: "3rd Quarterly Awards 2025",
    company: "ThoughtMinds",
    description: "Recognized for technical excellence and innovative problem-solving skills.",
    date: "Q3 2025"
  },
  {
    title: "Thanks a Zillion",
    type: "4th Quarterly Awards 2025",
    company: "ThoughtMinds",
    description: "Awarded for going above and beyond in contributing to team success and supporting colleagues.",
    date: "Q4 2025"
  }
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          My Achievements
        </h1>
        
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-purple-300">{achievement.title}</h2>
                  <p className="text-purple-100 text-lg">{achievement.type}</p>
                  <p className="text-purple-50 text-sm opacity-80">{achievement.company}</p>
                </div>
                <span className="px-4 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                  {achievement.date}
                </span>
              </div>
              <p className="mt-4 text-gray-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
