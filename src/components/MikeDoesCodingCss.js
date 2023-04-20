import { createGlobalStyle } from 'styled-components';

const MikeDoesCodingCss = createGlobalStyle`
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Big Shoulders Text', cursive;
        font-weight: bold;
        letter-spacing: 0.15rem;
        line-height: 1.7;
        margin: 1em 0 15px;
        padding: 0;
    }

    h1 {
        font-size: 36px;
    }
    h1 a, h2 a {
        color: inherit;
    }

    h2 {
        font-size: 30px;
    }

    h3 {
        font-size: 24px;
    }

    h4 {
        font-size: 20px;
    }

    a, p {
        font-family: Roboto;
        font-size: 18px;
        line-height: 1.7;
        letter-spacing: 0.1rem;
    }

    p {
        margin: 15px 0;
    }

    code {
        font-family: monospace;
    }

    blockquote {
        border-left: solid 4px gray;
        font-style: italic;
        padding-left: 16px;
    }

    ol, ul {
        font-family: Roboto;
        font-size: 18px;
        line-height: 1.7;
        list-style: inside;
        list-style-type: unset;
        padding-left: 16px;
    }

    strong {
        font-weight: bold;
    }

    deckgo-highlight-code {
        --deckgo-highlight-code-font-size: 18px;
        --deckgo-highlight-code-token-comment: rgb(150,150,150);
    }
`;

export default MikeDoesCodingCss;
