import Link from 'next/link';
import styled from 'styled-components';

const Posts = styled.div`
  padding: 0 1em;

  .postItem {
    padding: 1em 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  h2 {
    font-size: 1.1em;
    font-weight: 400;
    margin: 0;
    margin-bottom: 0.5em;
  
    a {
      color: #333;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .postDetails {
    font-size: 0.9em;
    font-weight: bold;

    span {
      margin-right: 1em;
    }

    a {
      color: #ff6600;
      text-decoration: none;
    }
  }
`;

const PostList = ({ posts }) => (
  <Posts>
    { posts.map(post => (
      <div key={post.id} className='postItem'>
        <h2>
          <Link href={post.url}>
            <a>{post.title}</a>
          </Link>
        </h2>
        <div className='postDetails'>
          <span>{post.points || 0} points</span>
          <Link href={`/post?id=${post.id}`}>
            <a>{post.comments_count || 0} comments</a>
          </Link>
        </div>
      </div>
    ))}
  </Posts>
)

export default PostList;