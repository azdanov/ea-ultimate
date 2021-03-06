import styled from 'styled-components'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'

export const LightBlueLink = styled(Link)`
  ${tw`hover:underline text-light-blue-vivid-700`}
`
export const LightBlueLinkInactive = styled.span`
  ${tw`text-cool-gray-500 cursor-not-allowed`}
`
export const LightBlueAnchor = styled.a`
  ${tw`hover:underline text-light-blue-vivid-700`}
`

export const Title = styled.h2`
  ${tw`font-semibold mt-8 mb-4 text-4xl text-center`}
`

export const MainTitle = styled.h1`
  ${tw`font-semibold mb-3 leading-tight md:text-left text-4xl text-center`}
`

export const Badge = styled.span`
  ${tw`bg-indigo-500 leading-none ml-2 px-2 py-1 rounded-full text-white text-xs uppercase`}
`

export const TagList = styled.ul`
  ${tw`flex flex-wrap -mt-2`}
`

export const TagListItem = styled.li`
  ${tw`bg-indigo-500 leading-none ml-2 mt-2 px-2 py-1 rounded-full text-white text-xs uppercase`}
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
