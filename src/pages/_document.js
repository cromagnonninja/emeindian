import Document, { Html, Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";
import { Global, css } from "@emotion/core";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Global
            style={css`
              * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
              }
            `}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
