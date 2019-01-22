import React from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import { endpoint } from '../config';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

class Index extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const res = await fetch(endpoint);
      posts = await res.json();
    } catch (err) {
      console.log(err);
    }
    return { posts };
  }

  render() {
    const {posts} = this.props;
    if (!posts.length) {
      return <Error statusCode={503} />
    }
    return (
      <Layout title='Hacker Next' description='News'>
        <PostList posts={posts} />
      </Layout>
    )
  }
}

export default Index;