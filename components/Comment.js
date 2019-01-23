import styled from 'styled-components';

const Div = styled.div`
  .comment {
    margin-bottom: 1.5em;
  }

  .user {
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  .content {
    font-size: 0.9em;

    &:global(p) {
      margin: 0;
      margin-bottom: 0.5em;
      word-wrap: break-word;
    }

    &:global(a) {
      color: #ff6600;
      text-decoration: underline;
    }

    &:global(pre) {
      max-width: 100%;
      overflow: scroll;
    }
  }

  .comments {
    margin-top: 1em;
    border-left: 1px solid rgba(0,0,0,0.1);
    padding-left: 1em;
  }
`;

const Comment = ({ comment }) => (
  <Div>
    <div className='user'>{comment.user}</div>
    <div className='content' dangerouslySetInnerHTML={ { __html: comment.content }} />

    { comment.comments && 
      <div className='comments'>
        { comment.comments.map(nestedComment => (
          <Comment comment={nestedComment} />
        ))}
      </div>
    }
  </Div>
)

export default Comment;