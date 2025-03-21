export interface Job {
  id: number | string;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  description: string;
  salary: string;
  tools: string[];
  category: string;
  categoryLink: string;
  slots: number;
  requirements: string[];
}

export interface JobCategory {
  title: string;
  icon: string;
  count: number;
  link: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface ApplicationFormDataState {
  firstName: string;
  lastName: string;
  email: string;
  resume: File | null;
  coverLetter: string;
}
export interface SubmitApplicationParams {
  jobId: string | undefined;
  firstName: string;
  lastName: string;
  email: string;
  coverLetter: string;
  resume: string | null;
}