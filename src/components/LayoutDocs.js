/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/index.css'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { capitalize } from 'lodash'
import { createPath } from '../utils'
import GitHub from './icons/Github'
import Twitter from './icons/Twitter'
import Patreon from './icons/Patreon'
import JetBrains from './icons/JetBrains'

const LayoutDocs = ({ children, headingList, docName }) => {
  const [showMenu, setShowMenu] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      github {
        repository(owner: "kalessil", name: "phpinspectionsea") {
          object(expression: "master:docs/") {
            ... on GitHub_Tree {
              entries {
                name
                oid
              }
            }
          }
        }
      }
    }
  `)
  const { entries } = data.github.repository.object

  return (
    <div className="flex">
      <nav
        id="main-menu"
        aria-label="Main menu"
        className={`docs-menu sticky top-0 w-48 ${
          showMenu ? `-mt-24 -mb-24` : `hidden`
        } md:block z-20 bg-cool-grey-050 flex-shrink-0 pl-3 pb-10 pr-1 pt-8 h-screen overflow-auto`}
      >
        {showMenu && (
          <a
            href="#main-menu-toggle"
            id="main-menu-close"
            className="icon icon-close w-10 h-6 absolute right-0 md:hidden"
            aria-label="Close main menu"
            onClick={e => {
              e.preventDefault()
              setShowMenu(false)
            }}
          />
        )}
        <div className="w-32 flex justify-between text-cool-grey-400 mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.patreon.com/kalessil"
            aria-label="Patreon"
          >
            <Patreon
              width="1.5rem"
              height="1.5rem"
              className="hover:text-cool-grey-700"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/kalessil"
            aria-label="Twitter"
          >
            <Twitter
              width="1.5rem"
              height="1.5rem"
              className="hover:text-cool-grey-700"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kalessil/phpinspectionsea"
            aria-label="GitHub"
          >
            <GitHub
              width="1.5rem"
              height="1.5rem"
              className="hover:text-cool-grey-700"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-"
            aria-label="JetBrains"
          >
            <JetBrains
              width="1.5rem"
              height="1.5rem"
              className="hover:text-cool-grey-700"
            />
          </a>
        </div>
        <ul className="text-xl sm:mx-auto leading-snug">
          <li className="text-cool-grey-500 mb-3">Documentation</li>
          <li className="text-base mb-2">
            <Link to="/" className="hover:underline" activeClassName="underline">
              Introduction
            </Link>
          </li>
          {entries.map(({ name, oid }) => {
            if (!name.endsWith(`.md`)) return null
            const doc = name.replace(`.md`, ``).toLowerCase()
            const subMenu = () => (
              <ul className="border-l-2 border-cool-grey-100 mt-2 leading-tight">
                {headingList.map(({ id, text }) => (
                  <li key={id} className="text-base mb-2 overflow-hidden">
                    <Link
                      to={`docs/${createPath(name)}/#${id}`}
                      className={`inline-block hover:underline ml-3`}
                      activeClassName="underline"
                    >
                      {capitalize(text)}
                    </Link>
                  </li>
                ))}
              </ul>
            )
            return (
              <li key={oid} className="text-base mb-2 overflow-hidden">
                <Link
                  to={`docs/${createPath(name)}`}
                  className="hover:underline"
                  activeClassName="underline"
                  partiallyActive
                >
                  {capitalize(doc)}
                </Link>
                {doc === docName ? subMenu() : null}
              </li>
            )
          })}
        </ul>
      </nav>
      {showMenu && (
        <a
          href="#main-menu-toggle"
          className="backdrop block fixed w-screen h-screen z-10 bg-black opacity-75 cursor-pointer left-0 top-0"
          tabIndex="-1"
          aria-hidden="true"
          hidden
          onClick={e => {
            e.preventDefault()
            setShowMenu(false)
          }}
        />
      )}
      <main className="bg-white overflow-hidden px-4 pb-8 ml-auto border-l border-cool-gray-100">
        {!showMenu && (
          <a
            href="#main-menu"
            id="main-menu-toggle"
            className="icon icon-menu w-10 h-10 border-2 ml-2 mb-2 rounded-full border-black left-0 bottom-0 fixed md:hidden"
            aria-label="Open main menu"
            onClick={e => {
              e.preventDefault()
              setShowMenu(true)
            }}
          >
            <span className="sr-only">Open main menu</span>
            <span className="fa fa-bars" aria-hidden="true" />
          </a>
        )}

        <div className="mt-8">{children}</div>
      </main>
    </div>
  )
}

LayoutDocs.propTypes = {
  children: PropTypes.node.isRequired,
  docName: PropTypes.string,
  headingList: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.number,
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default LayoutDocs
