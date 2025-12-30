import { motion } from 'framer-motion';
import { useState } from 'react';
import Socials from './Socials';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch("https://formspree.io/f/xnjqkpyb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message Sent! 🚀');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('Error sending message.');
                setTimeout(() => setStatus(''), 3000);
            }
        } catch (error) {
            setStatus('Error sending message.');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <section id="contact" className="min-h-screen relative layer-magma py-20 px-5 bg-gradient-to-t from-[#2a0808] to-[#1a0f0a] flex items-center justify-center">
            <div className="max-w-[600px] w-full z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-rose-500 mb-4 drop-shadow-lg">
                        Final Level: Connect
                    </h2>
                    <p className="text-rose-200/60 text-lg">
                        Ready to start a new game? Drop a message.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#2a0a0a]/50 backdrop-blur-md p-8 rounded-3xl border border-rose-900/50 shadow-2xl space-y-6"
                >
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-rose-950/30 border border-rose-900/50 text-rose-100 p-4 rounded-xl focus:outline-none focus:border-rose-500 focus:bg-rose-900/30 transition-all placeholder:text-rose-800"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-rose-950/30 border border-rose-900/50 text-rose-100 p-4 rounded-xl focus:outline-none focus:border-rose-500 focus:bg-rose-900/30 transition-all placeholder:text-rose-800"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-rose-950/30 border border-rose-900/50 text-rose-100 p-4 rounded-xl focus:outline-none focus:border-rose-500 focus:bg-rose-900/30 transition-all resize-none placeholder:text-rose-800"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={!!status}
                        className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status || <><FaPaperPlane /> Send Message</>}
                    </button>
                </motion.form>

                <div className="mt-12">
                    <p className="text-rose-200/40 mb-4 text-sm uppercase tracking-widest font-bold">Or find me on</p>
                    <Socials className="justify-center" />
                </div>

            </div>
        </section>
    );
};

export default Contact;
