import RenderComponet from '_hoc/RenderComponent/RenderComponent'
import Layout from '_hoc/Layout/Layout'
import { CMSPage } from '_types/cms'

export const StandardPage = ({ components, ...props }: CMSPage) => {
  return (
    <Layout {...props}>
      <>{components && components.map((comp) => RenderComponet(comp))}</>
    </Layout>
  )
}
