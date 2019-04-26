import React from 'react'
import tw from 'tailwind.macro'
import styled from 'styled-components'
import { BugReport, Code, Comment, LightbulbOutline } from 'styled-icons/material'
import { LightBlueAnchor, Title } from '../styled'

const Features = () => (
  <Container>
    <Title id="features">Features</Title>
    <FeatureList>
      <Feature>
        <RedBug title="Software bug icon" />
        <FeatureDescription>
          <FeatureTitle>Extensive Checks</FeatureTitle>
          <p>
            Identify bugs, security, and performance issues before they hit production
            environment: 190 rules organized in 12 groups.
          </p>
        </FeatureDescription>
      </Feature>
      <Feature>
        <TealComment title="Comment icon" />
        <FeatureDescription>
          <FeatureTitle>Professional Support</FeatureTitle>
          <p>
            Bugs getting fixed fast, documentation gets extended with practical advice:
            check our{` `}
            <LightBlueAnchor href="https://plugins.jetbrains.com/plugin/10215-php-inspections-ea-ultimate-">
              latest release notes.
            </LightBlueAnchor>
          </p>
        </FeatureDescription>
      </Feature>
      <Feature>
        <IndigoCode title="Code brackets icon" />
        <FeatureDescription>
          <FeatureTitle>IDE Integration</FeatureTitle>
          <p>
            Increase team's velocity with on-the-fly analysis and quick-fixes with our
            plugin for PhpStorm 2016.2+ and IdeaUltimate.
          </p>
        </FeatureDescription>
      </Feature>
      <Feature>
        <BlueLightbulb title="Lightbulb outline icon" />
        <FeatureDescription>
          <FeatureTitle>Insightful Hints</FeatureTitle>
          <p>
            Better understanding of code quality and improvement space: Architecture,
            Probable bugs, Code Style and more.
          </p>
        </FeatureDescription>
      </Feature>
    </FeatureList>
  </Container>
)

const Container = styled.article`
  ${tw`container`}
`
const FeatureList = styled.div`
  ${tw`flex flex-wrap pb-5`}
`
const Feature = styled.section`
  ${tw`sm:w-1/2 lg:w-1/4 text-center w-full`}
`
const FeatureDescription = styled.div`
  ${tw`px-4`}
`
const FeatureTitle = styled.h3`
  ${tw`font-bold mb-1 text-xl`}
`
const RedBug = styled(BugReport)`
  ${tw`h-24 mb-1 mx-auto w-20 text-red-600`}
`
const TealComment = styled(Comment)`
  ${tw`h-24 mb-1 mx-auto w-20 text-teal-600`}
`
const IndigoCode = styled(Code)`
  ${tw`h-24 mb-1 mx-auto w-20 text-indigo-600`}
`
const BlueLightbulb = styled(LightbulbOutline)`
  ${tw`h-24 mb-1 mx-auto w-20 text-blue-600`}
`

export default Features
