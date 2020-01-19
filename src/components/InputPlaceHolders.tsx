import * as React from "react";
import { observer } from "mobx-react-lite";
import { useModels } from "..";
import { TemplateData, ITemplateModel } from "src/types";

export const InputPlaceHolders = observer(() => {
  const { template } = useModels();
  return (
    <InputPlaceHoldersView
      placeHolders={template.allPlaceHolders}
      updateResult={(inputs: string[]) => template.updateResult(inputs)}
    />
  );
});

interface InputPlaceHoldersViewProps {
  placeHolders: TemplateData[];
  updateResult: ITemplateModel["updateResult"];
}

class InputPlaceHoldersView extends React.PureComponent<
  InputPlaceHoldersViewProps
> {
  private inputs: string[] = [];
  public render() {
    const { placeHolders } = this.props;
    this.inputs = [];
    return (
      <>
        <br />
        {placeHolders.map((placeHolder, index) => {
          return (
            <div key={Math.random()}>
              {placeHolder.placeHolderName.toUpperCase()}
              <input
                defaultValue=""
                onChange={this.textInputChangedHandler(index)}
                key={index}
              />
            </div>
          );
        })}
        {placeHolders.length > 0 && (
          <button onClick={this.updateResultHandler}>Display result</button>
        )}
        <br />
      </>
    );
  }
  private updateResultHandler = () => {
    this.props.updateResult(this.inputs);
  };
  private textInputChangedHandler = (index: number) => (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    this.inputs[index] = e.currentTarget.value;
  };
}
