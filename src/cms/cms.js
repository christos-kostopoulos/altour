import CMS from 'netlify-cms-app'

import NotePreview from './preview-templates/NotePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('indexEN', IndexPagePreview)
CMS.registerPreviewTemplate('indexDE', IndexPagePreview)

CMS.registerPreviewTemplate('noteEn', NotePreview)
CMS.registerPreviewTemplate('noteDe', NotePreview)

