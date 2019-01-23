import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Link from 'next/link';
import { endpoint } from '../config';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const Footer = styled.footer`
  padding: 2em 1em;

  a {
    font-size: 1.5em;
    font-weight: bold;
    color: #ff6600;
    text-decoration: none;
  }
`;

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let posts = [];
    let page;

    try {
      page = parseInt(query.page || 1);
      const res = await fetch(`${endpoint}${page}`);
      posts = await res.json();
    } catch (err) {
      console.log(err);
    }
    return { posts, page };
  }

  render() {
    const { posts, page } = this.props;
    if (!posts.length) {
      return <Error statusCode={503} />
    }
    return (
      <Layout title='Hacker Next' description='News'>
        <PostList posts={posts} />

        <Footer>
          <Link href={`/?page=${page+1}`} prefetch>
            <a>Next Page</a>
          </Link>
        </Footer>
      </Layout>
    )
  }
}

export default Index;