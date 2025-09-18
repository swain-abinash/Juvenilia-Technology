import type { CareerPageData } from '../types';


export const careerData: CareerPageData = {
  header: {
    title: 'Build The Future With Us',
    subtitle:
      'We are looking for passionate, curious, and creative people to join our team. Explore our open roles and find your next great opportunity.',
    mainImage: 'https://placehold.co/1200x600/1a202c/ffffff?text=Join+Our+Team',
  },
  values: [
      {
        icon: 'Sparkles', // A good icon for innovation
        title: 'Our passion for innovation',
        description: 'Opportunity is what we seek in even the most unaccommodating situations. We are ready to take calculated risks and manage our expectations on the belief that "Don’t be satisfied with the easiest option, if it is not the best option" will be true.',
      },
      {
        icon: 'Users', // A good icon for teamwork
        title: 'Teamwork',
        description: 'We all treat each other with respect and are honest in our communications. The best ideas are presented by us in the process of finding better resolutions. We take delight in the benefits of different viewpoints and combined experience.',
      },
      {
        icon: 'Lightbulb', // A good icon for solutions
        title: 'Solution Focused',
        description: 'We focus on solutions rather than indulging in problems. We identify positive aspects that provide constructiveness in every challenge. We say, “Yes, we can” rather than “No, we won’t”.',
      },
      {
        icon: 'Heart', // A good icon for relationships
        title: 'Relationship is precious',
        description: 'Honesty, trust, mutual respect, and quality are the key concerns of our team for the client. It gives us inner happiness when the client smiles with satisfaction.',
      },
    ],
  benefits: [
    {
      icon: 'HeartPulse',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.',
    },
    {
      icon: 'PiggyBank',
      title: 'Financial Security',
      description: 'Competitive salary, 401(k) matching, and performance bonuses.',
    },
    {
      icon: 'Plane',
      title: 'Flexible PTO',
      description: 'Take the time you need to rest and recharge with our flexible paid time off policy.',
    },
    {
      icon: 'Laptop',
      title: 'Remote Work',
      description: 'We offer flexible remote and hybrid work options to suit your lifestyle.',
    },
    {
      icon: 'BookOpen',
      title: 'Learning & Development',
      description: 'Opportunities for professional growth, with access to courses, workshops, and conferences.',
    },
    {
      icon: 'Baby',
      title: 'Parental Leave',
      description: 'Generous paid parental leave for all new parents.',
    },
  ],
  openings: [
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description:
        'We are seeking a talented Senior Frontend Engineer to build and shape our user-facing products. You will work with a modern tech stack including React, TypeScript, and Tailwind CSS.',
      responsibilities: [
        'Develop new user-facing features using React.js',
        'Build reusable components and front-end libraries for future use',
        'Translate designs and wireframes into high-quality code',
        'Optimize components for maximum performance across a vast array of web-capable devices and browsers',
      ],
      qualifications: [
        '5+ years of experience with JavaScript and modern frameworks like React.',
        'Strong proficiency in TypeScript.',
        'Experience with state management libraries (e.g., Redux, Zustand).',
        'Familiarity with RESTful APIs.',
        'Knowledge of modern authorization mechanisms, such as JSON Web Token.',
      ],
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description:
        'As a Product Designer, you will be involved in every aspect of the product development process, from brainstorming the next great product innovation to tweaking pixels right before launch.',
      responsibilities: [
        'Conduct user research and evaluate user feedback.',
        'Create wireframes, storyboards, user flows, process flows and site maps.',
        'Collaborate with product management and engineering to define and implement innovative solutions.',
        'Execute all visual design stages from concept to final hand-off to engineering.',
      ],
      qualifications: [
        '3+ years of UX/UI design experience.',
        'Proficiency in Figma, Sketch, or Adobe XD.',
        'A strong portfolio of design projects.',
        'Experience in creating wireframes, prototypes, storyboards, and user flows.',
        'Excellent visual design skills with sensitivity to user-system interaction.',
      ],
    },
    {
      id: 3,
      title: 'Backend Engineer (Go)',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description:
        'We are looking for a Backend Engineer proficient in Go to join our growing team. You will be responsible for managing the interchange of data between the server and the users.',
      responsibilities: [
        'Design and implement low-latency, high-availability, and performant applications.',
        'Write reusable, testable, and efficient code.',
        'Integration of data storage solutions like PostgreSQL and Redis.',
        'Implementation of security and data protection.',
      ],
      qualifications: [
        '4+ years of experience in backend development.',
        'Strong knowledge of Go programming language.',
        'Experience with building and maintaining microservices.',
        'Proficient understanding of code versioning tools, such as Git.',
        'Familiarity with containerization technologies like Docker and Kubernetes.',
      ],
    },
  ],
};

