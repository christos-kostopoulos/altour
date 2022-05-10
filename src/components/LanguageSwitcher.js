import React from 'react'
import { Link } from 'gatsby'

import nav from '../data/navbar'

import './LanguageSwitcher.scss'

const LanguageSwitcher = ({ slug }) => {
  const componentStyle = 'LanguageSwitcher'
  let activeLanguage = slug.startsWith('/en/') ? 'en' : 'gr'
  let url = slug.startsWith('/en/')
    ? slug.replace('/en/', '/')
    : slug.replace('/', '/en/')
  return (
    <div className={componentStyle}>
      {nav.map(item => (
        <Link
          className={`${componentStyle}-item${
            activeLanguage === item.lang ? '-active' : ''
          }`}
          to={url}
        >
          {item.lang}
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitcher
