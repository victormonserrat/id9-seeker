import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
    <Head>
      <link
        rel="apple-touch-icon"
        href="https://lumiere-a.akamaihd.net/v1/images/favicon-owk-vader-512x512_60a315f4.png?region=0%2C0%2C512%2C512"
      />
      <link
        rel="icon"
        sizes="196x196"
        href="https://lumiere-a.akamaihd.net/v1/images/favicon-owk-vader-512x512_60a315f4.png?region=0%2C0%2C512%2C512"
      />
      <link
        rel="shortcut icon"
        href="https://lumiere-a.akamaihd.net/v1/images/favicon-owk-vader-512x512_60a315f4.png?region=0%2C0%2C512%2C512"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
