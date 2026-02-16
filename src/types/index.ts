
export interface Project {
  id: number;
  title: string;
  role: string;
  description: string[];
  tags: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  projects?: Project[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
