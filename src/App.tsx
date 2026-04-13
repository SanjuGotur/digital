import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Cpu, 
  Rocket, 
  Search, 
  Layers, 
  TrendingUp,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  PenTool,
  Zap,
  Globe,
  Award,
  ShieldCheck,
  Target,
  ClipboardList,
  Users,
  Search as SearchIcon,
  Home,
  Building2,
  HeartPulse,
  Music,
  Leaf,
  Palmtree,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = ({ onOpenOnboarding }: { onOpenOnboarding: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-black tracking-tighter">
            BRAND<span className="text-brand-red">URVA</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand-red transition-colors">
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenOnboarding}
            className="px-5 py-2.5 bg-brand-red text-white rounded-full hover:bg-brand-red/90 transition-all glow-red button-glow-hover"
          >
            Get Free Audit
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-bold hover:text-brand-red transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <div className="space-y-4">
                <a 
                  href="tel:+919742913646"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors w-full text-left"
                >
                  <Phone size={18} className="text-brand-red" />
                  <span className="text-sm font-medium">+91 9742913646</span>
                </a>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    onOpenOnboarding();
                  }}
                  className="block w-full py-4 bg-brand-red text-white text-center font-bold rounded-xl glow-red"
                >
                  Get Free Audit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenOnboarding }: { onOpenOnboarding: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-brand-black via-brand-black to-brand-red/5 animate-gradient-slow">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] floating-glow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] floating-glow" style={{ animationDelay: '-5s' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-bold uppercase tracking-widest mb-8 mt-12 shadow-[0_0_15px_rgba(255,59,59,0.1)]">
              <Sparkles size={12} className="text-brand-red" />
              AI-Powered Digital Marketing Agency
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 tracking-tighter [text-shadow:0_0_30px_rgba(255,59,59,0.2)]">
              Where Brands <br className="hidden sm:block" />
              <span className="text-brand-red italic">Grow Smarter,</span> <br className="hidden sm:block" />
              Not Just Louder
            </h1>
            
            <p className="text-base md:text-lg text-white/60 mb-10 leading-relaxed max-w-xl">
              At BRANDURVA, we combine smart AI with creative strategy to help your brand grow and thrive. Our team builds digital plans that do more than just get noticed—they find the right customers, drive real growth, and help you lead your market with confidence.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-10 py-4">
              <div className="flex -space-x-3 shrink-0">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-black bg-white/10 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/40/40`} alt="Client" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center gap-4 font-display font-bold text-xs uppercase tracking-wider">
                <div className="text-brand-red">25+ Clients</div>
                <div className="w-px h-6 bg-white/10" />
                <div className="text-white/90">30K+ Leads Generated</div>
                <div className="w-px h-6 bg-white/10" />
                <div className="text-brand-red">2X ROI</div>
              </div>

              {/* Mobile Layout (Matching Image) */}
              <div className="flex md:hidden items-center gap-3 font-display font-bold text-[10px] uppercase tracking-wider">
                <div className="flex flex-col gap-0.5">
                  <div className="text-brand-red">25+ Clients</div>
                  <div className="text-white/90">Generated</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col gap-0.5">
                  <div className="text-white/90">30K+ Leads</div>
                  <div className="text-brand-red">2X ROI</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpenOnboarding}
                className="px-8 py-4 bg-brand-red text-white font-bold rounded-xl transition-all glow-red button-glow-hover flex items-center justify-center gap-2"
              >
                Get Free Audit <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Right Side: AI Performance Dashboard (The "Graph") */}
          <div className="flex items-center justify-center relative h-[450px] md:h-[600px] mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-lg glass-card p-6 md:p-8 rounded-[30px] md:rounded-[40px] border border-white/10 shadow-2xl overflow-hidden group"
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/20 flex items-center justify-center text-brand-red">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-black uppercase tracking-wider">AI Performance Dashboard</h4>
                    <p className="text-[10px] text-white/40">Real-time Optimization</p>
                  </div>
                </div>
              </div>

              {/* Progress Bars (The "Percentage of Performance") */}
              <div className="space-y-8">
                {[
                  { label: 'BRANDING', pct: 90 },
                  { label: 'PERFORMANCE', pct: 45 },
                  { label: 'STRATEGY', pct: 95 }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-white/60">{item.label}</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                        className="h-full bg-brand-red rounded-full glow-red"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl group-hover:bg-brand-red/20 transition-colors duration-700" />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative">
              <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img 
                src="/aipowered.jpeg" 
                alt="Digital Marketing Dashboard" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
            </div>
            
            {/* Bottom Right Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-card p-4 sm:p-8 rounded-2xl max-w-[200px] sm:max-w-xs border border-brand-red/20 glow-red z-20">
              <h4 className="text-brand-red font-display font-black text-xl sm:text-3xl mb-1">AI-Driven</h4>
              <p className="text-[10px] sm:text-sm text-white/60 font-medium">Performance focused digital marketing agency.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">
              We Don't Just Market. <br />
              We <span className="text-brand-red">Optimize</span> with Intelligence.
            </h3>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              BRANDURVA is an AI-based, performance-focused digital marketing agency. We leverage cutting-edge artificial intelligence for audience analysis, ad optimization, content planning, and performance tracking.
            </p>
            <div className="space-y-4">
              {[
                "Real business results, not just likes.",
                "AI-powered audience deep-dives.",
                "Dynamic ad performance optimization.",
                "Strategic content planning with data."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-display font-bold text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const stats = [
    { value: "3.5X", label: "Revenue Growth", desc: "Average increase in client revenue within 6 months" },
    { value: "75%", label: "Lead Increase", desc: "Average growth in qualified leads generated" },
    { value: "45%", label: "Cost Reduction", desc: "Decrease in cost per acquisition across campaigns" }
  ];

  return (
    <section className="py-20 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-black tracking-tight"
          >
            Our <span className="text-brand-red">Results</span>
          </motion.h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-3"
            >
              <div className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-brand-red uppercase tracking-widest">{stat.label}</div>
              <p className="text-white/40 text-xs max-w-[220px] mx-auto leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Designing",
      desc: "Futuristic visual identities and high-converting creative assets that command attention.",
      image: "/design.png",
    },
    {
      title: "Social Media Handling",
      desc: "Complete management of your social presence with data-driven content and engagement.",
      image: "/social.png",
    },
    {
      title: "Lead Generation",
      desc: "AI-targeted campaigns that fill your pipeline with high-quality, ready-to-buy prospects.",
      image: "/lead.avif", // Data/Analytics for Lead Gen
    },
    {
      title: "Digital Marketing",
      desc: "Comprehensive 360° digital growth strategies to dominate your market online.",
      image: "/digital.avif", // Classic Digital Marketing
    },
    {
      title: "Branding & Promotion",
      desc: "Strategic brand positioning that builds authority and long-term market dominance.",
      image: "/branding.png",
    },
    {
      title: "Video Production",
      desc: "High-end cinematic video content that tells your brand story with impact.",
      image: "/pramotion.jpg", // Professional cinematography
    },
    {
      title: "Business Strategy",
      desc: "Data-backed strategic roadmaps to scale your business in the digital age.",
      image: "/business.png", // Elite fitness/wellness
    },
     {
      title: "SEO",
      desc: "Search Engine Optimization to boost your visibility and drive organic traffic to your business.",
      image: "/seo.png",
    },
    {
      title: "Website Development",
      desc: "Custom, high-performance websites built with cutting-edge technology to convert visitors into customers.",
      image: "/website.avif",
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight">The AI Growth <span className="text-brand-red">Ecosystem</span></h3>
        </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-6 sm:p-8 rounded-3xl group hover:border-brand-red/50 transition-all duration-500"
            >
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500 border border-white/10 relative">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-all duration-500 brightness-125 contrast-110 group-hover:brightness-135 group-hover:contrast-115"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-brand-red transition-colors">{s.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Analyze Business", desc: "Deep dive into your current metrics and market position.", icon: SearchIcon },
    { title: "Define Goals", desc: "Setting clear, measurable KPIs for your growth journey.", icon: Target },
    { title: "Set Action Plan", desc: "AI-powered strategy mapping for maximum efficiency.", icon: ClipboardList },
    { title: "Run Campaigns", desc: "Executing high-performance campaigns and content.", icon: Rocket },
    { title: "Generate Leads", desc: "Capturing and nurturing high-intent prospects.", icon: Users },
    { title: "Grow with Results", desc: "Scaling what works based on real-time data.", icon: TrendingUp }
  ];

  return (
    <section id="process" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">The Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black">How We Drive Growth</h3>
        </div>
        
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-black border-2 border-brand-red/30 flex items-center justify-center font-display font-black text-brand-red mx-auto mb-4 sm:mb-6 group-hover:bg-brand-red group-hover:text-white transition-all glow-red relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon size={24} className="relative z-10 group-hover:scale-110 transition-transform" />
                  <div className="absolute -bottom-1 -right-1 text-[10px] opacity-20 group-hover:opacity-40 transition-opacity">0{i+1}</div>
                </div>
                <h4 className="font-bold text-sm sm:text-base mb-2 group-hover:text-brand-red transition-colors">{step.title}</h4>
                <p className="text-[10px] sm:text-xs text-white/40 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { 
      name: "Construction", 
      image: "/conexp.avif" 
    },
    { 
      name: "Real Estate", 
      image: "/realexp.avif" 
    },
    { 
      name: "Health & Wellness", 
      image: "/healthexp.avif" 
    },
    { 
      name: "Education", 
      image: "/learnexp.avif" 
    },
    { 
      name: "Local Businesses", 
      image: "/localexp.avif" 
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Industries Served</h2>
          <h3 className="text-3xl md:text-4xl font-display font-black">Expertise Across Diverse Sectors</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl flex flex-col items-center text-center gap-4 hover:border-brand-red/30 transition-all group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-brand-black/20 z-10" />
                <div className="absolute top-3 left-0 right-0 z-20 px-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-brand-red transition-colors">{ind.name}</span>
                </div>
                <img 
                  src={ind.image} 
                  alt={ind.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 group-hover:brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-sm sm:text-base leading-tight relative z-20 group-hover:text-brand-red transition-colors">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoItem = ({ src, isUnmuted, onToggleMute }: { src: string, isUnmuted: boolean, onToggleMute: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  // Sync video muted state with isUnmuted prop
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isUnmuted;
    }
  }, [isUnmuted]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current && !isUnmuted) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
    onToggleMute();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isNaN(videoRef.current.duration)) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current && progressRef.current && !isNaN(videoRef.current.duration)) {
      const rect = progressRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  return (
    <div 
      className="relative group/video w-full h-full bg-black overflow-hidden cursor-pointer"
      onClick={() => togglePlay()}
    >
      <video 
        ref={videoRef}
        src={src} 
        className="w-full h-full block object-cover"
        playsInline
        loop
        muted={!isUnmuted}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onError={() => {
          console.error(`Video failed to load: ${src}`);
          setHasError(true);
        }}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-black/80 text-white p-4 text-center">
          <div className="text-brand-red mb-2">
            <VolumeX size={48} className="opacity-50" />
          </div>
          <p className="text-sm font-medium">Video not available</p>
          <p className="text-xs text-gray-400 mt-1">Please ensure {src} is uploaded</p>
        </div>
      )}
      
      {/* Custom Controls Overlay */}
      <div className={cn(
        "absolute inset-0 bg-black/30 transition-opacity flex flex-col justify-end p-3",
        isPlaying ? "opacity-0 group-hover/video:opacity-100" : "opacity-100"
      )}>
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-4">
            <button 
              onClick={togglePlay}
              className="text-white hover:text-brand-red transition-colors"
            >
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
            </button>
          </div>
          
          <button 
            onClick={toggleMute}
            className="text-white hover:text-brand-red transition-colors"
          >
            {!isUnmuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
        
        {/* Playback Option (Clickable Progress Bar) */}
        <div 
          ref={progressRef}
          onClick={handleSeek}
          className="w-full h-3 bg-white/20 rounded-full overflow-hidden cursor-pointer hover:h-4 transition-all"
        >
          <div 
            className="h-full bg-brand-red transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Large Play Icon when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 bg-brand-red/80 rounded-full flex items-center justify-center text-white">
            <Play size={32} fill="currentColor" className="ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCarousel = ({ projects, title, subtitle, type, activeAudioId, onToggleMute, aspectRatio = "aspect-[3/4]" }: { 
  projects: any[], 
  title: string, 
  subtitle: string, 
  type: 'image' | 'video',
  activeAudioId?: number | null,
  onToggleMute?: (id: number) => void,
  aspectRatio?: string
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12 last:mb-0">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-2 block">{subtitle}</span>
          <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight">{title}</h3>
        </motion.div>
      </div>

      <div className="relative group/carousel">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-30 opacity-0 group-hover/carousel:opacity-100 transition-all flex items-center justify-center text-white px-2 disabled:hidden"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={48} strokeWidth={3} />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-30 opacity-0 group-hover/carousel:opacity-100 transition-all flex items-center justify-center text-white px-2"
          aria-label="Scroll Right"
        >
          <ChevronRight size={48} strokeWidth={3} />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-6 md:px-[calc((100vw-1280px)/2+24px)] snap-x snap-mandatory pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex-none w-[200px] md:w-[280px] snap-start group/item"
            >
              <div className={cn(
                "relative rounded-2xl overflow-hidden bg-brand-black shadow-2xl transition-all duration-500 group-hover/item:z-20 group-hover/item:scale-105 group-hover/item:shadow-[0_0_30px_rgba(255,59,59,0.3)] border border-white/10 group-hover/item:border-brand-red/50",
                aspectRatio
              )}>
                {type === 'video' ? (
                  <VideoItem 
                    src={project.src} 
                    isUnmuted={activeAudioId === project.id}
                    onToggleMute={() => onToggleMute?.(project.id)}
                  />
                ) : (
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover block transition-transform duration-700 group-hover/item:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </motion.div>
          ))}
          <div className="flex-none w-12 md:w-[calc((100vw-1280px)/2+24px)]" />
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeAudioId, setActiveAudioId] = useState<number | null>(null);

  const imageProjects = [
    { id: 1, title: "Harshitha Wellness", category: "Health & Wellness", img: "/hwpost.png" },
    { id: 2, title: "Bluz Waterfront", category: "Real Estate", img: "/bluz.png" },
    { id: 3, title: "Shape & Shine", category: "Health & Wellness", img: "/livlong1.png" },
    { id: 4, title: "Wellness Program", category: "Health & Wellness", img: "/harshita1.jpeg" },
    { id: 5, title: "Chan Constructions", category: "Construction", img: "/chc.png" },
    { id: 6, title: "Body Transformation", category: "Health & Wellness", img: "/harshita2.jpeg" },
    { id: 11, title: "Pink Onion", category: "Food & Beverage", img: "/pinkonion.jpeg" },
  ];

  const videoProjects = [
    { id: 7, title: "Livlong Insurance", category: "Insurance", src: "/videos/video.mp4" },
    { id: 8, title: "Brand Story", category: "Promotion", src: "/videos/video1.mp4" },
    { id: 9, title: "Success Highlights", category: "Marketing", src: "/videos/video2.mp4" }
  ];

  return (
    <section id="portfolio" className="relative bg-brand-black py-20 overflow-hidden">
      <ProjectCarousel 
        projects={imageProjects} 
        title="Our Promotion" 
        subtitle="Visuals" 
        type="image" 
        aspectRatio="aspect-[3/4]"
      />
      <div className="h-8" /> {/* Spacer between sections */}
      <ProjectCarousel 
        projects={videoProjects} 
        title="Videos" 
        subtitle="Promotion" 
        type="video" 
        aspectRatio="aspect-[9/16]"
        activeAudioId={activeAudioId}
        onToggleMute={(id) => setActiveAudioId(activeAudioId === id ? null : id)}
      />
    </section>
  );
};

const ContentConverts = () => {
  const items = [
    { title: "Content Creation", desc: "High-quality visuals and copy that resonate with your audience." },
    { title: "Content Distribution", desc: "Getting your message in front of the right eyes at the right time." },
    { title: "Sales Funnel Strategy", desc: "Optimizing the journey from first touch to final conversion." },
    { title: "Consistency", desc: "Maintaining a powerful brand presence that builds lasting trust." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Strategy</h2>
            <h3 className="text-4xl md:text-5xl font-display font-black mb-8">Content That <span className="text-brand-red italic underline decoration-2 underline-offset-8">Converts</span></h3>
            <p className="text-lg text-white/60 mb-10">
              We don't just create content; we build conversion engines. Every piece of content is strategically designed to guide your prospects through a seamless sales funnel.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {items.map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass-card p-12 rounded-[40px] relative z-10">
              <div className="space-y-8">
                <div className="flex items-center justify-between font-display">
                  <span className="text-white/60 font-medium">Engagement</span>
                  <span className="text-brand-red font-black">+85%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full">
                  <div className="h-full w-[85%] bg-brand-red rounded-full glow-red" />
                </div>
                <div className="flex items-center justify-between font-display">
                  <span className="text-white/60 font-medium">Conversion Rate</span>
                  <span className="text-brand-red font-black">+42%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full">
                  <div className="h-full w-[42%] bg-brand-red rounded-full glow-red" />
                </div>
                <div className="flex items-center justify-between font-display">
                  <span className="text-white/60 font-medium">Brand Authority</span>
                  <span className="text-brand-red font-black">+94%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full">
                  <div className="h-full w-[94%] bg-brand-red rounded-full glow-red" />
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  const [failedLogos, setFailedLogos] = useState<Record<number, boolean>>({});
  
  const logos = [
    { id: 1, name: "Harshitha Wellness", src: "/clients_logo/harshiatalogo.jpeg" },
    { id: 2, name: "Creative", src: "/clients_logo/creative.jpeg" },
    { id: 3, name: "Aarambh", src: "/clients_logo/arambh.jpeg" },
    { id: 4, name: "Saptagiri", src: "/clients_logo/saptagiri.jpeg" },
    { id: 5, name: "Livlong", src: "/clients_logo/livlonglo.png" },
    { id: 6, name: "JN Associate", src: "/clients_logo/jnassociate.jpeg" },
    { id: 7, name: "Stories by RK", src: "/clients_logo/storiesbyrk.jpeg" },
    { id: 8, name: "Unlock", src: "/clients_logo/unlock.jpeg" },
    { id: 9, name: "Chan Constructions", src: "/clients_logo/chanl.png" }
  ];

  return (
    <section className="py-24 bg-brand-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-white/40 text-sm font-bold uppercase tracking-[0.3em]">Trusted by Industry Leaders</h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-12">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`}
              className="mx-12 flex items-center justify-center min-w-[150px]"
            >
              {!failedLogos[index] ? (
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    setFailedLogos(prev => ({ ...prev, [index]: true }));
                  }}
                />
              ) : (
                <span className="text-white/60 font-bold text-xl">{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onOpenOnboarding }: { onOpenOnboarding: () => void }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-red/5" />
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-6 md:mb-8 leading-tight">
          Ready to Grow Your <br className="hidden sm:block" /> Business with <span className="text-brand-red">AI?</span>
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Stop guessing and start growing. Join the next generation of businesses using AI-powered marketing to dominate their market.
        </p>
        <button 
          onClick={onOpenOnboarding}
          className="px-12 py-6 bg-brand-red text-white text-xl font-bold rounded-2xl hover:scale-105 transition-transform glow-red"
        >
          Get Free Audit Now
        </button>
      </div>
    </section>
  );
};

const OnboardingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { register, handleSubmit, watch } = useForm();
  const selectedCategories = watch("categories") || [];
  const selectedGoals = watch("goals") || [];
  const selectedDuration = watch("duration");

  const isOtherCategory = Array.isArray(selectedCategories) ? selectedCategories.includes("Other") : selectedCategories === "Other";
  const isOtherGoal = Array.isArray(selectedGoals) ? selectedGoals.includes("Other") : selectedGoals === "Other";
  const isOtherDuration = selectedDuration === "Other";
  
  const onSubmit = (data: any) => {
    const categories = Array.isArray(data.categories) ? data.categories.join(', ') : (data.categories || 'None');
    const goals = Array.isArray(data.goals) ? data.goals.join(', ') : (data.goals || 'None');
    
    let message = `*Digital Marketing Client Onboarding Form*%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Business Name:* ${data.businessName}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Website:* ${data.website || 'N/A'}%0A` +
      `*Location:* ${data.location}%0A` +
      `*Category:* ${categories}%0A`;
    
    if (isOtherCategory && data.otherCategory) {
      message += `  - _Other Category Details:_ ${data.otherCategory}%0A`;
    }

    message += `*Goals:* ${goals}%0A`;
    
    if (isOtherGoal && data.otherGoal) {
      message += `  - _Other Goal Details:_ ${data.otherGoal}%0A`;
    }

    message += `*Duration:* ${data.duration}%0A`;

    if (isOtherDuration && data.otherDuration) {
      message += `  - _Other Duration Details:_ ${data.otherDuration}%0A`;
    }
    
    window.open(`https://wa.me/919742913646?text=${message}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            className="relative w-full max-w-2xl glass-card p-6 sm:p-8 md:p-12 rounded-[30px] sm:rounded-[40px] border border-white/10 shadow-2xl my-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>
            
            <div className="mb-10">
              <h3 className="text-3xl font-display font-black mb-4">Enquiry</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                To help us understand your business and set up your marketing strategy smoothly, please fill out this form.
              </p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Your Name *</label>
                  <input {...register("name", { required: true })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Business Name *</label>
                  <input {...register("businessName", { required: true })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all" placeholder="Business Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Phone Number *</label>
                  <input {...register("phone", { required: true })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all" placeholder="Phone Number" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Email Address *</label>
                  <input {...register("email", { required: true })} type="email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all" placeholder="Email Address" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Website (if available)</label>
                  <input {...register("website")} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all" placeholder="www.example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Business Location *</label>
                  <input {...register("location", { required: true })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all" placeholder="City, State" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-white/80 ml-1">Business Category *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Retail", "Fashion & Apparel", "Food & Beverage", "Beauty & Personal Care", "Real Estate", "Health & Wellness", "Education", "Automobile", "Home & Living", "Events & Entertainment", "Technology / IT Services", "Finance & Insurance", "Travel & Hospitality", "Manufacturing / Industrial", "E-commerce", "Service-Based Business", "Other"].map(cat => (
                    <label key={cat} className="flex items-start gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all min-h-[56px]">
                      <input type="checkbox" value={cat} {...register("categories")} className="w-4 h-4 accent-brand-red mt-0.5 shrink-0" />
                      <span className="text-xs text-white/70 leading-relaxed">{cat}</span>
                    </label>
                  ))}
                </div>
                <AnimatePresence>
                  {isOtherCategory && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <textarea {...register("otherCategory", { required: true })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all min-h-[80px] text-sm mt-2" placeholder="Specify other category..." />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-white/80 ml-1">Marketing Goals *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Brand Awareness", "Lead Generation", "Sales / Conversions", "Social Media Growth", "Website Traffic", "Event Promotion", "Other"].map(goal => (
                    <label key={goal} className="flex items-start gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all min-h-[56px]">
                      <input type="checkbox" value={goal} {...register("goals")} className="w-4 h-4 accent-brand-red mt-0.5 shrink-0" />
                      <span className="text-xs text-white/70 leading-relaxed">{goal}</span>
                    </label>
                  ))}
                </div>
                <AnimatePresence>
                  {isOtherGoal && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <textarea {...register("otherGoal", { required: true })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all min-h-[80px] text-sm mt-2" placeholder="Specify other marketing goals..." />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-white/80 ml-1">What duration of marketing support are you looking for? *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Short Term (1–3 months)", "Medium Term (3–6 months)", "Long Term (6+ months)", "Not Sure Yet", "Other"].map(dur => (
                    <label key={dur} className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all">
                      <input type="radio" value={dur} {...register("duration", { required: true })} className="w-4 h-4 accent-brand-red" />
                      <span className="text-xs text-white/70">{dur}</span>
                    </label>
                  ))}
                </div>
                <AnimatePresence>
                  {isOtherDuration && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <textarea {...register("otherDuration", { required: true })} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-red outline-none transition-all min-h-[80px] text-sm mt-2" placeholder="Specify other duration details..." />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button className="w-full py-6 bg-brand-red text-white text-xl font-bold rounded-2xl hover:scale-[1.02] transition-transform glow-red shadow-lg shadow-brand-red/20">
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Contact = ({ onOpenOnboarding }: { onOpenOnboarding: () => void }) => {
  return (
    <section id="contact" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-8">Let's Build Your <br /> Business Together</h3>
            
            <div className="space-y-8 mb-12">
              <a 
                href="tel:+919742913646"
                className="flex items-center gap-6 text-left group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-lg shadow-brand-red/5 group-hover:shadow-brand-red/20">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1 font-display font-bold uppercase tracking-widest">Call Us Directly</div>
                  <div className="text-xl font-display font-black group-hover:text-brand-red transition-colors">+91 9742913646</div>
                </div>
              </a>
            </div>
            
            <div className="flex gap-4">
              <a href="https://www.instagram.com/brandurva?igsh=OXh0a3hmOGI3dzRu" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all hover:scale-110 shadow-lg hover:shadow-brand-red/20">
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/919742913646" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all hover:scale-110 shadow-lg hover:shadow-brand-red/20"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L22 2l-2.5 4.5Z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <button 
              onClick={onOpenOnboarding}
              className="group relative p-8 sm:p-12 md:p-16 glass-card rounded-[30px] sm:rounded-[40px] border border-white/10 hover:border-brand-red/50 transition-all text-center max-w-md w-full"
            >
              <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]" />
              <div className="w-20 h-20 bg-brand-red/10 rounded-3xl flex items-center justify-center text-brand-red mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Mail size={40} />
              </div>
              <h4 className="text-3xl font-display font-black mb-4">Enquiry</h4>
              <p className="text-white/40 mb-8 leading-relaxed">
                Fill out our onboarding form and we'll get back to you with a tailored strategy.
              </p>
              <div className="inline-flex items-center gap-2 text-brand-red font-bold group-hover:gap-4 transition-all">
                Get Free Audit <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <span className="text-xl font-display font-black tracking-tighter">
            BRAND<span className="text-brand-red">URVA</span>
          </span>
        </div>
        
        <div className="text-white/40 text-sm">
          © 2026 BRANDURVA. All rights reserved. Designed for the future.
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-red selection:text-white">
      <Navbar onOpenOnboarding={() => setShowOnboarding(true)} />
      <main>
        <Hero onOpenOnboarding={() => setShowOnboarding(true)} />
        <About />
        <Results />
        <Services />
        <Process />
        <Industries />
        <Portfolio />
        <ContentConverts />
        <Clients />
        <CTA onOpenOnboarding={() => setShowOnboarding(true)} />
        <Contact onOpenOnboarding={() => setShowOnboarding(true)} />
      </main>
      <Footer />
      <OnboardingModal isOpen={showOnboarding} onClose={() => setShowOnboarding(false)} />
    </div>
  );
}
