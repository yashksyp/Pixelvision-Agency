
export type Theme = 'light' | 'dark';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'web' | 'marketing';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  kpi: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
