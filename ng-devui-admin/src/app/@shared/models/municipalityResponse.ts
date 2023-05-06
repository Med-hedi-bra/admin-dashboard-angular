import { User } from "./user";

export interface Municipality {
    idMun: string;
    maitre: string;
    president: string;
    secritaire: string;
    users:User[]
  }
  