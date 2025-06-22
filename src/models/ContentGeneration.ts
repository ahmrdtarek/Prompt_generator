export interface ContentGeneration {
  id: string;
  project_id: string;
  research_input: string;
  generated_prompts: string[];
  content_components: any; // Define a more specific type for this
  final_content: string;
  seo_metadata: any; // Define a more specific type for this
  publishing_status: string;
  performance_data: any; // Define a more specific type for this
}