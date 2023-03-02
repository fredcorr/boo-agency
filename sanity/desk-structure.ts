import { StructureBuilder } from "sanity/desk";
import { MdHome } from 'react-icons/md'

export const DeskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdHome)
        .child(
          S.document()
            .schemaType('Settings')
            .documentId('Settings')
        ),
      ...S.documentTypeListItems().filter(listItem => !['Settings'].includes(listItem.getId()))
    ])