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
            .schemaType('settings')
            .documentId('settings')
        ),
      ...S.documentTypeListItems().filter(listItem => !['settings'].includes(listItem.getId() as string))
    ])