import { TemplateData } from "src/types";

export const parseTemplate = (
  htmlString: string,
  placeHolder: string
): TemplateData[] => {
  const div = document.createElement("div");
  div.insertAdjacentHTML("beforeend", htmlString);

  const result: TemplateData[] = [];
  div.querySelectorAll("*").forEach((node: Element) => {
    const placeHolderName = node.getAttributeNames().find(name => {
      return (
        name.toLocaleLowerCase().indexOf(placeHolder.toLocaleLowerCase()) !== -1
      );
    });
    if (placeHolderName) {
      result.push({
        tagName: node.tagName.toLocaleLowerCase(),
        placeHolderName: placeHolderName.replace(placeHolder, "")
      });
    }
  });
  return result;
};
