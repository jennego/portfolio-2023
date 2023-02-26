import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

const document = {
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Hello",
          data: {},
          marks: [{ type: "bold" }],
        },
        {
          nodeType: "text",
          value: " world!",
          data: {},
          marks: [{ type: "italic" }],
        },
      ],
    },
  ],
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) =>
      `<motion.p>${next(node.content)}<motion.p>`,
  },
}

documentToHtmlString(document, options)
// -> <custom-paragraph><custom-bold>Hello</custom-bold><u> world!</u></custom-paragraph>
