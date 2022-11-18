declare namespace Express {
  export interface Request {
    user?: string;
    isAuthenticted?: boolean;
    role?: string;
  }
}
