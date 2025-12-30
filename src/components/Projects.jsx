import { motion } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen relative layer-earth py-20 px-5">
            <div className="max-w-[1200px] mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-md">
                        Level 3: Mission Log
                    </h2>
                    <p className="text-amber-200/80 text-xl font-mono">Selected Deployments & Archives</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card-gamified group bg-[#3e2d20] border-amber-900/50 hover:border-amber-500/50 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-amber-100 group-hover:text-amber-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="bg-amber-950/50 text-amber-400 text-xs px-2 py-1 rounded border border-amber-900">
                                        v1.0
                                    </span>
                                </div>

                                <p className="text-amber-200/70 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-xs font-bold text-amber-300 bg-amber-900/40 px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-black/40 hover:bg-black/60 text-white py-2 rounded-xl transition-colors font-bold text-sm"
                                >
                                    <FaGithub /> Code
                                </a>
                                {project.LiveLink && (
                                    <a
                                        href={project.LiveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white py-2 rounded-xl transition-colors font-bold text-sm shadow-lg shadow-amber-900/20"
                                    >
                                        <FaExternalLinkAlt /> Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
