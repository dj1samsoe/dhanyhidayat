export interface EducationProps {
  school: string;
  major: string;
  logo: string;
  location: string;
  degree: string;
  start_year: number;
  end_year: number;
  link: string;
}

export interface CertificateProps {
  position: string;
  company: string;
  logo: string | null;
  location: string;
  location_type: string;
  type: string;
  start_date: string;
  end_date: string | null;
  link: string | null;
}
