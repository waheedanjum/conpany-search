import { Officer } from './officer';
export interface Company {
  name: string;
  number: string;
  incorporationDate: string;
  address: string;
  status?: string;
  type?: string;
  Officer: Officer[]
}
