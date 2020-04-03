// @flow

import React from 'react';
import { graphql, Link } from 'gatsby'
import styled from 'styled-components';
import DetailLayout from '../components/layout/DetailLayout';
import HelmetMeta from '../components/layout/HelmetMeta';
import Row from '../components/layout/Row';
import LinkArrow from '../components/icons/LinkArrow';

const linkBorderRadius: string = '25px';

const HistoryList = styled.ul`
  li {
    margin-bottom: 33px;
  }
`;

const Wrapper = styled.div`
  border-radius: ${linkBorderRadius};
  box-shadow: ${props => props.theme.shadow};
  max-width: 352px;
  transition: transform 250ms ease-out;
  will-change: transform;

  &:hover {
    transform: scale(1.03);
  }
`;

const Header = styled.div`
  background-color: ${props => props.theme.darkText};
  border-top-left-radius: ${linkBorderRadius};
  border-top-right-radius: ${linkBorderRadius};
  position: relative;
  height: 289px;
`;

const Letter = styled.p`
  color: ${props => props.theme.gray5};
  bottom: -59px;
  font-size: 242px;
  font-weight: 600;
  left: 25px;
  line-height: initial;
  position: absolute;
`;

const Footer = styled.div`
  background-color: ${props => props.theme.white};
  border-bottom-left-radius: ${linkBorderRadius};
  border-bottom-right-radius: ${linkBorderRadius};
  padding-bottom: 36px;
  padding-left: 43px;
  padding-right: 43px;
  padding-top: 36px;
`;

const LinkTitle = styled.h6`
  font-size: 36px;
  font-weight: 600;
  padding-bottom: 14px;
`;

const Description = styled.p`
  color: ${props => props.theme.gray3};
  font-size: 16px;
`;

type PageData = {
  node: {
    id: string,
    frontmatter: {
      description: string,
      path: string,
      title: string
    }
  }
};

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Array<PageData>
    }
  }
};

function Work(props: Props): React$Node {
  const { edges } = props.data.allMarkdownRemark;
  const navItems: Array<React$Node> = React.useMemo(() => {
    return edges.map(item => {
      const { frontmatter } = item.node;
      const letter: string = frontmatter.title.substring(0, 1);

      return (
        <li key={item.node.id}>
          <Link to={frontmatter.path}>
            <Wrapper>
              <Header>
                <Letter>{letter}</Letter>
              </Header>
              <Footer>
                <LinkTitle>{frontmatter.title}</LinkTitle>
                <Row justify="space-between">
                  <Description>{frontmatter.description}</Description>
                  <LinkArrow />
                </Row>
              </Footer>
            </Wrapper>
          </Link>
        </li>
      );
    });
  }, [edges]);

  return (
    <DetailLayout headline="Werk">
      <HelmetMeta />
      <HistoryList>{navItems}</HistoryList>
    </DetailLayout>
  );
}

export const WorkQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { group: { eq: "work" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            description
          }
        }
      }
    }
  }
`;

export default React.memo(Work);
