import BlockContent, { BlockContentProps } from '@sanity/block-content-to-react'
import React from 'react'

export interface TextBlockProps extends BlockContentProps {
  isWrapped?: boolean
}

const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const TextBlock = ({ blocks, isWrapped = true }: TextBlockProps) => (
  <BlockContent
    renderContainerOnSingleChild={isWrapped}
    serializers={serializers}
    blocks={blocks}
  />
)

export default TextBlock
