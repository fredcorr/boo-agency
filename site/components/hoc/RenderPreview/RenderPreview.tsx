import RenderContainer from '_hoc/RenderContainer/RenderContainer'
import { usePreview } from '_hooks/usePreview';

export interface RenderPreviewProps {
  query: string
}

const RenderPreview = ({ query }: RenderPreviewProps) => {
  const data = usePreview(null, query);
  return (
    <RenderContainer {...data} />
  )
}

export default RenderPreview;