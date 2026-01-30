import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen pt-20 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
        
        <div className="bg-gray-800/50 rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Photo */}
            <div className="md:w-1/3 relative h-80 md:h-auto">
              <Image
                src="/assets/meera-1.JPG"
                alt="Meera Xavier - Frontend Developer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            
            {/* Right Column - Content */}
            <div className="p-8 md:w-2/3">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-purple-300 mb-4">Hello, I&apos;m Meera Xavier</h2>
                <p className="text-gray-300 mb-4">
                  I&apos;m a passionate Frontend Developer with expertise in React, TypeScript, and modern web technologies. 
                  With a strong foundation in computer science and 4+ years of hands-on experience, I specialize in creating responsive, 
                  high-performance web applications that deliver exceptional user experiences.
                </p>
                <p className="text-gray-300">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or enjoying outdoor activities. I&apos;m always eager to take on new challenges and collaborate on innovative projects.
                </p>
              </div>
              
              {/* Second Photo - Smaller and to the side */}
              <div className="mt-8 flex justify-center md:justify-end">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/30">
                  <Image
                    src="/assets/meera-2.JPG"
                    alt="Meera Xavier - Professional"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills Preview */}
          <div className="bg-gray-900/50 p-6 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-purple-300 mb-4">Technical Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux', 'REST APIs', 'HTML5', 'CSS3', 'Git'].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-200 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-purple-300">Integrated Master in Computer Application (INMCA)</h3>
              <p className="text-xl text-gray-200">APJ Abdul Kalam Technological University</p>
            </div>
            <span className="bg-purple-500/10 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
              Jun 2016 - Jun 2021
            </span>
          </div>
          <div className="mt-4">
            <p className="text-gray-300">
              <span className="font-medium text-gray-200">Specialization:</span> Computer Application
            </p>
            <p className="text-gray-300 mt-2">
              Gained comprehensive knowledge in software development, algorithms, database management, and web technologies, 
              laying a strong foundation for my career in software engineering.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
