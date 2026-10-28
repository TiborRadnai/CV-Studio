export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
}

export interface CV {
  personalInfo: PersonalInfo;
}