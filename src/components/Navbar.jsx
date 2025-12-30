import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ['About', 'Skills', 'Projects', 'Research', 'Contact'];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="hidden md:flex fixed top-6 left-10 bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-2xl z-50 items-center gap-8 border border-white/50"
            >
                <a href="#" className="font-black text-xl text-slate-800 tracking-tighter hover:scale-105 transition-transform">
                    RSB.
                </a>

                <ul className="flex gap-6">
                    {navLinks.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()} `}
                                className="text-slate-600 font-bold text-sm uppercase tracking-wide hover:text-blue-500 transition-colors"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.nav>

            {/* Mobile Hamburger (Floating Button) */}
            <div className="md:hidden fixed top-5 right-5 z-50">
                <button
                    className="bg-white/90 p-3 rounded-full shadow-lg text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden z-40"
                        onClick={() => setIsOpen(false)}
                    >
                        {navLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()} `}
                                className="text-3xl font-black text-white hover:text-blue-400"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
