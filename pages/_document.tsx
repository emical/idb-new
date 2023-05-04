import React from 'react'
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import {ServerStyleSheets} from '@mui/styles'

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = context.renderPage

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })
    const initialProps = await Document.getInitialProps(context)
    return {
      ...initialProps, // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Sono:wght@200;400&display=swap" rel="stylesheet" /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Raleway:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta name="google-site-verification" content="HAapkDYqcktob19kGQ1QigfzWZDWkP9MUPt7WR9RfKY" />
          <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
          <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
          <link href="/static/favicons/site.webmanifest" rel="manifest" />
          <link href="/static/favicons/favicon.ico" rel="apple-touch-icon" sizes="180x180" />
          <link href="/static/favicons/favicon.ico" rel="icon" sizes="32x32" type="image/png" />
          <link href="/static/favicons/favicon.ico" rel="icon" sizes="16x16" type="image/png" />
          <link color="#4a9885" href="/static/favicons/favicon.ico" rel="mask-icon" />
          <script
            src="https://www.paypal.com/sdk/js?client-id=Aa40TEo-7DCkDozNIh0mFwmll_BKq90IFehzXeEU3yOuVbiwSvvEA6rb7VXXFxGsn-hW6S5Y9QAhRhBC&enable-funding=venmo&currency=USD"
            data-sdk-integration-source="button-factory"
          ></script>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5152402002915558"
            crossOrigin="anonymous"
          ></script>
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" defer></script>
          <script type="text/javascript" src="/static/staticjs/emicalculator.js" defer></script> */}
          {/* <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossOrigin="anonymous"
            defer
          ></script> */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" defer />
          {/* <script
            src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.min.js"
            integrity="sha256-TQq84xX6vkwR0Qs1qH5ADkP+MvH0W+9E7TdHJsoIQiM="
            crossOrigin="anonymous"
            defer
          ></script>
          <link rel="stylesheet" type="text/css" href="/static/staticjs/argon.css"></link>
          <link rel="stylesheet" type="text/css" href="/static/staticjs/calculator.css"></link> */}
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var storageKey = 'darkMode';
                  var classNameDark = 'dark-mode';
                  var classNameLight = 'light-mode';

                  function setClassOnDocumentBody(darkMode) {
                    document.body.classList.add(darkMode ? classNameDark : classNameLight);
                    document.body.classList.remove(darkMode ? classNameLight : classNameDark);
                  }

                  var preferDarkQuery = '(prefers-color-scheme: dark)';
                  var mql = window.matchMedia(preferDarkQuery);
                  var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                  var localStorageTheme = null;
                  try {
                    localStorageTheme = localStorage.getItem(storageKey);
                  } catch (err) {}
                  var localStorageExists = localStorageTheme !== null;
                  if (localStorageExists) {
                    localStorageTheme = JSON.parse(localStorageTheme);
                  }

                  if (localStorageExists) {
                    setClassOnDocumentBody(localStorageTheme);
                  } else if (supportsColorSchemeQuery) {
                    setClassOnDocumentBody(mql.matches);
                    localStorage.setItem(storageKey, mql.matches);
                  } else {
                    var isDarkMode = document.body.classList.contains(classNameDark);
                    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                  }
                })();
              `,
            }}
          />
          <Main />
          <NextScript />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-PPL8WQPJ30"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-PPL8WQPJ30');`,
            }}
          /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
