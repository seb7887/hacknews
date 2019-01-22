import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Layout = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name="theme-color" content="#ff6600" />
    </Head>
    <div className='container'>
      <nav>
        <Link href='/'>
          <a><span className='back'>&lt;</span><span className='title'>Hacker Next</span></a>
        </Link>
      </nav>
      {children}
    </div>
  </>
)

export default Layout;