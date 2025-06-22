export interface Project {
  id: string;
  name: string;
  industry: string;
  website_url: string;
  wordpress_credentials: string; // Consider a more secure way to store this
  seo_keywords: string[];
  content_calendar: any; // Define a more specific type for this
  cultural_preferences: string[];
  performance_metrics: any; // Define a more specific type for this
}