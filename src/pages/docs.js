import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Logo from '../components/icons/Logo'
import LayoutDocs from '../components/LayoutDocs'
import { LightBlueLink, MainTitle } from '../components/styled'

const Docs = () => {
  return (
    <Layout>
      <Seo
        title="Docs"
        keywords={[
          `PHP`,
          `Inspection`,
          `PHP Inspections`,
          `EA Extended`,
          `EA Ultimate`,
          `Documentation`,
          `Docs`,
        ]}
      />
      <LayoutDocs>
        <Wrapper>
          <Intro>
            <LogoExtended brand="EA Extended" width="8rem" height="8rem" />
            <div>
              <DocsTitle>PHP&nbsp;Inspections (EA&nbsp;Extended)</DocsTitle>
              <p>
                This project is an OSS Static Code Analysis{` `}
                <LightBlueLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-"
                >
                  tool
                </LightBlueLink>
                {` `}
                for PhpStorm (2016.2+) and Idea Ultimate.
              </p>
            </div>
          </Intro>
          <Description>
            <p>It covers:</p>
            <ul>
              <li>Architecture Related Issues</li>
              <li>Weak Types Control and Possible Code Construct Simplifications</li>
              <li>Performance Issues</li>
              <li>Non-Optimal, Duplicate and Suspicious "if" Conditions</li>
              <li>Validation of Magic Methods Usage</li>
              <li>Regular Expressions</li>
              <li>Validation of Exception Handling Workflow</li>
              <li>Compatibility Issues</li>
              <li>Variety of Time-consuming Bugs</li>
              <li>PHPUnit API Usage</li>
              <li>Security Issues</li>
            </ul>
            <p>
              Some of inspections are expecting conditional statements (e.g. "if") to
              use group statement for wrapping body expressions. If this requirement is
              met then additional inspections are applied to the source code.
            </p>
            <p>
              On some projects CPU and therefore battery usage could be intensive, so it
              should be taken into account when traveling
            </p>
          </Description>
        </Wrapper>
      </LayoutDocs>
    </Layout>
  )
}

const DocsTitle = styled(MainTitle)`
  ${tw`mb-1`}
`

const LogoExtended = styled(Logo)`
  ${tw`w-32 lg:mr-6`}
`

const Wrapper = styled.div`
  ${tw`mx-auto w-5/6`}
`

const Intro = styled.div`
  ${tw`flex flex-wrap-reverse items-center justify-center lg:flex-no-wrap mb-6`}
`

const Description = styled.div`
  ${tw`text-xl`}

  p:first-of-type {
    ${tw`mb-1`}
  }

  ul {
    ${tw`ml-8 list-disc`}
  }
`

export default Docs
