import HomePagehero from '_organism/HomePageHero/HomePageHero'
import { Components, ComponentsTypeName } from '_types/cms'
import dynamic from 'next/dynamic'

const DynamicHomePagehero = dynamic(
  () => import('_organism/HomePageHero/HomePageHero')
) as typeof HomePagehero

const RenderComponet = (data: Components) => {
  switch (data._type) {
    case ComponentsTypeName.HOME_PAGE_HERO:
      return <DynamicHomePagehero {...data} />
    default:
      return null
  }
}

export default RenderComponet
