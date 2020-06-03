import { documentToReactComponents as docToReact } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { H1, H2, H3, H4, H5, H6 } from "../../../components/contentful/Heading";

const Heading = Component => node => (
  <Component>
    {node.content.map((node, i) =>
      node.nodeType === "text" ? <>{node.value}</> : docToReact(node),
    )}
  </Component>
);

export default {
  [BLOCKS.HEADING_1]: Heading(H1),
  [BLOCKS.HEADING_2]: Heading(H2),
  [BLOCKS.HEADING_3]: Heading(H3),
  [BLOCKS.HEADING_4]: Heading(H4),
  [BLOCKS.HEADING_5]: Heading(H5),
  [BLOCKS.HEADING_6]: Heading(H6),
};
