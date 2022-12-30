import { Html, Head, Main, NextScript } from 'next/document';

// This file is used to add Google Font stylesheets to the document and to avoid possible errors/warnings. Referenced from 'https://nextjs.org/docs/messages/no-stylesheets-in-head-component'. 

export default function Document() {
  return (
    <Html>
      <Head>

        {/* The 3 link tags below are for/from Google Fonts for the body text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&family=Open+Sans:wght@300&display=swap" rel="stylesheet" />

        {/* The 3 link tags below are for/from Google Fonts for header text (navbar and modal) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" href="/images/profile-logo-light.png" /> 

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}