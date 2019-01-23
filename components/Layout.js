import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

const Div = styled.div`
  nav {
    background: #ff6600;
    color: #fff;
    font-weight: bold;

    a {
      display: inline-block;
      color: #fff;
      text-decoration: none;

      &:hover {
        background-color: rgba(0,0,0,0.1);
      }
    }

    .back {
      display: inline-block;
      height: 1em;
      width: 1em;
      font-weight: 300;
      padding: 1em 0 1em;
      text-align: center;
    }

    .title {
      display: inline-block;
      padding: 1em;
    }
s
    .back-button {
      font-size: 0.9em;
      padding-right: 1em;
      cursor: pointer;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #f0f0f0;
    font-family: system-ui;
  }
`;

const Layout = ({ title, description, children, backButton }) => (
  <Div>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>

    <GlobalStyle />

    <div className='container'>
      <nav>
        { backButton && <span onClick={() => Router.back()} className='back-button'>&#x2b05;</span>}
        <Link href='/'>
          <a><span className='title'>Hacker Next</span></a>
        </Link>
      </nav>
      {children}
    </div>
  </Div>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Layout;