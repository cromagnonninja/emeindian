import { documentToReactComponents as docToReact } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import Paragraph from "../../../components/contentful/Paragraph";
import headings from "./headings";
import embeddedEntries from "./embedded-entry";

export const documentToReactComponents = doc =>
  doc ? (
    docToReact(doc, {
      renderNode: {
        [BLOCKS.PARAGRAPH]: node => (
          <Paragraph>
            {node.content.map((node, i) =>
              node.nodeType === "text" ? <>{node.value}</> : docToReact(node),
            )}
          </Paragraph>
        ),
        ...headings,
        ...embeddedEntries,
      },
    })
  ) : (
    <></>
  );
