export interface FormationDto {
  type: string;
  name: string;
  itemLink?: string;
  option?: string;
  description?: string;
  organization: string;
  location: string;
  startDate?: string;
  endDate?: string;
  obtention?: boolean;
  skills: string[];
}
