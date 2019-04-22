import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-cool-grey-050 text-center pb-8">
      <div className="border-t border-cool-grey-100 pb-8" />©{` `}
      {new Date().getFullYear()}
      {` `}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="text-light-blue-vivid-900 hover:underline"
        href="https://github.com/kalessil"
      >
        Vladimir Reznichenko
      </a>
    </footer>
  )
}
