import { personalDetails } from '../data';

const Socials = ({ className = "" }) => {
    return (
        <div className={`flex gap-4 ${className}`}>
            {personalDetails.socials.map((social, idx) => (
                <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#222] hover:bg-black hover:text-white transition-all text-xl text-gray-400 border border-transparent hover:border-blue-500 shadow-lg"
                >
                    <social.icon />
                </a>
            ))}
        </div>
    );
};

export default Socials;
