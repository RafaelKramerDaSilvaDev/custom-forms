import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* Estilo para o track (fundo) */
    ::-webkit-scrollbar {
        width: 12px;
    }

    /* Estilo para a thumb (peça móvel) */
    ::-webkit-scrollbar-thumb {
        background-color: #BDBDBD; /* Cinza médio */
        background-clip: content-box;
    }

    /* Estilo para quando o mouse está sobre a thumb */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #9E9E9E; /* Cinza um pouco mais escuro */
    }
`;
