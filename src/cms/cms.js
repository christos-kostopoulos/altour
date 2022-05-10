import CMS from 'netlify-cms-app'

import NotePreview from './preview-templates/NotePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'

CMS.registerPreviewTemplate('indexEN', IndexPagePreview)
CMS.registerPreviewTemplate('indexGR', IndexPagePreview)

CMS.registerPreviewTemplate('AboutEN', AboutPagePreview)
CMS.registerPreviewTemplate('AboutGR', AboutPagePreview)

CMS.registerPreviewTemplate('locationEn', NotePreview)
CMS.registerPreviewTemplate('locationGr', NotePreview)

