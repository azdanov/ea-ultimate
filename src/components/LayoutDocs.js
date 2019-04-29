/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/index.css'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { capitalize } from 'lodash'
import classNames from 'classnames'
import { createPath } from '../utils'
import GitHub from './icons/Github'
import Twitter from './icons/Twitter'
import Patreon from './icons/Patreon'
import JetBrains from './icons/JetBrains'

const LayoutDocs = ({ children, headingList, currentCategory }) => {
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
        className={classNames([
          { '-mt-24 -mb-24': showMenu, hidden: !showMenu },
          `bg-cool-grey-050`,
          `docs-menu`,
          `flex-shrink-0`,
          `h-screen`,
          `md:block`,
          `z-20`,
          `overflow-auto`,
          `pb-10`,
          `pl-3`,
          `lg:pl-4`,
          `pr-1`,
          `pt-8`,
          `sticky`,
          `top-0`,
          `w-48`,
          `lg:w-56`,
        ])}
      >
        {showMenu && (
          <a
            href="#main-menu-toggle"
            id="main-menu-close"
            className="absolute h-5 icon icon-close md:hidden mr-1 right-0 w-10"
            aria-label="Close main menu"
            onClick={e => {
              e.preventDefault()
              setShowMenu(false)
            }}
          />
        )}
        <div className="flex justify-between mb-4 text-cool-grey-400 w-32">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.patreon.com/kalessil"
            aria-label="Patreon"
          >
            <Patreon
              width="1.5rem"
              height="1.5rem"
              className="w-5 hover:text-cool-grey-700"
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
              className="w-5 hover:text-cool-grey-700"
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
              className="w-5 hover:text-cool-grey-700"
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
              className="w-5 hover:text-cool-grey-700"
            />
          </a>
        </div>
        <ul className="leading-snug sm:mx-auto text-xl">
          <li className="mb-3 text-cool-grey-500">Documentation</li>
          <li className="mb-2 text-base">
            <Link to="/docs" className="hover:underline" activeClassName="underline">
              Introduction
            </Link>
          </li>
          {entries.map(({ name, oid }) => {
            if (!name.endsWith(`.md`)) return null
            const category = name.replace(`.md`, ``)
            const subMenu = () => (
              <ul className="border-cool-grey-100 border-l-2 leading-tight mt-2">
                {headingList.map(({ id, value: subCategory }) => (
                  <li key={id} className="mb-2 overflow-hidden text-base">
                    <Link
                      to={`docs/${createPath(name)}/#${id}`}
                      className="hover:underline inline-block ml-3"
                      activeClassName="underline"
                    >
                      {subCategory}
                    </Link>
                  </li>
                ))}
              </ul>
            )
            return (
              <li key={oid} className="mb-2 overflow-hidden text-base">
                <Link
                  to={`docs/${createPath(name)}`}
                  className="hover:underline"
                  activeClassName="underline"
                  partiallyActive
                >
                  {capitalize(category)}
                </Link>
                {category === currentCategory ? subMenu() : null}
              </li>
            )
          })}
        </ul>
      </nav>
      {showMenu && (
        <a
          href="#main-menu-toggle"
          className="z-10 w-screen top-0 opacity-75 left-0 h-screen fixed cursor-pointer block bg-black backdrop"
          tabIndex="-1"
          aria-hidden="true"
          hidden
          onClick={e => {
            e.preventDefault()
            setShowMenu(false)
          }}
        />
      )}
      <main className="px-4 pb-8 overflow-hidden ml-auto border-l border-cool-gray-100 bg-white">
        {!showMenu && (
          <a
            href="#main-menu"
            id="main-menu-toggle"
            className="w-10 rounded-full ml-2 md:hidden mb-2 left-0 icon-menu icon h-10 fixed bottom-0 border-black border-2"
            aria-label="Open main menu"
            onClick={e => {
              e.preventDefault()
              setShowMenu(true)
            }}
          >
            <span className="sr-only">Open main menu</span>
          </a>
        )}

        <div className="mt-8">{children}</div>
      </main>
    </div>
  )
}

LayoutDocs.propTypes = {
  children: PropTypes.node.isRequired,
  currentCategory: PropTypes.string,
  headingList: PropTypes.arrayOf(
    PropTypes.shape({
      level: PropTypes.number,
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default LayoutDocs
