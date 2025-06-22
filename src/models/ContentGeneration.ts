export interface ContentGeneration {
  id: string;
  project_id: string;
  research_input: string;
  generated_prompts: string[];
  content_components: any; // Define a more specific type later if needed
  final_content: string;
  seo_metadata: any; // Define a more specific type later if needed
  publishing_status: string;
  performance_data: any; // Define a more specific type later if needed
}