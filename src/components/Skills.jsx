import { motion } from 'framer-motion';
import { skills } from '../data';

const SkillCard = ({ title, items }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 text-blue-400">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((skill, idx) => (
                <motion.a
                    key={idx}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: '#262626' }}
                    className="bg-card-bg p-4 rounded-xl border border-gray-800 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer block"
                >
                    {skill.icon && <skill.icon className="text-3xl text-gray-300" />}
                    <span className="font-medium text-gray-300">{skill.name}</span>
                </motion.a>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="section-padding bg-[#050505]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold mb-12 text-center"><span className="gradient-text">Technical Skills</span></h2>

                <div className="max-w-5xl mx-auto">
                    <SkillCard title="Programming Languages" items={skills.programming} />
                    <SkillCard title="AI / Machine Learning" items={skills.ai_ml} />
                    <SkillCard title="Web Development" items={skills.web} />
                    <SkillCard title="Tools & Platforms" items={skills.tools} />
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
