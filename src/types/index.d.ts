export interface Models {
  template: ITemplateModel;
}

export interface ITemplateModel {
  updatePlaceHolders(templateData: TemplateData[]): void;
  updateResult(inuts: string[]): void;
  readonly displayingResult1: string;
  readonly displayingResult2: string;
  readonly allPlaceHolders: TemplateData[];
}

export type TemplateData = {
  tagName: string;
  placeHolderName: string;
};
