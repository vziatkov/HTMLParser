import * as React from "react";
import { observer } from "mobx-react-lite";
import { useModels } from "..";
import { Link } from "react-router-dom";

export const Result = observer(() => {
  const { template } = useModels();
  return <ResultView linkTo="/Task2" result={template.displayingResult1} />;
});

export const Result2 = observer(() => {
  const { template } = useModels();
  return <ResultView linkTo="/Task1" result={template.displayingResult2} />;
});

interface ResultViewProps {
  result: string;
  linkTo: string;
}

class ResultView extends React.PureComponent<ResultViewProps> {
  public render() {
    const { result, linkTo } = this.props;
    return (
      <>
        {result}
        <Link to={linkTo}>{linkTo}</Link>
      </>
    );
  }
}
