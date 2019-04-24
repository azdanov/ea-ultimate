import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-cool-grey-050 pb-8 text-center">
      <div className="border-cool-grey-100 border-t pb-8" />©{` `}
      {new Date().getFullYear()}
      {` `}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-light-blue-vivid-900"
        href="https://github.com/kalessil"
      >
        Vladimir Reznichenko
      </a>
    </footer>
  )
}
