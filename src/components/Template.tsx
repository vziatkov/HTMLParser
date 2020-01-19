import * as React from "react";
import { observer } from "mobx-react-lite";
import { parseTemplate } from "../services/ParseTemplate";
import { useModels } from "..";
import { GET_PLACEHOLDER } from "../consts";

export const Template = observer(() => {
  const { template } = useModels();
  return (
    <TemplateView
      dataChangeHandler={(value: string) => {
        template.updatePlaceHolders(parseTemplate(value, GET_PLACEHOLDER));
      }}
    />
  );
});
interface TemplateViewProps {
  dataChangeHandler: (value: string) => void;
}

class TemplateView extends React.PureComponent<TemplateViewProps> {
  private textValue: string = "";
  public render() {
    return (
      <>
        <textarea rows={10} cols={100} onChange={this.textChanged} />
        <button onClick={this.clickHandler}> Parse template</button>
      </>
    );
  }

  private clickHandler = () => {
    this.props.dataChangeHandler(this.textValue);
  };
  private textChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    this.textValue = value;
  };
}
