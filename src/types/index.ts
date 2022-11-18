//user interface
export interface User {
  id?: string;
  email: string;
  password: string | undefined;

  firstname: string;
  middlename: string;
  lastname: string;
  bio?: string;
  profilePicture?: string;

  role?: string;
}

export interface _lawyer {
  id?: string;
  name: string;
  email: string;
  password: string | undefined;
  experience?: number;
  rating?: number;
  videoConsultationFee?: number;
  officeConsultationFee?: number;
  verified?: boolean;
  qualification?: string;
  lawyerReview?: string;
  lawyerOfficeId?: string;
}
