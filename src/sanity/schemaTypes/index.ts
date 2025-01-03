import { type SchemaTypeDefinition } from 'sanity'

import author from './author'
import blockContent from './blockContent'
import category from './category'
import language from './language'
import organization from './organization'
import post from './post'
import snippet from './snippet'
import static_page from './static_page'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, organization, snippet, language, static_page],
}
