import styled from 'styled-components'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'

export const LightBlueLink = styled(Link)`
  ${tw`hover:underline text-light-blue-vivid-700`}
`

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 576px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 992px) {
    max-width: 992px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`
