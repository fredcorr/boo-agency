import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import RenderContainer from '_hoc/RenderContainer/RenderContainer'
import { PreviewSuspense } from 'next-sanity/preview'
import { allPages, getQuery } from '_sanity/queries'
import { getClient } from '_sanity/client'
import { CMSPage } from '_types/cms'
import { lazy } from 'react'

const RenderPreview = lazy(() => import('_hoc/RenderPreview/RenderPreview'))

const Page = ({ preview, ...props }: CMSPage) => {
  return !!preview && !!props.pageSlug ? (
    <PreviewSuspense fallback="Loading...">
      <RenderPreview query={getQuery(props.pageSlug)} />
    </PreviewSuspense>
  ) : (
    <RenderContainer {...props} preview />
  )
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
  preview,
  params,
}: GetStaticPropsContext) {
  const slug = (params?.slug as string[]) || ['/']

  if (!!preview) {
    return { props: { preview, pageSlug: slug } }
  }

  const props = await getClient(preview).fetch(getQuery(slug))

  return {
    props: {
      ...props,
    },
    revalidate: 10,
  }
}
