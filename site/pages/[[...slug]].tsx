import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import RenderContainer from '_hoc/RenderContainer/RenderContainer'
import { allPages, page, navPages } from 'sanity/queries'
import { getClient } from 'sanity/client'
import { CMSPage } from '_types/cms'

const Page = (props: CMSPage) => {
  return <RenderContainer {...props} />
}
export default Page

export async function getStaticPaths({
  locales = [],
  defaultLocale = 'en',
}: GetStaticPathsContext) {
  const paths = await getClient(false)
    .fetch(allPages)
    .then((res) =>
      res.map((path: CMSPage) => {
        return {
          params: {
            slug: path.slug.current.split('/'),
            id: path._id,
          },
        }
      })
    )

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  locale = 'en',
  params,
  preview,
}: GetStaticPropsContext) {
  const slug = (params?.slug as string[]) || ['/']
  const props = await getClient(preview).fetch(page(slug))

  return {
    props: {
      ...props,
    },
  }
}
