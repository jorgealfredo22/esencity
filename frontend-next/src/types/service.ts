export interface Service {
  id: string;
  name: string;
  description: string;
  price?: number;
  duration?: string;
  image?: string;
  category: string;
  featured?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}
