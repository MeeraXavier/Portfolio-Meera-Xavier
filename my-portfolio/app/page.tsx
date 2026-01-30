import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Meera <span className="text-purple-400">Xavier</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-300">
              Frontend Developer
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 text-gray-300 mb-8">
              <a href="mailto:meeramjmeera@gmail.com" className="hover:text-purple-300 transition-colors">
                meeramjmeera@gmail.com
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/meera-xavier-42b66b1b2/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                linkedin.com/meera-xavier
              </a>
              <span>•</span>
              <a href="https://github.com/MeeraXavier" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
                github.com/MeeraXavier
              </a>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              Frontend Developer with 4+ years of experience building fast, scalable, and user-friendly web applications using React, TypeScript, and modern frontend tools. 
              Proven ability to develop responsive UIs, optimize performance, and collaborate across product, design, and backend teams. 
              Adept at translating complex business requirements into elegant technical solutions.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">Let&apos;s Build Something Amazing</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/projects"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                View My Work
              </Link>
              <Link 
                href="/contact"
                className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-900/30 font-medium py-3 px-8 rounded-lg transition duration-300 hover:scale-105"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
