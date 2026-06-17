import { post } from './post'
import { review } from './review'
import { event } from './event'
import { localizedString, localizedText } from './localizedFields'

export const schemaTypes = [localizedString, localizedText, post, review, event]
