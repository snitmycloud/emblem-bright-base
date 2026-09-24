import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight, BookOpen, BriefcaseBusiness, Check, ChevronRight, CircleUserRound,
  CloudCog, Code2, Crosshair, GraduationCap, HeartHandshake, Laptop, Linkedin,
  MapPin, Menu, Network, Phone, Quote, Radar, SearchCheck, ShieldCheck, Terminal,
  UserRound, UsersRound, X, Youtube, Zap,
} from "lucide-react";
import logoAsset from "../assets/SNIT.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SN Cyber Academy | Cyber Security Training Institute in Hyderabad" },
      { name: "description", content: "Learn Cyber Security, Ethical Hacking, SOC Analyst, Penetration Testing and IT skills with hands-on practical training at SN Cyber Academy in Hyderabad." },
      { property: "og:title", content: "SN Cyber Academy | Cyber Security Training Institute in Hyderabad" },
      { property: "og:description", content: "Hands-on cyber security and IT training in Hyderabad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const courses = [
  { icon: ShieldCheck, title: "Cyber Security", text: "Master networking, Linux, ethical hacking, vulnerability assessment, penetration testing, SOC fundamentals, and security tools." },
  { icon: Terminal, title: "Ethical Hacking", text: "Learn reconnaissance, scanning, vulnerability assessment, exploitation concepts, web security, and penetration testing." },
  { icon: Radar, title: "SOC Analyst", text: "Learn security monitoring, SIEM, log analysis, threat detection, incident response, and SOC investigation workflows." },
  { icon: SearchCheck, title: "CompTIA Security+", text: "Build strong security fundamentals and prepare for the CompTIA Security+ certification." },
  { icon: Crosshair, title: "Penetration Testing", text: "Learn practical network and web application security assessment methodologies and professional security reporting." },
  { icon: CloudCog, title: "Azure & DevOps", text: "Develop practical cloud and DevOps skills with Microsoft Azure, CI/CD, containers, and automation." },
];

const benefits = [
  ["01", "Hands-On Practical Training", "Learn by working with real security tools and guided lab environments."],
  ["02", "Industry-Focused Curriculum", "Learn technologies and workflows relevant to modern cybersecurity teams."],
  ["03", "Real-World Attack & Defense", "Understand how attacks happen and how defenders detect and respond."],
  ["04", "Career Guidance", "Get support with resumes, interviews, projects, and career preparation."],
  ["05", "Online & Offline Training", "Choose instructor-led classroom or online learning."],
  ["06", "Professional Certification", "Receive course completion certification and industry certification guidance."],
];

const learning = ["Networking Fundamentals", "Linux & Windows Security", "Reconnaissance & OSINT", "Scanning & Enumeration", "Vulnerability Assessment", "Ethical Hacking & Penetration Testing", "Web Application Security", "SOC Operations & SIEM", "Threat Detection & Incident Response", "Security Projects & Career Preparation"];
const tools = ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "Nessus", "Splunk", "Wazuh", "Microsoft Sentinel", "Active Directory"];

function Brand({ compact = false }: { compact?: boolean }) {
  return <a href="#home" className="brand" aria-label="SN Cyber Academy home"><img src={logoAsset.url} alt="SNIT logo" /><span><strong>SN Cyber</strong><small>{compact ? "Academy" : "Cyber Security & IT Training"}</small></span></a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.checkValidity()) { setSent(true); event.currentTarget.reset(); } };
  const nav = [["Home", "home"], ["Courses", "courses"], ["Why Us", "why-us"], ["Training", "training"], ["Career", "career"], ["Contact", "contact"]];

  return <main>
    <header className="topbar">
      <div className="shell nav-inner"><Brand compact /><nav className={menuOpen ? "nav-links is-open" : "nav-links"}>{nav.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="btn btn-primary nav-cta" href="#contact">Book Free Demo <ArrowRight /></a></nav><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <section id="home" className="hero section-dark">
      <div className="grid-plane" aria-hidden="true" />
      <div className="shell hero-grid">
        <div className="hero-copy animate-fade-in">
          <div className="eyebrow"><span /> Hyderabad's practical cyber security training</div>
          <h1>Master Cyber Security<br/><em>From Zero to Hero</em></h1>
          <p className="lead">Build real-world cybersecurity skills through hands-on labs, ethical hacking, SOC operations, vulnerability assessment, and industry-focused security training.</p>
          <div className="button-row"><a className="btn btn-primary" href="#contact">Book Free Demo <ArrowRight /></a><a className="btn btn-ghost" href="#courses">Explore Courses <ChevronRight /></a></div>
          <div className="proof-row">{["Hands-on Labs","Industry Tools","Live Projects","Career Guidance"].map(x => <span key={x}><Check />{x}</span>)}</div>
        </div>
        <div className="soc-wrap" aria-label="Cybersecurity monitoring dashboard illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="soc-card">
            <div className="soc-head"><span><Radar/> Threat monitoring</span><b><i/> System secure</b></div>
            <div className="scan-map"><div className="map-ring ring-a"/><div className="map-ring ring-b"/><div className="map-center"><ShieldCheck/></div>{["n1","n2","n3","n4","n5"].map(n=><i key={n} className={n}/>)}</div>
            <div className="network-label"><span>Network integrity</span><b>98.4%</b></div><div className="network-bar"><span/></div>
            <div className="soc-stats"><div><small>Threats detected</small><strong>03</strong></div><div><small>Critical</small><strong>00</strong></div><div><small>Systems protected</small><strong>128</strong></div></div>
          </div>
          <div className="floating-code"><Terminal/><span>Firewall active</span><Check/></div>
        </div>
      </div>
    </section>

    <section className="stats-band"><div className="shell stats-grid"><div><strong>10,000+</strong><span>Students Trained</span></div><div><strong>5+</strong><span>Years of Training Excellence</span></div><div><strong>Hands-on</strong><span>Practical Labs</span></div><div><strong>Online & Offline</strong><span>Instructor-led Training</span></div></div></section>

    <section id="courses" className="section"><div className="shell"><header className="section-heading"><div><span className="kicker">Our programs</span><h2>Build Skills That<br/>Companies Actually Need</h2></div><p>Practical, job-oriented programs designed for students, freshers, IT professionals, and career switchers.</p></header><div className="course-grid">{courses.map(({icon:Icon,title,text},i)=><article className="course-card" key={title}><div className="card-top"><span className="course-icon"><Icon/></span><small>0{i+1}</small></div><h3>{title}</h3><p>{text}</p><a href="#contact">View Course <ArrowRight/></a></article>)}</div><div className="center-cta"><a className="btn btn-primary" href="#contact">Book Free Demo <ArrowRight/></a></div></div></section>

    <section id="why-us" className="section section-soft"><div className="shell split"><div className="defense-visual"><div className="visual-label"><span>Live defense environment</span><b>Protected</b></div><div className="shield-core"><ShieldCheck/></div><div className="telemetry"><span>Event stream</span>{[72,88,55,92,68,82,45,76,64,95].map((n,i)=><i key={i} style={{height:`${n}%`}}/>)}</div><div className="visual-foot"><span><i/> Endpoint secure</span><span><i/> Network monitored</span></div></div><div><span className="kicker">The SN advantage</span><h2>Why Learn With<br/>SN Cyber Academy?</h2><div className="benefit-list">{benefits.map(([n,t,d])=><div key={n}><b>{n}</b><span><h3>{t}</h3><p>{d}</p></span></div>)}</div></div></div></section>

    <section id="training" className="section lab-section"><div className="shell"><header className="section-heading light"><div><span className="kicker">Inside the cyber lab</span><h2>Train Like a Security Professional</h2></div><p>Don't just watch tutorials. Build, attack, investigate, and defend.</p></header><div className="lab-console"><div className="console-bar"><span><i/><i/><i/></span><b>sn-lab / active-session</b><small>Encrypted</small></div><div className="tool-grid">{tools.map((tool,i)=><div key={tool}><span>{i%3===0?<Terminal/>:i%3===1?<Network/>:<ShieldCheck/>}</span><b>{tool}</b><small>Ready</small></div>)}</div><div className="console-log"><Code2/><p><b>Guided lab environment</b> Practice reconnaissance, vulnerability assessment, penetration testing, SOC monitoring, threat detection, and incident investigation.</p><span>LIVE</span></div></div></div></section>

    <section className="section"><div className="shell"><header className="section-heading"><div><span className="kicker">Your learning path</span><h2>What You Will Learn</h2></div><p>A structured journey from technical fundamentals to practical security operations and career preparation.</p></header><div className="journey">{learning.map((item,i)=><div key={item}><b>{String(i+1).padStart(2,"0")}</b><span>{item}</span></div>)}</div></div></section>

    <section className="section process-section"><div className="shell"><header className="center-heading"><span className="kicker">A proven learning process</span><h2>From Beginner to Job-Ready</h2></header><div className="process-grid">{[[BookOpen,"01","Learn","Build strong technical foundations."],[Laptop,"02","Practice","Work with hands-on security labs."],[Code2,"03","Build","Complete projects and real-world scenarios."],[BriefcaseBusiness,"04","Prepare","Resume, interview and career preparation."]].map(([Icon,n,t,d])=><div key={String(t)}><span className="process-icon"><Icon/></span><small>{n}</small><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>

    <section className="section audience"><div className="shell"><header className="center-heading"><span className="kicker">Designed for every starting point</span><h2>Who Can Join?</h2></header><div className="audience-grid">{[[GraduationCap,"Students","Start your cybersecurity journey from the fundamentals."],[UserRound,"Fresh Graduates","Build practical skills beyond your academic curriculum."],[Laptop,"IT Professionals","Upgrade your existing IT and networking skills."],[UsersRound,"Career Switchers","Transition into cybersecurity with structured hands-on training."]].map(([Icon,t,d])=><article key={String(t)}><Icon/><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section id="career" className="career-section"><div className="shell career-grid"><div><span className="kicker">Your next chapter</span><h2>Build Your<br/>Cybersecurity Career</h2><p>Develop the technical confidence, project experience, and interview readiness to prepare for in-demand security roles.</p><a className="btn btn-primary" href="#contact">Start Learning <ArrowRight/></a></div><div><small>Prepare for roles such as</small>{["SOC Analyst","Cybersecurity Analyst","Security Operations Engineer","Vulnerability Analyst","Penetration Tester","Security Engineer"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}<ArrowRight/></div>)}</div></div></section>

    <section className="section testimonials"><div className="shell"><header className="center-heading"><span className="kicker">Student experiences</span><h2>Learning That Goes Beyond Theory</h2></header><div className="testimonial-grid">{["Practical sessions helped me understand cybersecurity beyond theory.","Trainer explained complex security concepts clearly and gave us hands-on practice.","Working with security tools during labs made the learning experience much more useful."].map((x,i)=><blockquote key={x}><Quote/><p>“{x}”</p><footer><CircleUserRound/><span>Student review placeholder<small>SN Cyber Academy learner</small></span></footer></blockquote>)}</div></div></section>

    <section className="cta-band"><div className="shell"><div><span className="kicker">Your first session is on us</span><h2>Start Your Cyber Security Journey</h2><p>Experience practical cybersecurity training before you enroll.</p></div><div className="button-row"><a className="btn btn-light" href="#contact">Book Free Demo <ArrowRight/></a><a className="btn btn-outline" href="tel:+917032005827"><Phone/> Call +91 70320 05827</a></div></div></section>

    <section id="contact" className="section contact-section"><div className="shell contact-grid"><div><span className="kicker">Visit or call us</span><h2>Let's Start Your<br/>Cybersecurity Journey</h2><p>Tell us what you want to learn. Our team will help you choose a training path that fits your goals.</p><div className="contact-list"><div><MapPin/><span><b>SN Cyber Academy</b>16-11-741/C/1/1/A/B, Opp. Asian Institute of Nephrology and Urology, Indira Nagar, Dilsukhnagar, Hyderabad, Telangana 500060</span></div><a href="tel:+917032005827"><Phone/><span><b>Call us</b>+91 70320 05827</span></a><a href="https://sncyberacademy.com/" target="_blank" rel="noreferrer"><Network/><span><b>Official website</b>sncyberacademy.com</span></a></div></div><form className="lead-form" onSubmit={submit}><div className="form-head"><h3>Book Your Free Demo</h3><span>No obligation. Just practical learning.</span></div><label>Full Name<input name="name" required placeholder="Enter your full name" /></label><div className="form-row"><label>Phone Number<input name="phone" type="tel" required pattern="[0-9+ ]{10,15}" placeholder="+91 00000 00000" /></label><label>Email<input name="email" type="email" required placeholder="you@email.com" /></label></div><label>Interested Course<select name="course" required defaultValue=""><option value="" disabled>Select a course</option>{courses.map(x=><option key={x.title}>{x.title}</option>)}</select></label><label>Message<textarea name="message" rows={3} placeholder="Tell us about your learning goals" /></label><button className="btn btn-primary form-button" type="submit">Book Free Demo <ArrowRight/></button>{sent && <p className="form-success" role="status"><Check/> Thanks! Your interest has been recorded. Please call us to confirm your demo slot.</p>}</form></div></section>

    <footer className="footer"><div className="shell footer-grid"><div><Brand/><p>Practical Cyber Security & IT Training in Hyderabad</p></div><div><b>Quick links</b>{[["Home","home"],["Courses","courses"],["About","why-us"],["Contact","contact"]].map(([l,id])=><a href={`#${id}`} key={id}>{l}</a>)}</div><div><b>Contact</b><a href="tel:+917032005827">+91 70320 05827</a><span>Dilsukhnagar, Hyderabad</span></div><div><b>Follow</b><span className="socials"><a href="#contact" aria-label="LinkedIn"><Linkedin/></a><a href="#contact" aria-label="YouTube"><Youtube/></a></span></div></div><div className="shell footer-bottom"><span>© 2026 SN Cyber Academy. All Rights Reserved.</span><span><a href="#contact">Privacy Policy</a><a href="#contact">Terms & Conditions</a></span></div></footer>
    <a href="#contact" className="mobile-cta">Book Free Demo <ArrowRight/></a>
  </main>;
}