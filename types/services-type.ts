export type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
};

export interface ServiceProps  {
  showButton?: boolean;
};
