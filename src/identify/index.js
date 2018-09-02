import React from 'react'
import { headingStyles } from '../common/styles'
import EmailForm from './components/EmailForm'
import { identifyContentStyles } from './styles'

export default () => (
  <div>
    <h1 css={headingStyles}>identify (broken page)</h1>
    <p css={identifyContentStyles}>coming soon.</p>
    <p css={identifyContentStyles}>
      enter your email below to receive updates when the feature is released.
    </p>
    <EmailForm />
  </div>
)
