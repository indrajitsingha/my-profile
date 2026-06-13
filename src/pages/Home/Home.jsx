import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, ExternalLink, Calendar, Building2, Percent, Github } from 'lucide-react';
import { portfolioData } from '../../personaldetails';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TypewriterComponent from 'typewriter-effect';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState('');
    const { theme } = useTheme();

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
        <div className={`min-h-screen bg-gradient-to-b ${theme.bg} ${theme.text}`}>
            <Navbar />

            {/* Hero Section */}
            <section id="home" className={`min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden`}>
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
                </div>

                <div className="max-w-6xl mx-auto text-center z-10">
                    <div className="mb-6 animate-fade-in">
                        <span className={`text-sm font-medium tracking-wider uppercase bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>Welcome to my portfolio</span>
                    </div>
                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent drop-shadow-lg`}>
                        {portfolioData.personal.name}
                    </h1>
                    <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-4 font-medium`}>
                        <TypewriterComponent
                            options={{
                                strings: ['Frontend Developer', 'React js Developer' ,"HTML/CSS ,Javascript"," Tailwind CSS , Bootstrap, CSS Modules, Styled Components, Shadcn UI ","Redux Toolkit, RTK Query, React Query, React Hook Form, React Charts","Git, Firebase, REST APIs, Vercel, Netlify"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                    <p className={`${theme.textTertiary} max-w-2xl mx-auto mb-8 leading-relaxed text-lg`}>
                        {portfolioData.personal.objective}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            className={`bg-gradient-to-r ${theme.accent} ${theme.text} font-bold px-8 py-4 text-lg rounded-lg flex justify-center items-center ${theme.shadow} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                        >
                            View My Work <ArrowRight className="ml-2" size={20} />
                        </button>
                        <a href='/asset/indrajit_singha_resume.pdf'
                            className={`border-2 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 font-bold ${theme.textSecondary} hover:${theme.text}`}
                            style={{borderImage: `linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1`}}
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={`py-20 px-4 ${theme.bgSecondary}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${theme.text}`}>
                        About <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>Me</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className={`text-2xl font-semibold mb-4 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>Contact Information</h3>
                            <div className="space-y-4">
                                <div className={`flex items-center ${theme.textSecondary} hover:${theme.text} transition-all duration-300 p-3 rounded-lg`}>
                                    <Mail className={`mr-3 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`} size={24} />
                                    <span className="font-medium">{portfolioData.personal.email}</span>
                                </div>
                                <div className={`flex items-center ${theme.textSecondary} hover:${theme.text} transition-all duration-300 p-3 rounded-lg`}>
                                    <Phone className={`mr-3 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`} size={24} />
                                    <span className="font-medium">{portfolioData.personal.phone}</span>
                                </div>
                                <div className={`flex items-center ${theme.textSecondary} hover:${theme.text} transition-all duration-300 p-3 rounded-lg`}>
                                    <MapPin className={`mr-3 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`} size={24} />
                                    <span className="font-medium">{portfolioData.personal.location}</span>
                                </div>
                            </div>
                            <h3 className={`text-2xl font-semibold mb-4 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent mt-8`}>Education</h3>

                            <div className="space-y-6">
                                {portfolioData.education.map((edu) => (
                                    <div key={edu?.id} className={`${theme.cardBg} border ${theme.border} rounded-lg overflow-hidden group`}>
                                        <div className="p-4">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className={`text-lg font-semibold ${theme.text}`}>{edu?.degree}</h4>
                                                <div className={`${theme.bgTertiary} text-xs font-medium px-3 py-1 rounded-full ${theme.textSecondary}`}>
                                                    {edu?.level}
                                                </div>
                                            </div>
                                            <div className={`flex items-center ${theme.textTertiary} text-sm mb-2`}>
                                                <Building2 size={16} className="mr-2" />
                                                <span>{edu?.institution}</span>
                                            </div>
                                            <div className={`flex items-center ${theme.textTertiary} text-sm mb-3`}>
                                                <Calendar size={16} className="mr-2" />
                                                <span>{edu?.duration}</span>
                                            </div>
                                            <div className={`flex items-center ${theme.textSecondary} text-lg font-semibold`}>
                                                <Percent size={16} className="mr-2" />
                                                <span>{edu?.percentage}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className={`text-2xl font-semibold mb-6 bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>Experience</h3>
                            <div className="space-y-6">
                                {portfolioData.experience.map((exp) => (
                                    <div key={exp.id} className={`${theme.cardBg} border ${theme.border} rounded-lg overflow-hidden group hover:${theme.shadow}`}>
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className={`text-lg font-semibold ${theme.text}`}>{exp.title}</h4>
                                                <div className={`${theme.bgTertiary} text-xs font-medium px-3 py-1 rounded-full ${theme.textSecondary}`}>
                                                    {exp.duration.includes('Present') ? 'Current' : 'Past'}
                                                </div>
                                            </div>
                                            <div className={`flex items-center ${theme.textTertiary} text-sm mb-2`}>
                                                <Building2 size={16} className="mr-2" />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className={`flex items-center ${theme.textTertiary} text-sm mb-3`}>
                                                <Calendar size={16} className="mr-2" />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <p className={`${theme.textSecondary} text-sm leading-relaxed`}>{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className={`py-20 px-4 ${theme.bgPrimary}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${theme.text}`}>
                        Skills & <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>Technologies</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {portfolioData.skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`px-6 py-3 bg-gradient-to-r ${theme.accent} ${theme.text} rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110 font-medium`}
                            >
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-20 px-4 ${theme.bgSecondary}`}>
                <div className="max-w-6xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${theme.text}`}>
                        Featured <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>Projects</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolioData.projects.map((project) => (
                            <div
                                key={project.id}
                                className={`${theme.cardBg} border ${theme.border} rounded-lg overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`${theme.bgTertiary} text-xs font-medium px-3 py-1 rounded-full ${theme.textSecondary}`}>
                                            {project.type}
                                        </div>
                                        <div className="flex gap-3">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent hover:opacity-80 transition-all`}
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                            {project.githublink && (
                                                <a
                                                    href={project.githublink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent hover:opacity-80 transition-all`}
                                                >
                                                    <Github size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className={`text-2xl font-bold mb-3 ${theme.text} group-hover:bg-gradient-to-r group-hover:${theme.accent} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                                        {project.title}
                                    </h3>
                                    <p className={`${theme.textSecondary} mb-4 text-sm leading-relaxed`}>{project.description}</p>
                                    {project.features && (
                                        <p className={`${theme.textTertiary} text-xs mb-4 italic`}>Features: {project.features}</p>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <div
                                                key={index}
                                                className={`text-xs bg-gradient-to-r ${theme.accent} ${theme.text} px-2 py-1 rounded-md font-medium`}
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
            <section id="contact" className={`py-20 px-4 ${theme.bgPrimary}`}>
                <div className="max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${theme.text}`}>
                        Get In <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>Touch</span>
                    </h2>
                    <div className={`${theme.cardBg} border ${theme.border} rounded-lg overflow-hidden ${theme.shadow}`}>
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 ${theme.bgTertiary} border ${theme.border} rounded-lg focus:outline-none focus:border-opacity-100 ${theme.text}`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 ${theme.bgTertiary} border ${theme.border} rounded-lg focus:outline-none focus:border-opacity-100 ${theme.text}`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className={`block text-sm font-medium ${theme.textSecondary} mb-2`}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        className={`w-full px-4 py-3 ${theme.bgTertiary} border ${theme.border} rounded-lg focus:outline-none focus:border-opacity-100 ${theme.text} resize-none`}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full bg-gradient-to-r ${theme.accent} ${theme.text} font-bold py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105`}
                                >
                                    Send Message
                                </button>
                                {formStatus && (
                                    <p className="text-center text-green-400 font-medium animate-pulse">{formStatus}</p>
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
