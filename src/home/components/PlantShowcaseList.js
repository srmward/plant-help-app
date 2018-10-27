import React, { Component } from 'react'
import { Query, renderToStringWithData } from 'react-apollo'
import {
  baseStyles,
  plantCardWrapperStyles,
  cardStyles,
  signUpButtonStyles,
  signUpButtonShowStyles,
  joinGraph,
} from './styles'
import gql from 'graphql-tag'
import PlantShowcase from './PlantShowcase'
import { AuthConsumer } from '../../common/contexts/AuthContext'
import JoinButton from '../../common/ctas/JoinButton'

//TODO: Grab image as proper size
export default class PlantShowcaseList extends Component {
  state = {
    showGraph: false,
  }
  componentDidMount() {
    document.body.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.body.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = ({ target }) =>
    this.setState({ showGraph: target.scrollLeft >= 3325 })
  render() {
    return (
      <Query
        css={baseStyles}
        query={gql`
          {
            plants {
              name
              description
              images {
                url
                size
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>{console.log(error)}</p>
          const mapPlantData = isAuth => {
            let plantData = isAuth ? data.plants : data.plants.slice(0, 5)
            return plantData.map((plant, i) => (
              <div key={i} css={cardStyles}>
                <PlantShowcase data={plant} />
              </div>
            ))
          }

          return (
            <AuthConsumer>
              {({ isAuth }) => (
                <div css={plantCardWrapperStyles}>
                  {mapPlantData(isAuth)}{' '}
                  {!isAuth && (
                    <div
                      css={
                        this.state.showGraph
                          ? signUpButtonShowStyles
                          : signUpButtonStyles
                      }
                    >
                      <p css={joinGraph}>
                        join today to learn more about your collection, access
                        detailed water tables, and receive custom care guides.
                      </p>
                      <JoinButton />
                    </div>
                  )}
                </div>
              )}
            </AuthConsumer>
          )
        }}
      </Query>
    )
  }
}
