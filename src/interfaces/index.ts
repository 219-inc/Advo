//user interface
export interface User {
  id: number;
  uuid: string;
  email: string;
  password: string;

  firstname: string;
  middlename: string;
  lastname: string;
  bio: string;

  role: string;
}
