export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  content: string;
  badge?: string;
  impact?: string;
}

export interface VideoTestimonial {
  id: string;
  title: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string; // Embed or trigger URL
  category: string;
  author: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metric?: string;
}

export interface SimulatorRow {
  month: string;
  balanceWithout: number;
  balanceWith: number;
  savingsWithout: number;
  savingsWith: number;
}
