import React from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import { endpoint } from '../config';

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
        <div>
          { posts.map(post => (
            <h2 key={post.id}>{post.title}</h2>
          ))}
        </div>
      </>
    )
  }
}

export default Index;