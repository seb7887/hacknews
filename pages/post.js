import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Error from 'next/error';
import { endpoint } from '../config';

const Main = styled.main`
  padding: 1em;
  
  h1 {
    font-size: 1.5em;
    margin: 0;
    font-weight: 300;
    padding-bottom: 0.5em;

    a {
      color: #333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .postDetails {
    font-size: 0.8em;
    padding-bottom: 1em;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    margin-bottom: 1em;

    strong {
      margin-right: 1em;
    }

    a {
      color: #ff6600;
    }
  }
`;

class Post extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let post;
    try {
      const postId = query.id;

      if (! (/[0-9]+/).test(postId)) throw 'Post ID must be numeric';

      const res = await fetch(`${endpoint}/item/${postId}`);
      post = await res.json();
    } catch(err) {
      post = undefined;
    }

    return { post };
  }

  render() {
    const { post } = this.props;
    if (typeof post === 'undefined' || !post) return <Error statusCode={503} />;

    return (
      <Layout title={post.title}>
        <Main>
          <h1><a href={post.url}>{post.title}</a></h1>
          <div className='postDetails'>
            <strong>{post.points} points</strong>
            <strong>{post.comments_count} comments</strong>
            <strong>{post.time_ago}</strong>
          </div>
        </Main>
      </Layout>
    );
  }
}

export default Post;