import { useRouter } from 'next/router'
import { CMSPage } from '_types/cms'
import Head from 'next/head'
import React from 'react'

const Seo = ({ title, seo }: CMSPage) => {
  const { asPath } = useRouter()
  const ogTitle = seo?.title || title
  
  return (
    <Head>
      <title>{ogTitle}</title>
      {seo?.description && (
        <meta name="description" content={seo?.description} />
      )}
      {seo?.keywords && (
        <meta
          name="keywords"
          content={seo.keywords ? seo?.keywords.join(', ') : ''}
        />
      )}
      <meta property="og:title" content={ogTitle} />
      {seo?.featureImage && (
        <meta property="og:image" content={seo.featureImage.url} />
      )}

      <meta property="og:url" content={process.env.CANONICAL_URL + asPath} />
      {seo?.description && (
        <meta name="twitter:description" content={seo?.description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      {seo?.featureImage && (
        <meta name="twitter:image" content={seo?.featureImage.url} />
      )}
    </Head>
  )
}

export default Seo
