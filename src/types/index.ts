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