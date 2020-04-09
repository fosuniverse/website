import classnames from 'classnames';
import { graphql } from 'gatsby';
import { Container } from 'reactstrap';
import * as React from 'react';
// Relative imports
import { IndexPageProps } from '../types';

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {
      name,
      tagline,
    } = this.props.data.site.siteMetadata;

    return (
      <Container className="temp-container mt-5 mx-auto">
        <h1><i className="fas fa-globe-africa mr-2" />{name}</h1>
        <p>{tagline}</p>
      </Container>
    );
  }
}
