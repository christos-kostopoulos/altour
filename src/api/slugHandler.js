// keep node.js syntax as this function is used both by client and node
const _ = require('lodash')

module.exports = slugHandler = (language, templateKey, slug) => {
  if (language === 'en') {
    return _.kebabCase(slug).length === 0 ? '/en/' : `/en/${_.kebabCase(slug)}/`
  } 
  if (language === 'al') {
    return _.kebabCase(slug).length === 0 ? '/al/' : `/al/${_.kebabCase(slug)}/`
  }
  if (language === 'gr') {
    return _.kebabCase(slug).length === 0 ? '/' : `/${_.kebabCase(slug)}/`
  }
}
