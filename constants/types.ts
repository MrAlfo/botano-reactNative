export interface ExerciseCardProps {
    title: string;
    description: string;
    iconUrl: string;
  }
  
  export interface ProductCardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export interface RelatedProductProps {
    title: string;
    description: string;
  }
  
  export interface PriceDisplayProps {
    title: string;
    price: string;
    subtitle: string;
    images: string[];
  }

  export type RootStackParamList = {
    (tabs: any): undefined;
    explore: undefined; // "explore" rotası için tanımlama
  };