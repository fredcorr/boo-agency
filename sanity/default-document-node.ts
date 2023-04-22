import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import { DataSets } from './types/base'

const resolvePreviewUrl = (dataset: string) => {
  switch (dataset) {
    case DataSets.PROD:
      return process.env.SANITY_STUDIO_PROD_PREVIEW_BASE
    case DataSets.STAGE:
      return process.env.SANITY_STUDIO_STAGE_PREVIEW_BASE
    default:
      return process.env.SANITY_STUDIO_TEST_PREVIEW_BASE
  }
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType, dataset }) => {
  switch (schemaType) {
    case `page`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: any) =>
              doc?.slug?.current && doc?.slug?.current !== '/'
                ? `${resolvePreviewUrl(dataset)}/api/preview?slug=${doc.slug.current}`
                : `${resolvePreviewUrl(dataset)}/api/preview`,
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
