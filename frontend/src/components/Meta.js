import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Welcome To The Hero's Corner",
  description: 'We sell select comic-books and comic-book memorabilia',
  keywords: 'comics, buy comics, spider-man, buy comic-books',
}

export default Meta
