import { motion } from 'framer-motion';
import { upcomingProjects } from '../data';

const UpcomingProjects = () => {
    return (
        <section className="section-padding">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold mb-12 text-center">What's <span className="text-blue-500">Next?</span></h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {upcomingProjects.map((item, idx) => (
                        <div key={idx} className="p-6 border border-dashed border-gray-700 rounded-xl hover:bg-gray-900/50 transition-colors">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default UpcomingProjects;
