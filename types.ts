
export enum AppTab {
  ANALYZER = 'ANALYZER',
  EXPLORER = 'EXPLORER',
  GENERATE = 'GENERATE'
}

export interface ArtAnalysis {
  title: string;
  artist: string;
  period: string;
  description: string;
  techniques: string[];
  colorPalette: string[];
}

export interface ArtIdea {
  title: string;
  concept: string;
  materials: string[];
  vibe: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
