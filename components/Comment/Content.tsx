import { parseContent } from "../../helpers/comment";
import * as Styles from "./Comment.styles";

type ContentProps = {
  content: string;
};

const Content = ({ content }: ContentProps) => {
  const dangerousHtml = {
    __html: parseContent(content),
  };
  return <Styles.Content dangerouslySetInnerHTML={dangerousHtml} />;
};

export default Content;
