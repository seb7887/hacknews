import React from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import { endpoint } from '../config';
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
      <>
        <h1>Hacker Next</h1>
        <PostList posts={posts} />
      </>
    )
  }
}

export default Index;