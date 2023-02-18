import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import RenderContainer from '_hoc/RenderContainer'
import { CMSPage } from '_types/cms'

const Page = (props: CMSPage) => {
  return <RenderContainer {...props} />
}

export async function getStaticPaths({
  locales = [],
  defaultLocale = 'en',
}: GetStaticPathsContext) {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  locale = 'en',
  params,
  preview,
}: GetStaticPropsContext) {
  return {
    props: {},
  }
}

export default Page
