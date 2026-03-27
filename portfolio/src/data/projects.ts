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

// Technical SVG Placeholders (Base64 Encoded for maximum reliability)
const TECH_IMAGES = {
  ai: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiMwYTBhMGMiLz48ZyBvcGFjaXR5PSIwLjMiPjxwYXRoIGQ9Ik0wIDIyNUg4MDAiIHN0cm9rZT0iIzNiODI0NiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTQwMCAwVjQ1MCIgc3Ryb2tlPSIjM2I4MjQ2IiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMjI1IiByPSIxMDAiIHN0cm9rZT0iIzNiODI0NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI4IDgiLz48cGF0aCBkPSJNMzAwIDE3NUw1MDAgMjc1TTMwMCAyNzVMNTAwIDE3NSIgc3Ryb2tlPSIjM2I4MjQ2IiBzdHJva2Utd2lkdGg9IjQiLz48L3N2Zz4=`,
  file: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiMwYTBhMGMiLz48ZyBvcGFjaXR5PSIwLjMiPjxwYXRoIGQ9Ik0wIDUwSDgwME0wIDQwMEg4MDBNNDAwIDBWNDUwIiBzdHJva2U9IiNhODU1ZjciIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48cmVjdCB4PSIzNTAiIHk9IjE3NSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMjAiIHJ4PSIxMCIgc3Ryb2tlPSIjYTg1NWY3IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzc1IDIwMEg0MjVNMzc1IDIzMEg0MjVNMzc1IDI2MEg0MDAiIHN0cm9rZT0iI2E4NTVmNyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+`,
  route: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiMwYTBhMGMiLz48ZyBvcGFjaXR5PSIwLjMiPjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIyNSIgcj0iMjAwIiBzdHJva2U9IiMyMmM1NWUiIHN0cm9rZS13aWR0aD0iMSIvPjxjaXJjbGUgY3g9IjQwMCIgY3k9IjIyNSIgcj0iMTUwIiBzdHJva2U9IiMyMmM1NWUiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48cGF0aCBkPSJNMzAwIDE1MEw0NTAgMzAwTDUwMCAyMDBMNDAwIDM1MEwzMDAgMTUwWiIgc3Ryb2tlPSIjMjJjNTVlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIxNTAiIHI9IjUiIGZpbGw9IiMyMmM1NWUiLz48Y2lyY2xlIGN4PSI0NTAiIGN5PSIzMDAiIHI9IjUiIGZpbGw9IiMyMmM1NWUiLz48Y2lyY2xlIGN4PSI1MDAiIGN5PSIyMDAiIHI9IjUiIGZpbGw9IiMyMmM1NWUiLz48L3N2Zz4=`,
  bank: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0NTAiIGZpbGw9IiMwYTBhMGMiLz48ZyBvcGFjaXR5PSIwLjMiPjxwYXRoIGQ9Ik0wIDBMODAwIDQ1ME04MDAgMEwwIDQ1MCIgc3Ryb2tlPSIjZjk3MzE2IiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PHBhdGggZD0iTTQwMCAxNTBMMzUwIDE4MFYzMDBINDUwVjE4MEw0MDAgMTUwWiIgc3Ryb2tlPSIjZjk3MzE2IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzcwIDIxMEg0MzBNMzcwIDIzMEg0MzBNMzcwIDI1MEg0MzBNMzcwIDI3MEg0MzAiIHN0cm9rZT0iI2Y5NzMxNiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+`
};

export const PROJECTS: ProjectCard[] = [
  {
    id: 1,
    title: "Cost Predictor Pro",
    subtitle: "MERN + Python Intelligence",
    description: "A precision-engineered predictive engine that quantifies project timelines and costs using scikit-learn models, delivered through a high-performance MERN architecture.",
    image: TECH_IMAGES.ai,
    color: "rgba(59, 130, 246, 0.8)",
    tags: ["React", "Node.js", "Express", "MongoDB", "Python", "Scikit-learn"],
    features: [
      "ML-based cost/timeline prediction",
      "Python ML service integration",
      "Secure auth & user history"
    ],
    isFeatured: false,
    badge: "AI Prediction",
    githubUrl: "https://github.com/HarshKumarhk07/project_cost_and_timeline_predictor",
    liveUrl: "https://project-cost-and-timeline-predictor.vercel.app/"
  },
  {
    id: 2,
    title: "File Management System",
    subtitle: "PHP + MySQL Full Stack",
    description: "Authored a web-based File Management System to handle 100+ file uploads, previews, deletions, and recovery in a single interface.",
    image: TECH_IMAGES.file,
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
    image: TECH_IMAGES.route,
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
    image: TECH_IMAGES.bank,
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
