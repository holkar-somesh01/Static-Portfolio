export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  category: 'MERN' | 'React Native' | 'Static' | 'All';
  Repo: Boolean
  newCategory: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
}

export interface NavLink {
  id: string;
  title: string;
  href: string;
}

export type LayoutStyle = 'default' | 'sidebar' | 'minimal';
export type ThemeMode = 'light' | 'dark';