import type { HomeData } from '../types';
import {
    CodeIcon, SmartphoneIcon, MegaphoneIcon, BriefcaseIcon, SearchIcon, PaletteIcon,
    RocketLaunchIcon, HeadsetIcon, BanknoteIcon, HeartPulseIcon, ShoppingCartIcon, GraduationCapIcon,
    BuildingIcon, WrenchIcon, HomeIcon, Building2Icon, PlaneIcon, HammerIcon, ScaleIcon,
    CameraIcon, AnchorIcon, SparklesIcon
} from '../components/Icons';

// Import all tech stack assets
import HtmlLogo from '../assets/Html.svg';
import CssLogo from '../assets/Css.svg';
import JavascriptLogo from '../assets/Javascript.svg';
import ReactLogo from '../assets/React.svg';
import AngularLogo from '../assets/Angular.svg';
import NodeLogo from '../assets/Node.svg';
import NextLogo from '../assets/Next.js.svg';
import MongoDBLogo from '../assets/MongoDB.svg';
import MySQLLogo from '../assets/MySQL.svg';
import AWSLogo from '../assets/AWS.svg';
import DockerLogo from '../assets/Docker.svg';
import GraphQLLogo from '../assets/GraphQL.svg';
import FigmaLogo from '../assets/Figma.svg';
import PythonLogo from '../assets/Python.svg';
import JavaLogo from '../assets/Java.svg';
import AndroidLogo from '../assets/Android.svg';
import WordpressLogo from '../assets/Wordpress.svg';


// Import company logos from assets
import ContenentalLogo from '../assets/Contenental.svg';
import DHLLogo from '../assets/DHL.svg';
import DunlopLogo from '../assets/Dunlop.svg';
import EYLogo from '../assets/EY.svg';
import GrabLogo from '../assets/Grab.svg';
import JaguarLogo from '../assets/Jaguar.svg';
import MicroSoftLogo from '../assets/MicroSoft.svg';
import OracleLogo from '../assets/Oracle.svg';
import PaypalLogo from '../assets/Paypal.svg';
import TinderLogo from '../assets/Tinder.svg';

import StartupIndiaLogo from '../assets/Startup-INDIA.svg';
import UdyamLogo from '../assets/UDYAM.png';
import HeroImage1 from '../assets/WebDevelopment_Hero1.jpg';
import HeroImage2 from '../assets/AppDevelopment_Hero2.jpg';
import HeroImage3 from '../assets/DigitalMarketing_Hero3.jpg';


export const homeData: HomeData = {
hero: {
    headline: "Smart Technology to Boost Your Business",
    subheadline: "We build digital solutions that help companies grow faster.",
    ctas: [
        { text: "Get Started", link: "#contact", type: "primary" },
        { text: "Contact Us", link: "#contact", type: "secondary" },
    ],
    images: [HeroImage1,HeroImage2,HeroImage3]
},
    aboutPreview: {
        intro: "Founded in 2015, Juvenilia Technologies Pvt Ltd has grown into one of India’s most trusted IT solution companies, delivering innovative digital solutions across industries.",
        cta: { text: "Learn More About Us", link: "/about" },
    },
    services: {
        title: "What We Do Best",
        items: [
            { icon: CodeIcon, title: "Web Development", description: "Creating responsive, high-performance websites for optimal user experience." },
            { icon: SmartphoneIcon, title: "App Development", description: "Building native and cross-platform mobile apps that engage your users." },
            { icon: MegaphoneIcon, title: "Digital Marketing", description: "Driving growth with data-driven strategies from SEO to social media." },
            { icon: BriefcaseIcon, title: "Software Solutions", description: "Developing custom software to streamline your business operations." },
        ],
        cta: { text: "View All Services", link: "/services" },
    },
    caseStudies: {
        title: "Success Stories",
        items: [
            { problem: "Low Conversions", solution: "AI-driven marketing automation", result: "Boosted revenue by 200% for an eCommerce brand." },
            { problem: "Inefficient Operations", solution: "Custom ERP software development", result: "Reduced manual workload by 40% for a manufacturing firm." },
            { problem: "Poor Mobile Experience", solution: "A new cross-platform mobile app", result: "Increased user engagement by 60% for a healthcare provider." },
        ],
        cta: { text: "View All Products", link: "/products" },
    },
    testimonials: {
        title: "What Our Clients Say",
        items: [
            { quote: "Juvenilia Technologies helped us scale with a seamless eCommerce solution. Highly recommend!", name: "Priya Sharma", company: "CEO, GlamCart", image: "https://placehold.co/100x100/orange/white?text=PS" },
            { quote: "Their digital marketing expertise is unmatched. We saw a tangible increase in leads within the first quarter.", name: "Ankit Singh", company: "Marketing Head, FinSecure", image: "https://placehold.co/100x100/orange/white?text=AS" },
            { quote: "The custom software they built for us has revolutionized our workflow. An incredible team to work with.", name: "Meera Desai", company: "COO, HealthPlus", image: "https://placehold.co/100x100/orange/white?text=MD" },
            // ✅ New Testimonials with random companies
            {
                quote: "We're thrilled to have been a part of the Juvenilia Technology team. They are always quick to respond and helped us create a stunning website. The website design we wanted is exactly what we want it to be and our customers can easily use it.",
                name: "Matt Clave",
                company: "Founder, WebNest Solutions",
                image: "https://placehold.co/100x100/orange/white?text=MC"
            },
            {
                quote: "Juvenilia Technology has been a source of satisfaction for me since I began working with them. Their professionalism, service, and expertise are highly regarded. I would highly recommend this company to anyone in need of Web Design services.",
                name: "Louis Kim",
                company: "CTO, BrightEdge Systems",
                image: "https://placehold.co/100x100/orange/white?text=LK"
            },
            {
                quote: "It's been almost a year since I last worked at Juvenilia Technology. I am grateful for the dedicated team who have been working to grow my online sales. They come through with results. The partnership with Juvenilia Technology in the field of Digital Marketing is highly recommended.",
                name: "Robert Moller",
                company: "Director, EcomSphere",
                image: "https://placehold.co/100x100/orange/white?text=RM"
            },
            {
                quote: "Despite being recommended by Juvenilia Technology for website development, my lack of familiarity with them made me hesitant. What could have been avoided? It was hard to have faith and compensate them. Nevertheless, after finishing the project, I recommend them as your website developer.",
                name: "Sofia Cruse",
                company: "Manager, CloudVista Corp",
                image: "https://placehold.co/100x100/orange/white?text=SC"
            },
        ]
    },
    clients: {
        title: "Trusted By",
        logos: [
            { src: ContenentalLogo, alt: "Continental" },
            { src: DHLLogo, alt: "DHL" },
            { src: DunlopLogo, alt: "Dunlop" },
            { src: EYLogo, alt: "EY" },
            { src: GrabLogo, alt: "Grab" },
            { src: JaguarLogo, alt: "Jaguar" },
            { src: MicroSoftLogo, alt: "Microsoft" },
            { src: OracleLogo, alt: "Oracle" },
            { src: PaypalLogo, alt: "PayPal" },
            { src: TinderLogo, alt: "Tinder" },
        ]
    },
    stats: {
        items: [
            { value: 300, label: "Projects Delivered", suffix: "+" },
            { value: 10, label: "Countries Served", suffix: "+" },
            { value: 50, label: "Experts Onboard", suffix: "+" },
        ]
    },
    process: {
        title: "Our Process",
        items: [
            { icon: SearchIcon, title: "Discovery", description: "We start by understanding your goals, challenges, and vision." },
            { icon: PaletteIcon, title: "Design", description: "Crafting intuitive and beautiful user interfaces and experiences." },
            { icon: CodeIcon, title: "Development", description: "Bringing designs to life with clean, efficient, and scalable code." },
            { icon: RocketLaunchIcon, title: "Deployment", description: "Seamlessly launching your project for the world to see." },
            { icon: HeadsetIcon, title: "Support", description: "Providing ongoing support and maintenance to ensure success." },
        ]
    },
    techStack: {
        title: "Tech We Use",
        logos: [
            { src: HtmlLogo, alt: "HTML" },
            { src: CssLogo, alt: "CSS" },
            { src: JavascriptLogo, alt: "JavaScript" },
            { src: ReactLogo, alt: "React" },
            { src: AngularLogo, alt: "Angular" },
            { src: NodeLogo, alt: "Node.js" },
            { src: NextLogo, alt: "Next.js" },
            { src: MongoDBLogo, alt: "MongoDB" },
            { src: MySQLLogo, alt: "MySQL" },
            { src: AWSLogo, alt: "AWS" },
            { src: DockerLogo, alt: "Docker" },
            { src: GraphQLLogo, alt: "GraphQL" },
            { src: FigmaLogo, alt: "Figma" },
            { src: PythonLogo, alt: "Python" },
            { src: JavaLogo, alt: "Java" },
            { src: AndroidLogo, alt: "Android" },
            { src: WordpressLogo, alt: "WordPress" },
        ]
    },
    industries: {
        title: "Industry-Specific Solutions",
        items: [
            { icon: BanknoteIcon, name: "Banking & Finance", image: "https://placehold.co/400x300/111/fff?text=Finance" },
            { icon: HeartPulseIcon, name: "Healthcare", image: "https://placehold.co/400x300/111/fff?text=Healthcare" },
            { icon: ShoppingCartIcon, name: "E-commerce", image: "https://placehold.co/400x300/111/fff?text=E-commerce" },
            { icon: GraduationCapIcon, name: "Education", image: "https://placehold.co/400x300/111/fff?text=Education" },
            { icon: WrenchIcon, name: "Manufacturing", image: "https://placehold.co/400x300/111/fff?text=Manufacturing" },
            { icon: HomeIcon, name: "Home Service", image: "https://placehold.co/400x300/111/fff?text=Home+Service" },
            { icon: BuildingIcon, name: "Real Estate", image: "https://placehold.co/400x300/111/fff?text=Real+Estate" },
            { icon: Building2Icon, name: "Hotels & Resorts", image: "https://placehold.co/400x300/111/fff?text=Hotels" },
            { icon: PlaneIcon, name: "Tours & Travel", image: "https://placehold.co/400x300/111/fff?text=Travel" },
            { icon: HammerIcon, name: "Roofing", image: "https://placehold.co/400x300/111/fff?text=Roofing" },
            { icon: ScaleIcon, name: "Law Firm", image: "https://placehold.co/400x300/111/fff?text=Law+Firm" },
            { icon: CameraIcon, name: "Events & Photography", image: "https://placehold.co/400x300/111/fff?text=Events" },
            { icon: AnchorIcon, name: "Marine", image: "https://placehold.co/400x300/111/fff?text=Marine" },
            { icon: SparklesIcon, name: "Beauty", image: "https://placehold.co/400x300/111/fff?text=Beauty" },
        ]
    },
    culture: {
        title: "Our Culture",
        quote: "At Juvenilia Tech, I get to innovate every day.",
        author: "Ranjan",
        role: "Director",
        videoUrl: "" // Add a video URL here if available
    },
awards: {
    title: "Awards & Certifications",
    items: [
        { name: "Top IT Services Firm", issuer: "Clutch", year: "2023" },
        { name: "ISO 9001:2015", issuer: "ISO Certified", year: "2024" },
        { name: "Best Web Agency", issuer: "Web Awards", year: "2022" },
        { 
            name: "Startup India Registered", 
            issuer: "Government of India", 
            year: "2024", 
            image: StartupIndiaLogo    // ✅ new image award
        },
        {
            name: "UDYAM Certification",
            issuer: "Government of India",
            year: "2024",
            image: UdyamLogo
        }
    ]
},

    resources: {
        title: "Free Resources",
        items: [
            { title: "The Ultimate SEO Guide", description: "A comprehensive guide to dominate search rankings.", link: "#" },
            { title: "eCommerce Growth Playbook", description: "Strategies to scale your online store.", link: "#" },
        ],
        cta: { text: "Get Free Resources", link: "#" }
    },
    stickyCta: {
        text: "Want to transform your idea into reality? Let’s Talk.",
        buttonText: "Contact Us",
        link: "/contact"
    }
};

