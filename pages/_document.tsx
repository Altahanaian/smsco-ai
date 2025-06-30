import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar">
        <Head>
          <meta
            name="description"
            content="منصة استشارات وتدريب مدعومة بالذكاء الاصطناعي"
          />
          <meta
            name="keywords"
            content="استشارات, تدريب, ذكاء اصطناعي, SMSCO"
          />
          <link rel="canonical" href="https://smsco.ai" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
