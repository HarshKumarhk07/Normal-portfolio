"use client";

import { Mail, Linkedin, Github, Code2, Phone, ArrowRight, Download, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { ProfileCodeBox } from "@/components/ProfileCodeBox";
import { InfiniteGridBackground } from "@/components/ui/infinite-grid";
import { FloatingIconsHero } from "@/components/ui/floating-icons-hero-section";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import { Navbar } from "@/components/ui/navbar";
import { PROJECTS } from "@/data/projects";
import { GithubHeatmap } from "@/components/GithubHeatmap";

import { TypeWriter } from "@/components/ui/type-writer";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const roles = ["Full Stack Developer", "MERN Stack Developer", "Problem Solver"];

  return (
    <main id="home" className="relative w-full bg-[#050505] text-[#ededed] overflow-x-hidden text-sm md:text-base font-sans">
      
      <Navbar />

      <InfiniteGridBackground>
        {/* SECTION 01: HERO / HOME */}
        <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-36 pb-24">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 pointer-events-none select-none">
            <span className="font-black text-[200px] md:text-[350px] text-blue-500/[0.15]">01</span>
          </div>
          
          <div className="max-w-[1350px] mx-auto px-10 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-20 lg:gap-32 relative z-20 w-full mb-16">
            
            {/* Left Side: Profile Code Box */}
            <div className="w-full md:w-auto flex justify-center">
              <div className="relative group flex justify-center">
                <div className="absolute -top-8 -right-8 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-30 group-hover:bg-blue-500/10 group-hover:border-blue-500/40 transition-all duration-500 hidden xl:block">
                  <Code2 size={32} className="text-blue-400" />
                </div>
                <div className="absolute -bottom-8 -left-8 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-30 group-hover:bg-blue-500/10 group-hover:border-blue-500/40 transition-all duration-500 hidden xl:block">
                  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3C7 3 3 5 3 8v8c0 3 4 5 9 5s9-2 9-5V8c0-3-4-5-9-5zm0 2c4.4 0 7 1.6 7 3s-2.6 3-7 3-7-1.6-7-3 2.6-3 7-3z" />
                  </svg>
                </div>
                
                <div className="relative w-full max-w-[700px]">
                  <div className="absolute inset-0 bg-blue-500/25 blur-[150px] rounded-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                  <ProfileCodeBox />
                </div>
              </div>
            </div>

            {/* Right Side: Hero Content */}
            <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
              <Reveal delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-5 py-2 rounded-full mb-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-blue-400 text-[11px] tracking-[0.25em] font-bold uppercase">System Online</span>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <h1 className="text-white font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  Harsh Kumar Singh
                </h1>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-light text-white/50 mb-12 h-[1.2em]">
                  <span>I&apos;m a</span>
                  <TypeWriter words={roles} />
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-white/50 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mb-12">
                  Building seamless full-stack web experiences with the MERN stack — crafting fast, scalable applications that solve real-world problems.
                </p>
              </Reveal>

              <Reveal delay={0.5} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-widest uppercase px-12 py-6 rounded-xl transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-4 active:scale-95">
                  View Projects <ArrowRight size={20} />
                </a>
                <a href="#contact" className="border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-widest uppercase px-12 py-6 rounded-xl transition-all flex items-center justify-center gap-4 active:scale-95">
                  Contact Me <Mail size={20} />
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.6} className="mt-8 flex flex-col items-center gap-8 relative z-20">
            <div className="flex items-center gap-10">
               {[
                 { icon: Github, href: "https://github.com/HarshKumarhk07" },
                 { icon: Linkedin, href: "https://www.linkedin.com/in/harsh-kumar-018638294/" },
                 { icon: Mail, href: "mailto:harshkumarhk525@gmail.com" }
               ].map((social, i) => (
                 <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-white transition-all duration-500 transform hover:scale-110 active:scale-95">
                   <social.icon size={28} />
                 </a>
               ))}
            </div>
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 40 }}
              transition={{ delay: 1, duration: 1 }}
              className="w-px bg-gradient-to-b from-white/20 to-transparent"
            />
          </Reveal>
        </section>

        <div className="relative z-10 w-full bg-transparent flex flex-col items-center">
            
          {/* SECTION 02: ABOUT */}
          <section id="about" className="relative py-24 md:py-32 w-full overflow-hidden border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 relative z-10 items-center">
              <Reveal className="w-full md:w-[40%] flex justify-center md:justify-start relative">
                 <span className="absolute -top-28 -left-24 font-black text-8xl md:text-[220px] text-blue-500/[0.15] select-none pointer-events-none leading-none z-0">
                   02
                 </span>
                 {/* Reverted to Rectangle Shape as requested */}
                 <div className="relative group w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 p-2 bg-white/5 z-10 transition-all duration-700 hover:border-blue-500/40 mt-24 md:mt-36">
                   <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 opacity-30 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
                   <img 
                     src="/profile.jpg" 
                     alt="Harsh Kumar Singh" 
                     className="w-full h-full object-cover grayscale opacity-90 scale-[1.7] object-[center_28%] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.8] transition-all duration-700 ease-out"
                   />
                 </div>
              </Reveal>
              <div className="w-full md:w-[60%] flex flex-col">
                <Reveal delay={0.1}>
                  <span className="text-blue-400 tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold mb-6 block">WHO I AM</span>
                  <h2 className="text-white font-black text-5xl md:text-6xl tracking-tighter leading-none whitespace-pre-line mb-8">
                    {"The Developer\nBehind the Identity."}
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-white/55 text-lg leading-[1.85] max-w-xl font-light">
                    B.Tech Computer Science undergraduate at Lovely Professional University
                    with a CGPA of <span className="text-white">7.8</span>. I build full-stack MERN applications that are 
                    fast, scalable, and built to last.
                    <br /><br />
                    Before I wrote code, I wore a uniform — 3 years in the NCC Army Wing, 
                    holding B & C Certificates. That discipline lives in every architecture 
                    decision I make.
                  </p>
                </Reveal>
                <div className="mt-12 flex gap-6 flex-wrap border-b border-white/5 pb-12">
                   {[
                     { icon: Mail, text: "Email", href: "mailto:harshkumarhk525@gmail.com" },
                     { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/harsh-kumar-018638294/" },
                     { icon: Github, text: "GitHub", href: "https://github.com/HarshKumarhk07" },
                     { icon: Code2, text: "LeetCode", href: "https://leetcode.com/u/harsh_kr07/" },
                     { icon: Phone, text: "+91 9779152271", href: "tel:+919779152271" }
                   ].map((c, i) => (
                     <Reveal key={i} delay={0.3 + (i * 0.1)}>
                       <a href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 interactive group cursor-pointer text-white/50 hover:text-white transition-colors duration-300">
                         <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/5 transition-all duration-300">
                           <c.icon size={16} className="text-white/30 group-hover:text-white transition-colors" />
                         </div>
                         <span className="text-sm font-light tracking-wide">{c.text}</span>
                       </a>
                     </Reveal>
                   ))}
                </div>
                <div className="w-full flex flex-wrap gap-12 md:gap-24 pt-12">
                  {[
                    { num: "7.8", label: "CGPA" },
                    { num: "130+", label: "Problems Solved" },
                    { num: "6+", label: "Certifications" }
                  ].map((stat, i) => (
                     <Reveal key={i} delay={0.5 + (i * 0.1)} className="flex flex-col">
                       <span className="font-black text-5xl tracking-tighter text-white/80">{stat.num}</span>
                       <span className="text-white/40 text-[10px] tracking-widest uppercase mt-2 font-medium">{stat.label}</span>
                     </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 03: CODING PROFILES (New) */}
          <section id="github" className="py-24 md:py-32 w-full border-t border-white/[0.05] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
               <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-20 relative z-10">
                 <Reveal>
                   <span className="text-blue-400 tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold mb-6 block">COMMITS & ACTIVITY</span>
                   <h2 className="text-white font-black text-5xl md:text-7xl tracking-tighter leading-none inline-block">Coding Profiles</h2>
                 </Reveal>
                 <Reveal className="hidden md:block">
                   <span className="font-black text-[140px] md:text-[200px] text-blue-500/[0.15] select-none pointer-events-none leading-none translate-y-4">03</span>
                 </Reveal>
               </div>
               
               <Reveal delay={0.2}>
                 <GithubHeatmap username="HarshKumarhk07" />
               </Reveal>
            </div>
          </section>

          {/* SECTION 04: SKILLS */}
          <section id="skills" className="relative py-24 md:py-32 border-t border-white/[0.05] w-full overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 mb-4">
              <Reveal className="flex flex-col md:flex-row gap-8 md:gap-24 items-start w-full relative mb-12">
                <div className="w-full md:w-[40%] relative flex items-start md:h-full min-h-[160px]">
                   <span className="font-black text-8xl md:text-[140px] text-blue-500/[0.15] select-none pointer-events-none leading-none -ml-4 md:-ml-8">
                     04
                   </span>
                </div>
                <div className="w-full md:w-[60%] pt-4">
                  <span className="text-blue-400 tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold mb-6 block">CAPABILITIES</span>
                  <h2 className="text-white font-black text-5xl md:text-6xl tracking-tighter leading-[1.1] whitespace-pre-line">
                    {"Technology\nArsenal."}
                  </h2>
                  <p className="text-white/40 text-sm md:text-base mt-6 font-light">
                    Hover to interact — these are the core tools and languages I build with.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="relative h-[450px] md:h-[600px] w-full max-w-[1400px] mx-auto">
              <FloatingIconsHero className="h-full bg-transparent" />
            </Reveal>
          </section>

          {/* SECTION 05: PROJECTS */}
          <section id="projects" className="bg-transparent py-28 md:py-36 border-t border-white/[0.05] relative overflow-hidden w-full">
            <div className="max-w-6xl mx-auto px-6 relative mb-20">
              <Reveal className="flex flex-col md:flex-row items-end justify-between gap-8 md:gap-24 relative">
                <div className="relative flex-1">
                  <span className="text-blue-400 tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold mb-6 block">SELECTED WORK</span>
                  <h2 className="text-white font-black text-5xl md:text-7xl tracking-tighter leading-none mb-4">
                    {"Things I\nActually Built."}
                  </h2>
                </div>
                <div className="relative hidden md:block">
                   <span className="font-black text-[140px] md:text-[200px] text-blue-500/[0.15] select-none pointer-events-none leading-none translate-y-8">05</span>
                </div>
              </Reveal>
            </div>
            <div className="relative z-10 font-sans">
              <ProjectCarousel projects={PROJECTS} />
            </div>
          </section>

          {/* SECTION 06: CERTIFICATIONS */}
          <section id="certs" className="py-24 md:py-32 w-full border-t border-white/[0.05] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
               <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-20 relative z-10">
                 <Reveal>
                   <span className="text-blue-400 tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold mb-6 block">VERIFIED CREDENTIALS</span>
                   <h2 className="text-white font-black text-5xl md:text-7xl tracking-tighter leading-none inline-block">Certifications</h2>
                 </Reveal>
                 <Reveal className="hidden md:block">
                   <span className="font-black text-[140px] md:text-[200px] text-blue-500/[0.15] select-none pointer-events-none leading-none translate-y-4">06</span>
                 </Reveal>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10 px-4 md:px-0">
                 {[
                   { title: "Master Generative AI & Generative AI Tool", issuer: "Infosys Springboard", delay: 0.1, img: "/certs/master_genai.png", link: "https://drive.google.com/file/d/17NmRk6HNxR2y5rQImH11zw112pqTDuMw/view?usp=drive_link" },
                   { title: "The Bits and Bytes of Computer Networking", issuer: "Coursera", delay: 0.2, img: "/certs/networking_basics.png", link: "https://drive.google.com/file/d/175ddzv7KoozdFWxcA_C0A6RiO12Evy2E/view?usp=drive_link" },
                   { title: "AI Agent With MongoDB", issuer: "MongoDB University", delay: 0.3, img: "/certs/ai_agents_mongodb.png", link: "https://drive.google.com/file/d/1VptmkReNFYW6I9Ivn9q-2gm2FOyY43z8/view?usp=drive_link" },
                   { title: "RAG With MongoDB", issuer: "MongoDB University", delay: 0.4, img: "/certs/rag_mongodb.png", link: "https://drive.google.com/file/d/1DIue_a1vnjH6U1KdrB8l-T4TL_dcWn4O/view?usp=drive_link" },
                   { title: "Cloud Computing – NPTEL", issuer: "IIT Kharagpur", delay: 0.5, img: "/certs/cloud_computing_nptel.png", link: "https://drive.google.com/file/d/1CiM_pFH7LFN6_8PIb-kY8bGgbwFpL-co/view?usp=drive_link" },
                   { title: "ChatGPT-4 Prompt Engineering", issuer: "Infosys Springboard", delay: 0.6, img: "/certs/prompt_engineering.png", link: "https://drive.google.com/file/d/1mq4GOlS_qGPdQWhKkn_8nVrgJIcF7VdB/view?usp=drive_link" }
                 ].map((cert, idx) => (
                   <Reveal key={idx} delay={cert.delay} className="h-full">
                     <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                       <div className="relative bg-[#0d1117]/40 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/5">
                          <div className="aspect-[16/10] bg-white/5 relative overflow-hidden">
                            <img src={cert.img} alt={cert.title} className="w-full h-full object-contain p-4 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                                <ExternalLink size={18} className="text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="p-8 md:p-10 flex flex-col flex-1 bg-gradient-to-b from-transparent to-[#0d1117]/40">
                            <h3 className="text-white font-bold text-xl md:text-2xl leading-snug mb-3 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                            <span className="mt-auto text-white/40 text-sm md:text-base font-light tracking-wide italic">{cert.issuer}</span>
                          </div>
                       </div>
                     </a>
                   </Reveal>
                 ))}
               </div>
            </div>
          </section>

          {/* SECTION 07: EXPERIENCE & TRAINING */}
          <section id="training" className="py-24 md:py-32 w-full border-t border-white/[0.05] relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-start relative mb-20">
               <Reveal className="absolute top-0 right-12 z-0 hidden lg:block">
                 <span className="font-black text-[200px] text-blue-500/[0.15] select-none pointer-events-none leading-none origin-bottom translate-y-[-20%]">
                   07
                 </span>
               </Reveal>
               <div className="flex flex-col lg:flex-row w-full gap-24 relative z-10">
                 <div className="flex flex-col w-full lg:w-[70%]">
                   <Reveal>
                     <span className="text-blue-400 tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold mb-6 block">EXPERIENCE & TRAINING</span>
                     <h2 className="text-white font-black text-5xl md:text-6xl tracking-tighter leading-[1.1] whitespace-pre-line mb-16">
                       {"Professional\nRoadmap."}
                     </h2>
                     
                     {/* Experience: Avani Enterprises */}
                     <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-colors duration-500 hover:bg-white/[0.05] group mb-12">
                       <div className="flex justify-between items-start mb-4">
                         <span className="text-blue-400/60 text-[10px] tracking-[0.3em] uppercase block font-bold">Avani Enterprises | Present</span>
                         <a 
                           href="https://drive.google.com/file/d/1m0PvfjirmPZWXoPGT3SK1E_tkkpdX6el/view?usp=drive_link" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-white/30 hover:text-blue-400 transition-colors text-[10px] flex items-center gap-2 uppercase tracking-widest font-bold"
                         >
                           View LOI <ExternalLink size={12} />
                         </a>
                       </div>
                       <h3 className="text-white font-bold text-2xl leading-[1.3] tracking-tight mb-6 group-hover:text-blue-400 transition-colors">
                         Web Development Intern
                       </h3>
                       <ul className="text-white/55 text-[14px] leading-relaxed flex flex-col gap-3 font-light">
                         <li className="flex items-start gap-3"><span className="text-blue-500/50 mt-1">●</span> Developing high-performance, responsive web interfaces using modern frameworks.</li>
                         <li className="flex items-start gap-3"><span className="text-blue-500/50 mt-1">●</span> Collaborating with technical teams to implement scalable frontend and backend solutions.</li>
                         <li className="flex items-start gap-3"><span className="text-blue-500/50 mt-1">●</span> Optimizing web assets and architecture for speed and ultimate user experience.</li>
                       </ul>
                     </div>

                     {/* Training: Splen Technologies */}
                     <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-colors duration-500 hover:bg-white/[0.05] group">
                       <div className="flex justify-between items-start mb-4">
                         <span className="text-blue-400/60 text-[10px] tracking-[0.3em] uppercase block font-bold">SPLEN TECHNOLOGIES | JUN–JUL 2025</span>
                         <a 
                           href="https://drive.google.com/file/d/1j2RlQAL0jBLtVd2_TMVT4tTfNPahr7Xj/view?usp=drive_link" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-white/30 hover:text-blue-400 transition-colors text-[10px] flex items-center gap-2 uppercase tracking-widest font-bold"
                         >
                           View Certificate <ExternalLink size={12} />
                         </a>
                       </div>
                       <h3 className="text-white font-bold text-2xl leading-[1.3] tracking-tight mb-6 group-hover:text-blue-400 transition-colors">
                         Fundamentals of Data Structures and Algorithms in Java
                       </h3>
                       <ul className="text-white/55 text-[14px] leading-relaxed flex flex-col gap-3 font-light">
                         <li className="flex items-start gap-3"><span className="text-blue-500/50 mt-1">●</span> Arrays, linked lists, stacks, queues, trees, graphs, hash tables</li>
                         <li className="flex items-start gap-3"><span className="text-blue-500/50 mt-1">●</span> Dynamic programming, recursion, backtracking, greedy algorithms</li>
                         <li className="flex items-start gap-3"><span className="text-blue-500/50 mt-1">●</span> OOP principles and Java Collections Framework</li>
                       </ul>
                     </div>
                   </Reveal>
                 </div>
               </div>
            </div>
          </section>

          {/* SECTION 08: ACTIVITIES (NCC) */}
          <section id="activities" className="py-24 md:py-32 w-full border-t border-white/[0.05] relative overflow-hidden">
            <Reveal className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center relative">
               <span className="absolute top-[-60px] md:top-[-80px] left-4 md:left-24 font-black text-[180px] md:text-[240px] leading-none select-none pointer-events-none text-blue-500/[0.15]">
                 08
               </span>
              <span className="text-blue-400 tracking-[0.3em] text-[10px] md:text-xs uppercase font-bold mb-10 relative z-10 text-center">BEYOND THE CODE</span>
              <p className="text-white/70 text-2xl md:text-4xl font-light leading-[1.8] md:leading-[1.7] max-w-4xl text-center italic relative z-10 tracking-wide">
                Three years in the NCC Army Wing. B &amp; C Certificate holder. 
                Two CATC camps. Ten community service events. 
                Discipline isn&apos;t a soft skill — it&apos;s infrastructure.
              </p>
            </Reveal>
          </section>

          {/* SECTION 09: CONTACT */}
          <section id="contact" className="min-h-[70vh] w-full flex flex-col items-center justify-center relative border-t border-white/[0.08]">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 pointer-events-none select-none">
               <span className="font-black text-[200px] md:text-[300px] text-blue-500/[0.15]">09</span>
             </div>
             <div className="flex flex-col items-center justify-center w-full px-6 z-10 mt-16 pb-32">
               <Reveal>
                 <span className="text-blue-400 tracking-[0.4em] text-[10px] md:text-xs uppercase font-bold mb-8 block text-center">READY TO BUILD</span>
               </Reveal>
               <h2 className="text-white font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-center whitespace-pre-line drop-shadow-2xl flex flex-wrap justify-center max-w-5xl overflow-hidden mt-4">
                 Let&apos;s Build Something Real.
               </h2>
               <Reveal delay={0.2} className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-md mx-auto">
                 <a href="mailto:harshkumarhk525@gmail.com" className="w-full sm:w-auto bg-white text-black font-semibold text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
                   Get in Touch <ArrowRight size={18} />
                 </a>
                 <a href="/cv.pdf" download className="w-full sm:w-auto border border-white/20 text-white/70 text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:border-white/40 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group">
                   <Download size={18} className="text-white/40 group-hover:text-white transition-all" /> Download CV
                 </a>
               </Reveal>
             </div>
             <div className="absolute bottom-10 w-full text-center text-white/15 hover:text-white/30 transition-all duration-1000 text-[9px] md:text-[10px] uppercase font-medium z-10 px-6 cursor-default tracking-[0.4em]">
               HARSH KUMAR SINGH <span className="mx-2 md:mx-4">·</span> MERN DEVELOPER <span className="mx-2 md:mx-4">·</span> LPU <span className="mx-2 md:mx-4">·</span> 2025
             </div>
           </section>

        </div>
      </InfiniteGridBackground>
    </main>
  );
}
