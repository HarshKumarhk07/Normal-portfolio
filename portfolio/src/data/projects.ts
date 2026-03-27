export interface ProjectCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string; // RGBA for electric effects
  tags: string[];
  features?: string[];
  isFeatured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export const PROJECTS: ProjectCard[] = [
  {
    id: 1,
    title: "Cost Predictor Pro",
    subtitle: "MERN + Python Intelligence",
    description: "A precision-engineered predictive engine that quantifies project timelines and costs using scikit-learn models, delivered through a high-performance MERN architecture.",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a883a2?auto=format&fit=crop&q=80&w=1000",
    color: "rgba(59, 130, 246, 0.8)",
    tags: ["React", "Node.js", "Express", "MongoDB", "Python", "Scikit-learn"],
    features: [
      "ML-based cost/timeline prediction",
      "Python ML service integration",
      "Secure auth & user history"
    ],
    isFeatured: true,
    badge: "AI Prediction",
    githubUrl: "https://github.com/HarshKumarhk07/project_cost_and_timeline_predictor",
    liveUrl: "https://project-cost-and-timeline-predictor.vercel.app/"
  },
  {
    id: 2,
    title: "File Management System",
    subtitle: "PHP + MySQL Full Stack",
    description: "Authored a web-based File Management System to handle 100+ file uploads, previews, deletions, and recovery in a single interface.",
    image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1470&auto=format&fit=crop",
    color: "rgba(168, 85, 247, 0.8)",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Tailwind CSS"],
    features: [
      "Database-backed storage",
      "Rigorous server-side validation",
      "Resilient dark mode UI"
    ],
    badge: "Full Stack",
    githubUrl: "https://github.com/HarshKumarhk07/File-Management-System",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Route Planning System",
    subtitle: "Logistics Optimization",
    description: "Prepared a Last Mile Route Planning System to optimize delivery routes for local distribution centres with interactive map visualizations.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1406&auto=format&fit=crop",
    color: "rgba(34, 197, 94, 0.8)",
    tags: ["PHP", "JavaScript", "Tailwind CSS", "HTML", "SQL"],
    features: [
      "Route optimization logic",
      "Interactive map visualization",
      "Real-time delivery paths"
    ],
    badge: "Logistics",
    githubUrl: "https://github.com/HarshKumarhk07/Last-Mile-Route-planning-",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Bank Management System",
    subtitle: "Java OOP & DSA",
    description: "A Java-based Bank Management System built using OOP and DSA concepts to handle customers, accounts, and transactions efficiently with O(1) search.",
    image: "https://images.unsplash.com/photo-1550565118-3d143c4a3023?q=80&w=1470&auto=format&fit=crop",
    color: "rgba(249, 115, 22, 0.8)",
    tags: ["Java", "OOP", "DSA", "HashMap", "Stack"],
    features: [
      "Auto-generated account numbers",
      "O(1) search with HashMap",
      "Transaction history with Stack"
    ],
    badge: "Java Core",
    githubUrl: "https://github.com/HarshKumarhk07/Bank-Managment-System",
    liveUrl: "#"
  }
];
