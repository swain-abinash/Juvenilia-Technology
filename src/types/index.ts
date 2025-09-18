// types/index.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  image: string;
  status: 'Completed' | 'In Progress' | 'Planning';
}

export interface Course {
  id: number;
  title: string;
  students: number;
  rating: number;
  duration: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface HomeContent {
  title: string;
  intro: string;
  subtitle: string;
}

export interface TabItem {
  key: string;
  label: string;
  icon: string;
}



export interface CareerPageData {
  header: {
    title: string;
    subtitle: string;
    mainImage: string;
  };
  values: {
    icon: string;
    title: string;
    description: string;
  }[];
  benefits: {
    icon: string; // Using string for icon names from a library like lucide-react
    title: string;
    description: string;
  }[];
  openings: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract';
    description: string;
    responsibilities: string[];
    qualifications: string[];
  }[];
}

