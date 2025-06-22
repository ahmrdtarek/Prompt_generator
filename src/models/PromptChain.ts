export interface PromptChain {
  id: string;
  phase: string;
  prompts: string[];
  dependencies: string[];
  cultural_validation: boolean;
  quality_score: number;
  execution_status: string;
}