import type { Product, Project, Course, Stat, HomeContent, TabItem } from '../types/index';

export const homeContent: HomeContent = {
  title: 'Welcome to JT',
  intro: 'Transforming Ideas into Digital Reality',
  subtitle: 'We harness technology to create intuitive and powerful solutions for modern businesses'
};

export const products: Product[] = [
  { 
    id: 1, 
    name: 'WebFlow Pro', 
    description: 'Advanced web development platform', 
    icon: 'Code', 
    color: 'from-orange-500 to-red-600' 
  },
  { 
    id: 2, 
    name: 'DataSync', 
    description: 'Real-time data synchronization tool', 
    icon: 'Target', 
    color: 'from-orange-400 to-yellow-500' 
  },
  { 
    id: 3, 
    name: 'CloudBase', 
    description: 'Scalable cloud infrastructure solution', 
    icon: 'Lightbulb', 
    color: 'from-orange-600 to-pink-600' 
  }
];

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'E-commerce Platform', 
    client: 'TechCorp', 
    image: '/api/placeholder/300/200', 
    status: 'Completed' 
  },
  { 
    id: 2, 
    title: 'Learning Management System', 
    client: 'EduTech', 
    image: '/api/placeholder/300/200', 
    status: 'In Progress' 
  },
  { 
    id: 3, 
    title: 'Mobile Banking App', 
    client: 'FinanceFirst', 
    image: '/api/placeholder/300/200', 
    status: 'Completed' 
  },
  { 
    id: 4, 
    title: 'Healthcare Portal', 
    client: 'MedConnect', 
    image: '/api/placeholder/300/200', 
    status: 'Planning' 
  }
];

export const courses: Course[] = [
  { 
    id: 1, 
    title: 'React Development Mastery', 
    students: 1250, 
    rating: 4.8, 
    duration: '12 weeks' 
  },
  { 
    id: 2, 
    title: 'Full Stack JavaScript', 
    students: 890, 
    rating: 4.9, 
    duration: '16 weeks' 
  },
  { 
    id: 3, 
    title: 'UI/UX Design Fundamentals', 
    students: 670, 
    rating: 4.7, 
    duration: '8 weeks' 
  },
  { 
    id: 4, 
    title: 'Cloud Architecture', 
    students: 420, 
    rating: 4.8, 
    duration: '10 weeks' 
  }
];

export const stats: Stat[] = [
  { label: 'Projects Delivered', value: '500+', icon: 'Award' },
  { label: 'Happy Clients', value: '200+', icon: 'Users' },
  { label: 'Students Trained', value: '5000+', icon: 'BookOpen' },
  { label: 'Years Experience', value: '8+', icon: 'Star' }
];

export const navigationTabs: TabItem[] = [
  { key: 'products', label: 'Products', icon: 'Code' },
  { key: 'projects', label: 'Projects', icon: 'Target' },
  { key: 'learning', label: 'Learning', icon: 'BookOpen' }
];

export const companyInfo = {
  name: 'TechNova',
  tagline: 'Transforming ideas into digital reality through innovative technology solutions.',
  services: [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'Consulting'
  ],
  learningOptions: [
    'Online Courses',
    'Workshops',
    'Certifications',
    'Resources'
  ],
  connectLinks: [
    'Contact Us',
    'About',
    'Blog',
    'Careers'
  ]
};