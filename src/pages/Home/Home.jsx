import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, ExternalLink, Calendar, Building2, Percent, Github } from 'lucide-react';
import { portfolioData } from '../../personaldetails';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TypewriterComponent from 'typewriter-effect';


const Home = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Message sent successfully!');
        setTimeout(() => setFormStatus(''), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <Navbar />

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="mb-6 animate-fade-in">
                        <span className="text-purple-600 text-sm font-medium tracking-wider uppercase">Welcome to my portfolio</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                        {portfolioData.personal.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-4">
                        {/* {portfolioData.personal.title} */}
                        <TypewriterComponent
                            options={{
                                strings: ['Frontend Developer', 'React js Developer' ,"HTML/CSS ,Javascript"," Tailwind CSS , Bootstrap, CSS Modules, Styled Components, Shadcn UI ","Redux Toolkit, RTK Query, React Query, React Hook Form, React Charts","Git, Firebase, REST APIs, Vercel, Netlify"],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                        {portfolioData.personal.objective}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-6 text-lg flex justify-center items-center"
                        >
                            View My Work <ArrowRight className="ml-2" size={20} />
                        </button>
                        <a href='/asset/indrajit_singha_resume.pdf'
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            variant="outline"
                            className="border-purple-600 text-purple-400  hover:text-white px-8 py-6 text-lg"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        About <span className="text-purple-600">Me</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-purple-600">Contact Information</h3>
                            {/* <p className="text-gray-300 mb-6 leading-relaxed">
                                {portfolioData.personal.objective}
                            </p> */}
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-300">
                                    <Mail className="mr-3 text-purple-600" size={20} />
                                    <span>{portfolioData.personal.email}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <Phone className="mr-3 text-purple-600" size={20} />
                                    <span>{portfolioData.personal.phone}</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <MapPin className="mr-3 text-purple-600" size={20} />
                                    <span>{portfolioData.personal.location}</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-purple-600 mt-5">Educational Qualification Journey </h3>

                            <div className="space-y-6">
                                {portfolioData.education.map((edu) => (
                                    <div key={edu?.id} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all">
                                        <div className="p-2">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="text-lg font-semibold text-white">{edu?.degree}</h4>
                                                <div className="bg-cyan-500/20 text-purple-600 border-cyan-500/50 px-2 py-1">
                                                    {edu?.level}
                                                </div>
                                            </div>
                                            <div className="flex items-center text-gray-400 text-sm mb-2">
                                                <Building2 size={16} className="mr-2" />
                                                <span>{edu?.institution}</span>
                                            </div>
                                            <div className="flex items-center text-gray-400 text-sm mb-3">
                                                <Calendar size={16} className="mr-2" />
                                                <span>{edu?.duration}</span>
                                            </div>
                                            <div className="flex items-center text-gray-400 text-lg mb-3">
                                                <Percent size={16} className="mr-2" />
                                                <span>{edu?.percentage}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 text-purple-600">Experience</h3>
                            <div className="space-y-6">
                                {portfolioData.experience.map((exp) => (
                                    <div key={exp.id} className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all">
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                                                <div className="bg-cyan-500/20 text-purple-600 border-cyan-500/50 px-2 py-1">
                                                    {exp.duration.includes('Present') ? 'Current' : 'Past'}
                                                </div>
                                            </div>
                                            <div className="flex items-center text-gray-400 text-sm mb-2">
                                                <Building2 size={16} className="mr-2" />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex items-center text-gray-400 text-sm mb-3">
                                                <Calendar size={16} className="mr-2" />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        Skills & <span className="text-purple-600">Technologies</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {portfolioData.skills.map((skill, index) => (
                            <div
                                key={index}
                                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-default"
                            >
                                <span className="text-white font-medium">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 bg-black/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        Featured <span className="text-purple-600">Projects</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolioData.projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 group"
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="bg-purple-500/20 text-purple-400 border-purple-500/50 px-2 py-1">
                                            {project.type}
                                        </div>
                                        <div className="flex gap-3">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-purple-600 hover:text-purple-300 transition-colors"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                            {project.githublink && (
                                                <a
                                                    href={project.githublink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-purple-600 hover:text-purple-300 transition-colors"
                                                >
                                                    <Github size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                                    {project.features && (
                                        <p className="text-gray-400 text-xs mb-4 italic">Features: {project.features}</p>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <div
                                                key={index}
                                                variant="outline"
                                                className="text-xs bg-purple-500 text-white border-purple-500/30 px-2 py-1"
                                            >
                                                {tech}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-black/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        Get In <span className="text-purple-600">Touch</span>
                    </h2>
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700">
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white transition-colors resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-6 text-lg"
                                >
                                    Send Message
                                </button>
                                {formStatus && (
                                    <p className="text-center text-green-400 font-medium">{formStatus}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
