import NextApp from "next/app";
import { CacheProvider } from "@emotion/core";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from "emotion";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>
          <Component {...pageProps} />
        </CacheProvider>
      </ThemeProvider>
    );
  }
}
