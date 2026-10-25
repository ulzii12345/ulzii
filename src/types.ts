export interface Project {
  id: string;
  title: string;
  originalSlug: string;
  fullUrl: string;
  category: string;
  description: string;
  highlights: string[];
  icon: 'briefcase' | 'youtube' | 'gamepad' | 'livestock';
  previewImage?: string;
  accentColor: string;
}

export interface InterestItem {
  id: string;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  fallbackImage: string;
  meta: string;
}

export interface LearningGoal {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}
