// import { homeContent } from '../mock/pages'

// export default function Home() {
//   return (
//     <section>
//       <div className="flex flex-col items-center justify-center">

//       <h1 className="text-3xl font-semibold mb-2">{homeContent.title}</h1>
//       <p className="text-gray-700">{homeContent.intro}</p>
//       </div>
//     </section>
//   )
// }


import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Users, BookOpen, Star, ArrowRight, Play, Award, Target, Lightbulb } from 'lucide-react';

// Import static data
import { 
  homeContent, 
  products, 
  projects, 
  courses, 
  stats, 
  navigationTabs, 
  companyInfo 
} from '../../mock/homeData';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Code,
  Target, 
  Lightbulb,
  Award,
  Users,
  BookOpen,
  Star
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('products');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-300 rounded-full animate-ping delay-700"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-orange-500/30 rounded-lg transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 border border-orange-400/20 rounded-lg transform -rotate-6"></div>

        <div className={`text-center z-10 px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 text-sm font-medium">🚀 Welcome to Our Story</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
            About Us
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl">
            At <span className="text-orange-500 font-semibold">{companyInfo.name}</span>, we harness technology to create intuitive and
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl">
            powerful solutions. Our team of dedicated <span className="text-orange-500">developers</span> and
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl">
            <span className="text-orange-500">designers</span> bring ideas to life, enhancing user experiences and driving growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25">
              Explore Our Work
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Learning
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            {navigationTabs.map(({ key, label, icon }) => {
              const IconComponent = iconMap[icon as keyof typeof iconMap];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'text-gray-400 hover:text-orange-500 hover:bg-gray-900'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-semibold">{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Active Tab */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          {activeTab === 'products' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Our <span className="text-orange-500">Products</span></h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Cutting-edge solutions designed to accelerate your business growth
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {products.map((product) => {
                  const IconComponent = iconMap[product.icon as keyof typeof iconMap];
                  return (
                    <div key={product.id} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                      <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-orange-500">{product.name}</h3>
                      <p className="text-gray-400 mb-6">{product.description}</p>
                      <button className="flex items-center text-orange-500 hover:text-orange-400 font-semibold transition-colors">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Featured <span className="text-orange-500">Projects</span></h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Showcasing our latest work and successful client collaborations
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <div key={project.id} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <Play className="w-16 h-16 text-orange-500/50" />
                    </div>
                    <div className="p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'In Progress' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-orange-500">{project.title}</h3>
                      <p className="text-gray-400 mb-4">Client: {project.client}</p>
                      <button className="flex items-center text-orange-500 hover:text-orange-400 font-semibold transition-colors">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'learning' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Learning <span className="text-orange-500">Hub</span></h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Empower your skills with our comprehensive training programs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {courses.map((course) => (
                  <div key={course.id} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-orange-500">{course.title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-gray-400 text-sm">{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <span>{course.students} students</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                        Enroll Now
                      </button>
                      <button className="text-orange-500 hover:text-orange-400 font-semibold transition-colors">
                        Preview
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Ideas?</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients and students who have achieved success with our solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start a Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Browse Courses
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JT</span>
                </div>
                <span className="text-xl font-bold text-orange-500">{companyInfo.name}</span>
              </div>
              <p className="text-gray-400">
                {companyInfo.tagline}
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {companyInfo.services.map((service, index) => (
                  <li key={index}><a href="#" className="hover:text-orange-500 transition-colors">{service}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Learning</h4>
              <ul className="space-y-2 text-gray-400">
                {companyInfo.learningOptions.map((option, index) => (
                  <li key={index}><a href="#" className="hover:text-orange-500 transition-colors">{option}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                {companyInfo.connectLinks.map((link, index) => (
                  <li key={index}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {companyInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}