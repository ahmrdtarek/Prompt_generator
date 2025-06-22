export interface Project {
  id: string;
  name: string;
  industry: string;
  website_url: string;
  wordpress_credentials?: string; // encrypted
  seo_keywords: string[];
  content_calendar: any; // Define a more specific type later if needed
  cultural_preferences: string[];
  performance_metrics: any; // Define a more specific type later if needed
}