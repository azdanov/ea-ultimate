import React from 'react'
import { render } from 'react-testing-library'
import NotFound from '../404'

jest.mock(`../../components/Seo`, () => () => `SeoMock`)

test(`Displays the correct title`, () => {
  const { getByText } = render(<NotFound />)

  expect(getByText(`NOT FOUND`)).toBeTruthy()
  expect(getByText(`You just hit a route that doesn't exist...`)).toBeTruthy()
})
