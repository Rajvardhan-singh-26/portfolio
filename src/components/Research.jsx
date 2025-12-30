import { motion } from 'framer-motion';
import { research } from '../data';
import { FaExternalLinkAlt, FaBook } from 'react-icons/fa';

const Research = () => {
    return (
        <section id="research" className="min-h-screen relative layer-research py-20 px-5 bg-gradient-to-b from-[#2a1f18] to-[#1a0f0a]">
            <div className="max-w-[1000px] mx-auto">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-orange-900/50 text-orange-400 border border-orange-700/50 px-4 py-2 rounded-full text-sm font-bold mb-4 tracking-wider uppercase">
                        Level 4: Deep Archives
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-500 drop-shadow-sm">
                        Research & Publications
                    </h2>
                </motion.div>

                <div className="grid gap-8">
                    {research.map((paper, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-[#2e1d15] border border-orange-900/30 p-8 rounded-3xl shadow-2xl overflow-hidden hover:border-orange-500/50 transition-colors group"
                        >
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 p-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors"></div>

                            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaBook className="text-orange-400 text-xl" />
                                        <h3 className="text-2xl font-bold text-orange-100 leading-tight">
                                            {paper.title}
                                        </h3>
                                    </div>
                                    <p className="text-orange-200/60 mb-4 text-sm font-medium uppercase tracking-wide">
                                        Published in: <span className="text-orange-300">{paper.publication}</span>
                                    </p>
                                    <p className="text-orange-100/80 leading-relaxed max-w-2xl">
                                        {paper.description}
                                    </p>
                                </div>

                                {paper.link && (
                                    <a
                                        href={paper.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-orange-600 hover:bg-orange-500 text-white p-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 group-hover:scale-105 flex items-center justify-center gap-2 font-bold whitespace-nowrap"
                                    >
                                        Read Paper <FaExternalLinkAlt className="text-sm" />
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

export default Research;
