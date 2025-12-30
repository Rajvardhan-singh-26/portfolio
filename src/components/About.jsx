import { motion } from 'framer-motion';
import { personalDetails } from '../data';

const About = () => {
    return (
        <section id="about" className="min-h-screen relative layer-ocean flex items-center justify-center py-20 px-5">

            {/* Floating Bubbles Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white/10 rounded-full"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 100}%`,
                            bottom: -150
                        }}
                        animate={{
                            y: -1000,
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1000px] w-full z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200 drop-shadow-lg">
                        Level 2: The Explorer
                    </h2>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                        <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-6 font-medium">
                            {personalDetails.about}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-blue-500/30 rounded-full text-blue-100 text-sm font-bold border border-blue-400/30">
                                🚀 Full-Stack Dev
                            </span>
                            <span className="px-4 py-2 bg-purple-500/30 rounded-full text-purple-100 text-sm font-bold border border-purple-400/30">
                                🧠 AI Researcher
                            </span>
                            <span className="px-4 py-2 bg-teal-500/30 rounded-full text-teal-100 text-sm font-bold border border-teal-400/30">
                                🤖 AI/ML Engineering
                            </span>
                            <span className="px-4 py-2 bg-cyan-500/30 rounded-full text-cyan-100 text-sm font-bold border border-cyan-400/30">
                                🎓 UPES Dehradun
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Stats / Education Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid gap-6"
                >
                    <div className="card-gamified">
                        <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                        <p className="text-blue-200">B.Tech in Computer Science</p>
                        <p className="text-sm text-blue-300">University of Petroleum and Energy Studies</p>
                        <p className="text-sm text-blue-300 mt-1">2021 - Present</p>
                        <div className="mt-4 h-2 bg-blue-900/50 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '85%' }}
                                transition={{ duration: 1.5, ease: "circOut" }}
                                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                            />
                        </div>
                        <p className="text-right text-xs text-blue-300 mt-1">Completion: 85%</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
