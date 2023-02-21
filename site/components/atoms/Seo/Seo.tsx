import { useRouter } from 'next/router'
import { SeoType } from '_types/cms'
import Head from 'next/head'
import React from 'react'

const Seo = ({ description, keywords, featureImage, title }: SeoType) => {
  const { asPath } = useRouter()
  
  return (
    <Head>
      <title>{title}</title>
      {description && (
        <meta name="description" content={description} />
      )}
      {keywords && (
        <meta
          name="keywords"
          content={keywords ? keywords.join(', ') : ''}
        />
      )}
      <meta property="og:title" content={title} />
      {featureImage && (
        <meta property="og:image" content={featureImage.url} />
      )}

      <meta property="og:url" content={process.env.CANONICAL_URL + asPath} />
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {featureImage && (
        <meta name="twitter:image" content={featureImage.url} />
      )}
    </Head>
  )
}

export default Seo
