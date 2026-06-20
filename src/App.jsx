import { useState, useRef, useEffect } from "react";
import { 
  ArrowRight, Lightbulb, Users, Code2, 
  Megaphone, Globe2, GraduationCap, Leaf, Instagram, Youtube, Send, Menu, X,
  Volume2, VolumeX
} from "lucide-react";

import aboutCrowd from "./assets/gen-z-janasena.png";
import campaignGreen from "./assets/campaign_green.png";
import campaignEducation from "./assets/campaign_education.png";
import campaignYouth from "./assets/campaign_youth.png";
import campaignDigital from "./assets/campaign_digital.png";
import headerLogo from "./assets/header_logo.jpg";
import genzVideo from "./assets/genzvideo.mp4";
import ideologyImage from "./assets/idealogy1.png";
import innovationImage from "./assets/innovation.png";
import revolutionImage from "./assets/revolu.png";
import freedomImage from "./assets/freedom1.png";

const navItems = ["Home", "About", "Vision", "Innovation", "Campaigns", "Media", "Contact"];

const popupThemes = {
  Ideology: {
    title: "text-blue-600",
    highlight: "bg-blue-50 text-blue-900",
    quote: "border-blue-200 bg-blue-50",
  },
  Innovation: {
    title: "text-orange-500",
    highlight: "bg-orange-50 text-orange-900",
    quote: "border-orange-200 bg-orange-50",
  },
  Revolution: {
    title: "text-green-600",
    highlight: "bg-green-50 text-green-900",
    quote: "border-green-200 bg-green-50",
  },
  Freedom: {
    title: "text-blue-600",
    highlight: "bg-blue-50 text-blue-900",
    quote: "border-blue-200 bg-blue-50",
  },
};

const values = [
  {
    image: ideologyImage,
    title: "Ideology",
    titleClass: "text-sky-300",
    text: "Clear Vision. Ethical Leadership. Stronger Society.",
    body:
      "GEN Z JANASENA believes that true change begins with strong values and responsible leadership. Inspired by the principles of JanaSena, we encourage young people to think independently, act ethically, and work towards the betterment of society. Our ideology is rooted in service, accountability, patriotism, and social justice. We aim to build a generation that leads with integrity, stands for truth, and contributes to creating a stronger, more inclusive nation.",
    quote:
      "Strong Ideology Creates Strong Leaders. Strong Leaders Create Strong Nations.",
  },
  {
    image: innovationImage,
    title: "Innovation",
    titleClass: "text-orange-300",
    text: "Technology-Driven Youth Solutions for Tomorrow.",
    body:
      "GEN Z JANASENA believes that innovation is the key to solving today's challenges and building a better future. We encourage young minds to embrace technology, creativity, and entrepreneurship to create impactful solutions for society. By promoting digital skills, startup culture, research, and problem-solving, we aim to empower youth to become innovators who drive progress and transformation. Innovation is not just about technology - it's about finding smarter ways to improve lives, strengthen communities, and contribute to nation-building.",
    quote:
      "Innovation transforms ideas into action, and action transforms the future.",
  },
  {
    image: revolutionImage,
    title: "Revolution",
    titleClass: "text-emerald-300",
    text: "Bold Change. Fearless Action. Breaking Barriers.",
    body:
      "GEN Z JANASENA believes that revolution is not about destruction - it is about transformation. It is the courage to challenge outdated systems, break barriers, and create opportunities for a better future. Inspired by the spirit of JanaSena, we encourage young people to become changemakers who stand up for justice, equality, and progress. Our revolution is driven by ideas, service, and action. We believe that when youth unite with purpose and determination, they can transform communities, inspire society, and shape the future of the nation.",
    quote:
      "Revolution is not the power to destroy - it is the courage to transform.",
  },
  {
    image: freedomImage,
    title: "Freedom",
    titleClass: "text-cyan-300",
    text: "Voice, Rights, and Equal Opportunity for All.",
    body:
      "GEN Z JANASENA believes that true freedom is more than just a right - it is the foundation of a strong and democratic society. Every young individual deserves the freedom to express ideas, pursue opportunities, and contribute to the nation's progress without discrimination or barriers. Inspired by the principles of justice, equality, and empowerment, we encourage youth to raise their voices responsibly, protect democratic values, and work towards a society where everyone has equal opportunities to succeed. Freedom empowers individuals, and empowered individuals build a stronger nation.",
    quote:
      "Freedom gives us a voice. Responsibility gives that voice purpose.",
  },
];

const hub = [
  {
    icon: Lightbulb,
    title: "Startup Ideas",
    text: "Turn your startup idea into a life-changing movement.",
    tone: "from-white to-blue-50",
    accent: "text-blue-600",
    border: "border-blue-200/70",
  },
  {
    icon: Users,
    title: "Social Projects",
    text: "Solve real-world problems and create lasting impact.",
    tone: "from-white to-emerald-50",
    accent: "text-emerald-600",
    border: "border-emerald-200/70",
  },
  {
    icon: Code2,
    title: "Tech Innovation",
    text: "Code. Build. Innovate. Transform the future with technology.",
    tone: "from-white to-orange-50",
    accent: "text-orange-500",
    border: "border-orange-200/70",
  },
  {
    icon: Megaphone,
    title: "Digital Campaigns",
    text: "Raise your voice. Spread awareness. Inspire millions online.",
    tone: "from-white to-rose-50",
    accent: "text-rose-600",
    border: "border-rose-200/70",
  },
];

const campaigns = [
  { icon: Leaf, title: "Green Tomorrow", text: "Plant today for a better tomorrow.", image: campaignGreen },
  { icon: GraduationCap, title: "Education For All", text: "Quality education is everyone’s right.", image: campaignEducation },
  { icon: Users, title: "Voice Of Youth", text: "Your voice can change the world.", image: campaignYouth },
  { icon: Globe2, title: "Digital India 2.0", text: "Building a digitally empowered nation.", image: campaignDigital },
];

function Button({ children, variant = "primary", onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition duration-300 cursor-pointer ${
        variant === "primary"
          ? "bg-red-700 text-white shadow-lg shadow-red-900/25 hover:bg-red-800"
          : "border border-neutral-300 bg-white/80 text-neutral-900 hover:border-red-700 hover:text-red-700"
      }`}
    >
      {children}
      <ArrowRight size={14} className="transition group-hover:translate-x-1" />
    </button>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-md border border-neutral-200">
        <img 
          src={headerLogo} 
          alt="Gen Z Janasena Logo" 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="leading-none text-left">
        <div className="text-lg font-black tracking-[0.2em]">GEN Z</div>
        <div className="text-[10px] font-bold tracking-[0.25em] text-neutral-600">JANASENA</div>
      </div>
    </div>
  );
}

function HeroMark() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (!isMuted) {
        videoRef.current.play().catch(err => {
          console.warn("Autoplay / sound playback was blocked by the browser:", err);
        });
      }
    }
  }, [isMuted]);

  return (
    <div className="relative mx-auto mb-8 grid h-80 w-80 place-items-center sm:h-96 sm:w-96">
      {/* Outer circular compass lines */}
      <div className="absolute inset-0 rounded-full border border-red-200/50 animate-spin-slow" />
      <div className="absolute inset-8 rounded-full border border-dashed border-neutral-200" />
      <div className="absolute inset-16 rounded-full border border-neutral-300/40" />
      
      {/* Translucent Backdrop Layer */}
      <div className="absolute h-56 w-56 rounded-full border border-white/60 bg-white/40 shadow-2xl backdrop-blur-md sm:h-68 sm:w-68" />
      
      {/* GZ Video Rendered in center */}
      <div className="absolute z-20 h-60 w-60 sm:h-72 sm:w-72 overflow-hidden rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-[1.03] border-4 border-red-700 shadow-xl group">
        <video 
          ref={videoRef}
          src={genzVideo} 
          autoPlay 
          loop 
          playsInline
          className="h-full w-full object-cover select-none"
        />
      </div>

      {/* Sound Mute/Unmute Toggle Button - placed outside video wrapper to prevent circular border clipping */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-[68px] right-[68px] sm:top-[88px] sm:right-[88px] z-30 p-2.5 rounded-full bg-red-700 text-white shadow-lg border border-red-800 transition duration-200 hover:bg-red-800 hover:scale-110 cursor-pointer flex items-center justify-center"
        title={isMuted ? "Unmute Video" : "Mute Video"}
      >
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </button>
      
      {/* Glowing bottom shadow */}
      <div className="absolute -bottom-6 h-12 w-48 rounded-full bg-red-600/20 blur-2xl" />
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePopupImage, setActivePopupImage] = useState(null);
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  return (
    <main className="min-h-screen bg-white text-neutral-950 font-sans selection:bg-red-700 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-100/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-neutral-700 transition duration-200 hover:text-red-700 relative group"
              >
                {item}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-red-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden lg:block">
            {activePage === "home" ? (
              <Button onClick={() => setActivePage("join")}>Join Now</Button>
            ) : (
              <Button variant="secondary" onClick={() => setActivePage("home")}>Back Home</Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="block lg:hidden text-neutral-900 cursor-pointer"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="border-t border-neutral-200 bg-neutral-100 px-5 py-6 lg:hidden animate-in fade-in duration-300">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs font-extrabold uppercase tracking-[0.22em] text-neutral-800 hover:text-red-700"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-100">
                {activePage === "home" ? (
                  <Button onClick={() => { setActivePage("join"); setIsMenuOpen(false); }}>Join Now</Button>
                ) : (
                  <Button variant="secondary" onClick={() => { setActivePage("home"); setIsMenuOpen(false); }}>Back Home</Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      {activePage === "home" ? (
        <>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-mesh-light px-5 py-20 text-center">
        {/* Social Icons floating on left (desktop) */}
        <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-6 text-neutral-800 md:flex z-20">
          <a href="https://www.instagram.com/janasenaparty?igsh=bGZvc2drcGJwZ2wy" target="_blank" rel="noreferrer" className="transition duration-200 hover:text-red-700 hover:scale-110">
            <Instagram size={18} />
          </a>
          <a href="https://x.com/JanaSenaParty" target="_blank" rel="noreferrer" className="text-sm font-black transition duration-200 hover:text-red-700 hover:scale-110">
            X
          </a>
          <a href="https://www.youtube.com/@JanaSenaParty" target="_blank" rel="noreferrer" className="transition duration-200 hover:text-red-700 hover:scale-110">
            <Youtube size={18} />
          </a>
          <div className="h-16 w-[1px] bg-neutral-300 mx-auto mt-2" />
          <span className="text-[10px] font-black uppercase tracking-[0.25em] vertical-text select-none text-neutral-400">
            POWERED BY YOUTH
          </span>
        </div>

        {/* Right side floating vertical banner text */}
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 md:flex flex-col z-20">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] vertical-text select-none text-neutral-400">
            DRIVEN BY IDEALS
          </span>
          <div className="h-16 w-[1px] bg-neutral-300 mx-auto mt-2" />
        </div>

        <div className="mx-auto max-w-5xl relative z-10">
          <HeroMark />
          <div className="flex flex-col items-center">
            <h1 className="font-hero text-5xl font-semibold leading-none tracking-[0.12em] text-black sm:text-7xl">
              <span>Gen</span> <span className="text-red-700">Z</span> <span>Janasena</span>
            </h1>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-4 text-[11px] font-black uppercase tracking-[0.25em] text-neutral-500">
            <span>Ideology</span>
            <span className="text-red-700">•</span>
            <span>Innovation</span>
            <span className="text-red-700">•</span>
            <span>Revolution</span>
            <span className="text-red-700">•</span>
            <span>Freedom</span>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm font-medium leading-7 text-neutral-600">
            A youth-powered movement redefining the future of leadership, technology, and social change.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button onClick={() => setActivePage("join")}>Join The Movement</Button>
            <Button variant="secondary">Explore Vision</Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="vision" className="bg-neutral-50 mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ image, title, titleClass, text, body, quote }) => (
          <button
            key={title} 
            type="button"
            onClick={() => setActivePopupImage({ src: image, title, text, body, quote })}
            className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative">
              <img 
                src={image} 
                alt={title} 
                className="h-[320px] w-full object-cover select-none transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 top-0 p-5 text-white">
                <h3 className={`text-xl font-black uppercase tracking-[0.16em] ${titleClass} drop-shadow-lg`}>{title}</h3>
              </div>
            </div>
            <div className="space-y-3 p-5">
              <p className="text-sm leading-6 text-neutral-600">{text}</p>
              <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${title === "Innovation" ? "text-orange-500" : title === "Revolution" ? "text-green-600" : "text-blue-600"}`}>
                Know More
              </p>
            </div>
          </button>
        ))}
      </section>

      {/* Youth Innovation Hub Section */}
      <section id="innovation" className="bg-neutral-200 px-5 py-24 text-neutral-900 relative overflow-hidden">
        {/* Background glow meshes */}
        <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />
        
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:items-center">
          <div className="text-left">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-red-700">Youth Innovation Hub</p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl tracking-wide">
              Build the Future. <br />Don’t Wait for It.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600">
              Share your ideas, launch your projects, and create real impact with the power of youth and technology.
            </p>
            <div className="mt-8">
              <Button onClick={() => setActivePage("idea")}>Submit Your Idea</Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {hub.map(({ icon: Icon, title, text, tone, accent, border }) => (
              <button
                key={title} 
                type="button"
                onClick={() => setActivePage("idea")}
                className={`glass-card-light-hover rounded-3xl border ${border} bg-gradient-to-br ${tone} p-8 flex flex-col text-left justify-between min-h-[220px] shadow-sm`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm ${accent}`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-right">
                    <span className={`text-[10px] font-black uppercase tracking-[0.22em] ${accent}`}>Hub</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-sm font-black uppercase tracking-[0.12em] text-neutral-900">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-neutral-600">{text}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/70 pt-5">
                  <span className={`text-[10px] font-black uppercase tracking-wider ${accent}`}>Learn More</span>
                  <ArrowRight className={`${accent} transition-transform duration-300 hover:translate-x-1`} size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="grid lg:grid-cols-2 items-stretch min-h-[500px]">
        <div className="px-5 py-24 lg:px-20 flex flex-col justify-center text-left">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] font-display text-sky-700">About Us</p>
          <h2 className="font-display text-4xl font-black leading-tight text-slate-900 sm:text-4xl">
            <span className="whitespace-nowrap">More Than a Generation.</span> <br />
            <span className="whitespace-nowrap">We Are a <span className="text-red-700">Movement.</span></span>
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-neutral-600">
            <p>
              GEN Z JANASENA is a dynamic youth movement inspired by the vision, values, and leadership of Pawan Kalyan.
              We believe that the youth are not just the future of the nation-they are the driving force of change today.
            </p>
            <p>
              United by a shared purpose, empowered by innovation, and guided by strong ideology, we are building a generation
              that stands for integrity, courage, service, and social responsibility.
            </p>
            <p className="font-display text-lg font-bold italic text-sky-500">
              Our mission is to transform passion into action and ideas into impact.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="secondary">Know Our Vision</Button>
          </div>
        </div>
        
        {/* Right side crowd banner */}
        <div className="relative min-h-[400px] lg:min-h-full overflow-hidden bg-neutral-950 flex items-center justify-center">
          <img 
            src={aboutCrowd} 
            alt="Youth Crowd Rally" 
            className="absolute inset-0 h-full w-full object-cover object-center opacity-85 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-radial-gradient(circle_at_center, rgba(220,38,38,0.2), transparent_70%)" />
          
          <div className="absolute bottom-12 left-8 right-8 text-center z-10">
            <div className="text-3xl font-black uppercase tracking-[0.2em] text-white drop-shadow-md">
              Power of Youth
            </div>
            <div className="mt-2 text-xs font-bold tracking-[0.25em] text-red-500 uppercase">
              Leading the change
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section id="campaigns" className="bg-neutral-200 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-5 text-left">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-red-700">Our Campaigns</p>
            <h2 className="text-4xl font-black text-neutral-900 leading-tight">
              Take Action. Create <span className="text-red-700">Change.</span>
            </h2>
          </div>
          <Button variant="secondary">View All Campaigns</Button>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {campaigns.map(({ icon: Icon, title, text, image }) => (
              <article 
                key={title} 
                className="overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Campaign Image container */}
                <div className="relative h-44 overflow-hidden bg-neutral-900">
                  <img 
                    src={image} 
                    alt={title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700/90 text-white backdrop-blur-sm">
                      <Icon size={16} />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.1em] text-neutral-900">{title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-neutral-600">{text}</p>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-red-700 font-bold text-xs pt-4 border-t border-neutral-50">
                    <span className="uppercase tracking-wider group-hover:underline">Join Campaign</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner Section */}
      <section className="bg-neutral-950 border-y border-white/5 py-16 text-center text-white relative overflow-hidden">
        {/* Blur backgrounds mimicking quote_bg */}
        <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-red-900/30 blur-3xl animate-pulse-slow" />
        <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-red-900/30 blur-3xl animate-pulse-slow" />
        
        <blockquote className="text-2xl font-extrabold leading-relaxed px-5 max-w-4xl mx-auto tracking-wide relative z-10 sm:text-3xl">
          “ Real change begins when youth take <span className="text-red-600 relative inline-block">responsibility</span>. ”
        </blockquote>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-neutral-950 px-5 py-16 text-white text-left relative z-10">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-16 md:grid-cols-4">
          <div className="space-y-6">
            <Logo />
            <p className="text-xs leading-6 text-neutral-400">
              A youth-powered movement for ideology, innovation, revolution, and freedom.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/janasenaparty?igsh=bGZvc2drcGJwZ2wy" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-red-500 hover:scale-110 transition duration-200">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/JanaSenaParty" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-red-500 font-black hover:scale-110 transition duration-200">
                X
              </a>
              <a href="https://www.youtube.com/@JanaSenaParty" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-red-500 hover:scale-110 transition duration-200">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-red-500 hover:scale-110 transition duration-200">
                <Send size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-widest text-neutral-200">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.slice(1).map(i => (
                <li key={i}>
                  <a href={`#${i.toLowerCase()}`} className="text-xs text-neutral-400 hover:text-red-500 transition duration-200">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-widest text-neutral-200">Get Involved</h4>
            <ul className="space-y-3">
              {["Join the Movement", "Volunteer", "Youth Chapters", "Submit Your Idea", "Events"].map(i => (
                <li key={i}>
                  <a href="#" className="text-xs text-neutral-400 hover:text-red-500 transition duration-200">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs font-black uppercase tracking-widest text-neutral-200">Stay Connected</h4>
            <p className="mb-4 text-xs leading-6 text-neutral-400">
              Subscribe to our newsletter and stay updated with our latest movements.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex rounded-full bg-neutral-900 border border-white/10 p-1">
              <input 
                className="min-w-0 flex-1 rounded-full px-4 py-2 text-xs text-white outline-none bg-transparent" 
                placeholder="Enter your email" 
                type="email"
                required
              />
              <button 
                type="submit" 
                className="grid h-10 w-10 place-items-center rounded-full bg-red-700 hover:bg-red-800 transition duration-200 cursor-pointer text-white"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>Developed by Manikanta Reddy and Swami Nanduri | Mobile: 9666676562</div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      {/* Lightbox Popup Modal */}
      {activePopupImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setActivePopupImage(null)}
        >
          {/* Modal Content */}
          <div 
            className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-2xl border border-neutral-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
          >
            {/* Close Button */}
            <button 
              onClick={() => setActivePopupImage(null)}
              className="absolute top-4 right-4 z-50 rounded-full bg-neutral-900 p-2.5 text-white transition duration-200 cursor-pointer hover:bg-red-700"
            >
              <X size={20} />
            </button>
            {(() => {
              const theme = popupThemes[activePopupImage.title] ?? popupThemes.Ideology;
              return (
            <div className="flex flex-col gap-6 p-8 text-left text-neutral-900 sm:p-10">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-red-700">GEN Z JANASENA</p>
                <h2 className={`text-3xl font-black uppercase tracking-[0.16em] ${theme.title}`}>
                  {activePopupImage.title}
                </h2>
                <p className={`inline-flex rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.12em] ${theme.highlight}`}>
                  {activePopupImage.text}
                </p>
                <p className="text-sm leading-8 text-neutral-600">
                  {activePopupImage.body}
                </p>
                <div className={`rounded-2xl border p-5 ${theme.quote}`}>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-neutral-700">
                    <span className="font-black">Quote :</span>
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-neutral-800">
                    “{activePopupImage.quote}”
                  </p>
                </div>
              </div>
            </div>
              );
            })()}
          </div>
        </div>
      )}
        </>
      ) : activePage === "join" ? (
        <section className="relative overflow-hidden bg-neutral-100 px-5 py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6 rounded-3xl border border-white/60 bg-white p-8 shadow-xl shadow-black/5">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-red-700">Join The Movement</p>
              <h1 className="font-display text-4xl font-black leading-tight text-neutral-900 sm:text-5xl">
                Become a part of GEN Z JANASENA.
              </h1>
              <p className="text-sm leading-7 text-neutral-600">
                Fill in your details and connect with the movement. We’ll use this form to collect basic information for outreach, events, and local coordination.
              </p>
              <div className="grid gap-4 text-sm text-neutral-700 sm:grid-cols-2">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <p className="font-black uppercase tracking-[0.16em] text-red-700">Why join</p>
                  <p className="mt-2 leading-6">Youth action, service, leadership, and impact.</p>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <p className="font-black uppercase tracking-[0.16em] text-sky-700">What next</p>
                  <p className="mt-2 leading-6">We’ll reach out with the next steps after you submit.</p>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl shadow-black/5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Full Name</span>
                  <input className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-red-700" placeholder="Enter your name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Mobile Number</span>
                  <input className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-red-700" placeholder="+91 98765 43210" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Email</span>
                  <input type="email" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-red-700" placeholder="you@example.com" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">City / District</span>
                  <input className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-red-700" placeholder="Your city or district" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">What are you interested in?</span>
                  <textarea className="min-h-[120px] w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-red-700" placeholder="Tell us how you'd like to contribute..." />
                </label>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" className="rounded-full bg-red-700 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-red-800">
                  Submit Details
                </button>
                <button type="button" onClick={() => setActivePage("home")} className="rounded-full border border-neutral-300 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-neutral-700 transition hover:border-red-700 hover:text-red-700">
                  Back to Home
                </button>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <section className="relative overflow-hidden bg-neutral-100 px-5 py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.12),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6 rounded-3xl border border-white/60 bg-white p-8 shadow-xl shadow-black/5">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-orange-600">Submit Your Idea</p>
              <h1 className="font-display text-4xl font-black leading-tight text-neutral-900 sm:text-5xl">
                Turn your idea into impact.
              </h1>
              <p className="text-sm leading-7 text-neutral-600">
                Share your startup idea, social project, campaign, or innovation proposal. This form helps us understand the problem, the solution, and the change you want to create.
              </p>
              <div className="grid gap-4 text-sm text-neutral-700 sm:grid-cols-2">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <p className="font-black uppercase tracking-[0.16em] text-orange-600">What to share</p>
                  <p className="mt-2 leading-6">A clear idea, the need it solves, and the people it helps.</p>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <p className="font-black uppercase tracking-[0.16em] text-red-700">Why it matters</p>
                  <p className="mt-2 leading-6">Strong ideas can turn into real movements and projects.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="button" onClick={() => setActivePage("home")} className="rounded-full border border-neutral-300 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-neutral-700 transition hover:border-red-700 hover:text-red-700">
                  Back to Home
                </button>
                <button type="button" onClick={() => setActivePage("join")} className="rounded-full border border-orange-300 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-orange-700 transition hover:border-orange-500 hover:text-orange-600">
                  Join The Movement
                </button>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl shadow-black/5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Idea Title</span>
                  <input className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600" placeholder="Enter your idea title" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Category</span>
                  <input className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600" placeholder="Startup / Social / Tech / Campaign" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Problem You Want to Solve</span>
                  <textarea className="min-h-[110px] w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600" placeholder="Describe the problem or need..." />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Your Idea / Solution</span>
                  <textarea className="min-h-[140px] w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600" placeholder="Explain your idea in detail..." />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Your Name</span>
                  <input className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600" placeholder="Enter your name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Mobile Number</span>
                  <input className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600" placeholder="+91 98765 43210" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-neutral-700">Expected Impact</span>
                  <textarea className="min-h-[100px] w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-orange-600" placeholder="What change will your idea create?" />
                </label>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" className="rounded-full bg-orange-600 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-orange-700">
                  Submit Idea
                </button>
                <button type="button" onClick={() => setActivePage("home")} className="rounded-full border border-neutral-300 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-neutral-700 transition hover:border-orange-600 hover:text-orange-600">
                  Back to Home
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}
