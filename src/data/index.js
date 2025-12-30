import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv, SiReact, SiNodedotjs, SiGooglecloud, SiOverleaf } from 'react-icons/si';

export const personalDetails = {
  name: "Rajvardhan Singh Bhadauriya",
  title: "AI & Machine Learning Engineer | NLP & Medical Imaging Researcher | Full-Stack Developer",
  tagline: "Building intelligent AI systems for healthcare, mental health, and real-world impact.",
  location: "Gwalior, Madhya Pradesh, India",
  email: "rajhb217@gmail.com",
  socials: [
    { icon: FaGithub, link: "https://github.com/Rajvardhan-singh-26" },
    { icon: FaLinkedin, link: "https://linkedin.com/in/rajvardhan-singh-bhadauriya-b239691a0" },
    { icon: FaEnvelope, link: "mailto:rajhb217@gmail.com" },
  ]
};

export const skills = {
  programming: [
    { name: "C++", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    { name: "SQL", icon: null }, // Generic database icon or plain text
  ],
  ai_ml: [
    { name: "PyTorch", icon: SiPytorch },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "scikit-learn", icon: SiScikitlearn },
    { name: "OpenCV", icon: SiOpencv },
    { name: "ViT", icon: null },
    { name: "GPT", icon: null },
    { name: "RAG", icon: null },
  ],
  web: [
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "HTML/CSS/JS", icon: null },
  ],
  tools: [
    { name: "Power BI", icon: null },
    { name: "GCP", icon: SiGooglecloud },
    { name: "Overleaf", icon: SiOverleaf },
    { name: "Excel", icon: null },
  ]
};

export const projects = [
  {
    title: "A Multilayered Taxonomy of Placental Disorders",
    category: "Medical Imaging",
    tech: ["BYOL (ResNet)", "SLIC segmentation", "ViT", "CLAHE"],
    description: "Ultrasound-based medical imaging project using advanced preprocessing and classification techniques.",
    stats: "Advanced Preprocessing",
  },
  {
    title: "OrgHive – Multi-Label Emotion Classification",
    category: "NLP",
    tech: ["NLP", "React", "Slack Integration"],
    description: "NLP system trained on 30K+ Reddit posts to classify 27 emotion classes.",
    stats: "F1-score: 0.87",
  },
  {
    title: "Nutri Care – Personalized Food Recommendation",
    category: "Health Tech",
    tech: ["C++", "DSA", "Web"],
    description: "Personalized food recommendation system using hash maps, tries, and graphs on 300+ patient datasets.",
    stats: "40% faster retrieval",
  },
];

export const research = [
  {
    title: "Predictive Workplace Mental Health Monitoring",
    publication: "IEEE SENNET 2025",
    role: "Researcher & Presenter",
    description: "NLP-driven sentiment analysis & emotional intelligence metrics for workplace mental health.",
  }
];

export const internships = [
  {
    company: "NASSCOM – Google GenAI Virtual Internship",
    role: "Intern",
    tech: ["GCP", "Vertex AI", "BigQuery", "RAG"],
    description: "Worked on Google Cloud Platform and Generative AI technologies.",
  },
  {
    company: "GKSSS – Social Internship",
    role: "Team Lead",
    tech: ["Management", "Leadership"],
    description: "Led 100+ volunteers and reduced paperwork by 75%.",
  }
];

export const upcomingProjects = [
  {
    title: "AI-Powered Medical Diagnosis Assistant",
    description: "Developing a generative AI chatbot for preliminary medical diagnosis support.",
  },
  {
    title: "Real-time Sign Language Translator",
    description: "Computer vision project to translate sign language to text/speech in real-time.",
  }
];
