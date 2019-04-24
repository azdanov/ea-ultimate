/* eslint-disable react/prop-types */
import React from 'react'
import { render } from 'react-testing-library'
import NotFound from '../404'

jest.mock(`../../components/Seo`, () => () => `SeoMock`)
jest.mock(`../../components/Layout`, () => ({ children }) => <>{children}</>)

test(`Displays the correct title`, () => {
  const { getByText } = render(<NotFound />)

  expect(getByText(`Not Found`)).toBeTruthy()
  expect(getByText(`You just hit a page that doesn't exist...`)).toBeTruthy()
})
