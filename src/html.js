/* eslint-disable react/forbid-prop-types,react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(properties) {
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html {...properties.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {properties.headComponents}
        {/* Code snippet to speed up Google Fonts rendering: googlefonts.3perf.com */}
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700|Work+Sans:400,700"
          as="fetch"
          crossOrigin="anonymous"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `!function(e,n,t){"use strict";var o="https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,700|Work+Sans:400,700",r="__3perf_googleFonts_222c1";function c(e){(n.head||n.body).appendChild(e)}function a(){var e=n.createElement("link");e.href=o,e.rel="stylesheet",c(e)}function f(e){if(!n.getElementById(r)){var t=n.createElement("style");t.id=r,c(t)}n.getElementById(r).innerHTML=e}e.FontFace&&e.FontFace.prototype.hasOwnProperty("display")?(t[r]&&f(t[r]),fetch(o).then(function(e){return e.text()}).then(function(e){return e.replace(/@font-face {/g,"@font-face{font-display:swap;")}).then(function(e){return t[r]=e}).then(f).catch(a)):a()}(window,document,localStorage);`,
          }}
        />
        {/* End of code snippet for Google Fonts */}
      </head>
      <body {...properties.bodyAttributes}>
        {properties.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: properties.body }}
        />
        {properties.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
