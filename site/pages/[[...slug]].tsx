import { GetStaticPathsContext, GetStaticPropsContext } from 'next'

export default function Page(props: any) {
  return <div></div>
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
