export const site = {
  name: "Blue Point Technology Solutions Ltd",
  shortName: "Blue Point",
  tagline: "Powering Africa's electric mobility",
  description:
    "Blue Point is an engineering and technology company delivering end-to-end electric vehicle charging infrastructure across Nigeria and Africa — from engineering design and civil works to charging technology, software and long-term operations.",
  url: "https://bluepoint.ng",
  email: "temidayo@bluepoint.ng",
  phone: "09060016233",
  phoneIntl: "+2349060016233",
  address: {
    line1: "Suite 208, Nigerian Society of Engineering Building",
    line2: "Central Business District",
    city: "FCT — Abuja",
    country: "Nigeria",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: "3", label: "Commercial stations deployed", sub: "Lagos & Abuja" },
  { value: "100%", label: "Turnkey delivery", sub: "Design to operations" },
  { value: "24/7", label: "Remote monitoring", sub: "In-house software platform" },
  { value: "1", label: "Accountable partner", sub: "Across the full lifecycle" },
];

export type Capability = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "engineering",
    title: "Engineering & Technical Capabilities",
    summary:
      "Multidisciplinary engineering that carries complex electric mobility projects from concept through commissioning.",
    points: [
      "Electrical engineering and power distribution design",
      "Civil engineering and mechanical systems integration",
      "Charging infrastructure deployment and load planning",
      "Project management, systems commissioning and handover",
      "Compliance with recognised engineering and safety standards",
      "Designs built for scalability, uptime and environmental responsibility",
    ],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure Development",
    summary:
      "Comprehensive delivery services covering every stage of an EV infrastructure project.",
    points: [
      "Feasibility studies and site assessments",
      "Engineering design and procurement",
      "Civil construction and electrical installation",
      "Transformer integration and supporting electrical infrastructure",
      "Charging equipment deployment, testing and commissioning",
      "Regulatory compliance and operational handover",
    ],
  },
  {
    slug: "technology",
    title: "Technology Solutions",
    summary:
      "An intelligent software layer that turns hardware in the ground into a managed, measurable network.",
    points: [
      "Charging station management and session control",
      "Payment processing and customer usage tracking",
      "Remote equipment monitoring and diagnostics",
      "Fleet management and energy management integration",
      "Operational analytics and performance reporting",
      "Preventive maintenance scheduling and alerting",
    ],
  },
  {
    slug: "operations",
    title: "Operations & Maintenance",
    summary:
      "Long-term operational reliability, because infrastructure is judged on the day it is needed most.",
    points: [
      "Preventive and corrective maintenance programmes",
      "Remote diagnostics and equipment monitoring",
      "Software updates and firmware management",
      "Technical support and rapid response",
      "Performance optimisation and uptime maximisation",
      "Asset lifespan extension across the network",
    ],
  },
];

export const industries = [
  "Government infrastructure",
  "Oil & gas retail networks",
  "Commercial developments",
  "Shopping centres",
  "Hospitality facilities",
  "Residential estates",
  "Educational institutions",
  "Manufacturing facilities",
  "Logistics companies",
  "Fleet operators",
  "Transport hubs & airports",
  "Smart city developments",
];

export const deliveryPhases = [
  {
    step: "01",
    title: "Understand",
    body: "Every engagement begins with a comprehensive understanding of your objectives, operational requirements and project environment.",
  },
  {
    step: "02",
    title: "Design",
    body: "Detailed planning and engineering design — electrical load, civil works, charger selection and site layout resolved before a shovel moves.",
  },
  {
    step: "03",
    title: "Build",
    body: "Procurement, construction and installation managed under a single accountable partner, with rigorous quality assurance throughout.",
  },
  {
    step: "04",
    title: "Commission",
    body: "Testing, commissioning and systems integration to prove safe, reliable and efficient operation before the site goes live.",
  },
  {
    step: "05",
    title: "Operate",
    body: "Long-term operational support: monitoring, preventive maintenance and performance optimisation that protect your asset.",
  },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  city: string;
  image: string;
  imageAlt: string;
  summary: string;
  scope: string[];
};

export const projects: Project[] = [
  {
    slug: "landmark-centre",
    name: "Landmark Centre",
    location: "Victoria Island, Lagos",
    city: "Lagos",
    image: "/images/landmark-fleet.jpg",
    imageAlt:
      "Fleet of electric vehicles parked under a canopy-covered charging bay at Landmark Centre, Victoria Island",
    summary:
      "Blue Point designed, connected and installed the electric vehicle charging infrastructure at Landmark Centre, Victoria Island — one of Lagos' highest-traffic commercial destinations.",
    scope: [
      "Site inspection and feasibility assessment",
      "Electrical design and power integration",
      "Installation of charging equipment",
      "Commissioning and testing for safe, reliable operation",
    ],
  },
  {
    slug: "supersaver-osapa",
    name: "Supersaver Supermarket",
    location: "Osapa, Lagos",
    city: "Lagos",
    image: "/images/charging-session.jpg",
    imageAlt:
      "Technician operating a TRI DC fast charger while a white electric vehicle charges at Supersaver, Osapa",
    summary:
      "Blue Point designed and deployed the EV charging infrastructure at Supersaver Supermarket, Osapa, delivering a facility built to support the growing adoption of electric vehicles in the area.",
    scope: [
      "Engineering design and electrical installation",
      "Charger deployment and systems integration",
      "Commissioning and performance testing",
      "Operational handover to site management",
    ],
  },
  {
    slug: "nnpc-ikota",
    name: "NNPC Retail Station",
    location: "Ikota, Lagos",
    city: "Lagos",
    image: "/images/nnpc-ikota.jpg",
    imageAlt:
      "Blue Point staff charging a white electric SUV at the NNPC retail station forecourt in Ikota, Lagos",
    summary:
      "Blue Point participated in the design and deployment of EV charging infrastructure at the NNPC Retail Station, Ikota — public charging that supports Nigeria's transition to sustainable transportation.",
    scope: [
      "Engineering design and supporting electrical infrastructure",
      "Installation of charging equipment",
      "Testing, commissioning and operational integration",
      "Integration with the Blue Point management platform",
    ],
  },
];

export type Leader = {
  slug: string;
  name: string;
  role: string;
  org?: string;
  image?: string;
  initials: string;
  lede: string;
  body: string[];
};

export const leaders: Leader[] = [
  {
    slug: "temidayo-dauda",
    name: "Temidayo Dauda",
    role: "Director",
    image: "/images/temidayo-dauda.jpg",
    initials: "TD",
    lede: "Lawyer, entrepreneur and technology executive with over a decade building businesses across legal services, financial technology, artificial intelligence and infrastructure.",
    body: [
      "Temidayo's work is centred on developing technology-driven solutions that solve complex commercial problems while creating sustainable economic value. By combining legal expertise with engineering, technology and business strategy, he has founded and led innovative ventures across multiple industries.",
      "He began his legal career at one of Nigeria's leading commercial law firms, advising on corporate, commercial and property transactions before transitioning into entrepreneurship. Since then he has built and led businesses that leverage technology to improve financial services, professional practice and sustainable infrastructure.",
      "He is the Founder and Chief Executive Officer of DailyPay, a financial technology company transforming how employees access and manage their earnings, promoting financial inclusion through seamless access to earned wages and digital financial services. He is also the Founder and Chief Executive Officer of OrditAI, an artificial intelligence company building an AI-powered workbench for auditors and accounting professionals — automating audit workflows, streamlining documentation, analysing financial statements and supporting risk assessment at scale.",
      "Driven by his passion for clean energy and sustainable infrastructure, Temidayo leads the development and deployment of EV charging infrastructure across Nigeria. He has designed, built and deployed three commercial charging stations in Lagos, leading multidisciplinary teams across site identification, engineering design, electrical planning, construction, commissioning and operational management.",
      "Beyond the physical infrastructure, he led the design and development of the software platform that powers the stations — real-time charger management, remote monitoring, session management, operational analytics and performance insights that let operators track energy consumption, analyse utilisation and maximise uptime.",
      "Prior to founding his current ventures, Temidayo served as Chief Executive Officer of Swipe, where he led the company's growth within Nigeria's fintech ecosystem. His long-term vision is to accelerate Africa's transition to sustainable transportation and build world-class technology and infrastructure companies that contribute meaningfully to the continent's growth.",
    ],
  },
  {
    slug: "william-etim-bassey",
    name: "Dr. William E. Etim-Bassey",
    role: "Director",
    image: "/images/william-etim-bassey.jpg",
    initials: "WE",
    lede: "Internationally respected C-suite executive, corporate strategist and trusted board adviser with more than twenty-five years of executive leadership across Africa and international markets.",
    body: [
      "Dr. Etim-Bassey has built a distinguished career driving strategic growth, market expansion, investment facilitation, strategic partnerships and organizational transformation. He has advised governments, multinational corporations, development finance institutions and international organizations, helping them identify commercial opportunities, navigate complex regulatory environments and deliver sustainable business outcomes.",
      "As Executive Director (Business Development) at Neostrategy Consulting Ltd., he leads strategic growth initiatives, executive stakeholder engagement and cross-sector partnerships spanning infrastructure, energy, governance and institutional development. Earlier executive appointments within government strengthened his expertise in corporate governance, enterprise transformation, resource mobilization and executive decision-making. International assignments with Canada's Lester B. Pearson International Peacekeeping Centre and Oxfam Canada shaped his global perspective on leadership, policy and international collaboration.",
      "He serves as an Adjunct Lecturer in International Relations and Strategic Studies at the University of Calabar, combining executive leadership with scholarship and thought leadership. He is a Doctoral Candidate in International Relations and Strategic Studies at the University of Calabar and holds an M.A. in Geopolitics from the University of Reading, an M.A. in Jurisprudence & International Law from the University of Lagos, and a B.A. in History from the University of Ibadan.",
      "While widely recognised for expertise in security and governance, these disciplines serve as strategic differentiators within a broader executive portfolio centred on business development, corporate strategy, investment facilitation and transformational leadership. Beyond his professional pursuits he is an amateur military historian with a keen interest in venture capitalism and emerging business opportunities, and enjoys golf, cooking and the discipline of Shotokan Karate.",
    ],
  },
];

export const strategicAdviser: Leader = {
  slug: "iyinoluwa-aboyeji",
  name: "Iyinoluwa Aboyeji OON",
  role: "Strategic Adviser & Strategic Partner",
  org: "Director, E-Mobility Africa Limited",
  initials: "IA",
  lede: "Nigerian entrepreneur, investor and technology ecosystem builder whose work has significantly shaped Africa's innovation landscape.",
  body: [
    "Widely regarded as one of the continent's leading technology entrepreneurs, Iyinoluwa has played a pivotal role in building and scaling businesses that transformed access to financial services, education and digital infrastructure across Africa — creating opportunities for millions while attracting substantial international investment into the continent's technology ecosystem.",
    "He is a Co-founder of Andela, where he helped build one of Africa's most recognised technology companies by connecting exceptional African software engineers with global businesses. He also co-founded Flutterwave, one of Africa's leading financial technology companies, which transformed digital payments by enabling businesses to seamlessly accept and process payments across Africa and internationally.",
    "He is the Founder of E-Mobility Africa, an organisation committed to powering Africa's transition to electric mobility by supporting the development of EV ecosystems, charging infrastructure and strategic industry partnerships across the continent.",
    "Through the strategic partnership between Blue Point and E-Mobility Africa, Iyinoluwa serves as a Strategic Adviser to Blue Point, providing guidance on electric mobility, infrastructure development, industry partnerships and long-term business growth. Under this partnership, E-Mobility Africa supports Blue Point in the sourcing and procurement of EV chargers, charging equipment and other critical infrastructure components, while providing industry expertise that strengthens Blue Point's ability to execute large-scale projects across Africa.",
    "Beyond entrepreneurship, Iyinoluwa is an active investor, mentor and ecosystem builder, supporting founders and early-stage technology companies across fintech, education, healthcare, logistics, climate technology and clean energy. His leadership has earned him international recognition as one of Africa's most influential voices in technology, entrepreneurship and innovation.",
  ],
};

export const differentiators = [
  {
    title: "One partner, whole lifecycle",
    body: "Engineering, technology and infrastructure expertise inside a single organisation — so you engage one trusted partner from feasibility through years of operation, not a chain of vendors pointing at each other.",
  },
  {
    title: "Built by the people who operate it",
    body: "We design and build the stations, and we wrote the software that runs them. That loop means the infrastructure is shaped by what actually keeps chargers online.",
  },
  {
    title: "Engineered for African conditions",
    body: "Power quality, grid availability and site realities on the ground inform every design decision — supporting electrical infrastructure, generation and storage included where the site demands it.",
  },
  {
    title: "Safety and quality, non-negotiable",
    body: "Health, safety, quality and environmental responsibility are integrated into every phase of delivery, protecting personnel, surrounding communities and the environment.",
  },
];
