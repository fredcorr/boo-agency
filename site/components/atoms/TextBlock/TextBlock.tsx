import { PortableText, PortableTextProps } from '@portabletext/react'
import React from 'react'

export interface TextBlockProps extends PortableTextProps {
  isWrapped?: boolean
}

const components = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const TextBlock = ({ isWrapped = true, ...props }: TextBlockProps) => (
  <PortableText
    components={components}
    {...props}
  />
)

export default TextBlock
