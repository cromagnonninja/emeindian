import { documentToReactComponents as docToReact } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import ImgWithCaption from "../../../components/contentful/ImgWithCaption";

// const

export default {
  [BLOCKS.EMBEDDED_ENTRY]: node => {
    if (node.data.target.sys.contentType.sys.id === "imageWithCaption") {
      const {
        media: {
          fields: {
            title,
            file: { url },
          },
        },
        caption,
      } = node.data.target.fields;

      return <ImgWithCaption alt={title} img={url} caption={caption} />;
    }
    return docToReact(node);
  },
};
