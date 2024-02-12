import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/styles';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
            <Head>
                <meta charSet="utf-8"/>
                {/* Use minimum-scale=1 to enable GPU rasterization */}
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
                <meta name="description" content="AD-LIB LIVE website"/>
                <meta name="keywords" content="drip,hk,drip website,drip.hk,drip site,drip chat,chat web,DRIP,Drip"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <style global jsx>
                    {`
                        html, body {
                            min-height: 100%;
                            min-width: 100%;
                            justify-content:center;
                            display:flex;
                        }
                        #__next {
                            width: 100%;
                            background-color:#ffffff;
                            padding:0;
                            min-height:100vh
                            font-family: Noto Sans KR, 맑은고딕, Gulim, dotum, 돋음, sans-serif;
                        }
                        .emoji-mart-preview {
                            display: none;
                            }
                        .emoji-mart-search {
                            display: none;
                        }
                    `}
                </style>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}

MyDocument.getInitialProps = async ctx => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            <React.Fragment key="styles">
                {initialProps.styles}
                {sheets.getStyleElement()}
                {flush() || null}
            </React.Fragment>,
        ],
    };
};

export default MyDocument;