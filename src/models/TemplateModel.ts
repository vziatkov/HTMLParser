import { action, observable, computed } from "mobx";
import { TemplateData, ITemplateModel } from "src/types";
import { GET_PLACEHOLDER } from "src/consts";

export class TemplateModel implements ITemplateModel {
  @observable.struct
  public placeHolders: TemplateData[] = [];
  @observable.struct
  public resultData: string[] = [];

  @action
  public updatePlaceHolders(placeHolders: TemplateData[]): void {
    this.placeHolders = [...placeHolders];
  }

  @action
  public updateResult(texts: string[]) {
    this.resultData = texts.slice();
  }

  @computed
  public get allPlaceHolders(): TemplateData[] {
    return this.placeHolders;
  }

  @computed
  public get displayingResult1(): string {
    return this.resultData.length > 0
      ? this.placeHolders
          .map((item, index) => {
            return `<${item.tagName} ${GET_PLACEHOLDER.concat(
              item.placeHolderName
            )}><ng-container>${this.resultData[index] || ""}</ng-container></${
              item.tagName
            }>`;
          })
          .join("")
      : "";
  }

  @computed
  public get displayingResult2(): string {
    return this.resultData.reduce((resStr, current) => {
      return resStr + (current || "") + " ";
    }, "");
  }
}
