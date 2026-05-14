export const mosaicTheme = {
    spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
    },

    radius: {
        none: '0px',
        sm: '4px',
        md: '8px',
    },

    // Палитра
    colors: {
        primary: {
            100: '#7fa36b',
            500: '#244739',
            600: '#1b352b',
            700: '#12241d',
        },

        gray: {
            100: '#d7e4c0',
            300: '#7b8a52',
            500: '#556136',
            700: '#394223',
            900: '#1c2412',
        },

        accent: {
            500: '#cfdc8c',
            600: '#a5b35c',
        },

        feedback: {
            success: '#7fa36b',
            warning: '#c4a747',
            danger: '#b85a4b',
            info: '#5d8aa8',
        },

        white: '#f4f7ee',

        black: '#081820',
    },

    shadows: {
        sm: '2px 2px 0 rgba(0,0,0,0.15)',
        md: '3px 3px 0 rgba(0,0,0,0.18)',
        lg: '5px 5px 0 rgba(0,0,0,0.22)',

        primary: {
            md: '3px 3px 0 #10211c',
            lg: '5px 5px 0 #10211c',
        },

        secondary: {
            md: '3px 3px 0 #3e4724',
            lg: '5px 5px 0 #3e4724',
        },

        accent: {
            md: '3px 3px 0 #8c9657',
            lg: '5px 5px 0 #8c9657',
        },

        focus: '0 0 0 2px rgba(136,192,112,0.4)',

        input: '2px 2px 0 rgba(0,0,0,0.12)',

        surfaceInset: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
    },

    typography: {
        fonts: {
            heading: "'Press Start 2P', monospace",
            body: "'Inter', sans-serif",
        },

        sizes: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '20px',
            xl: '28px',
        },

        lineHeights: {
            sm: '1.4',
            md: '1.6',
            lg: '1.8',
        },

        weights: {
            regular: 400,
            medium: 500,
            bold: 700,
        }
    },

    transitions: {
        fast: '0.08s ease',
        normal: '0.16s ease',
    },

    surfaces: {

        base: '#0b1c18',

        elevated: '#132923',

        overlay: '#1b352d',

        pixelTexture: `
      linear-gradient(
      45deg,
      transparent 48%,
      rgba(0,0,0,0.2) 50%,
      transparent 52%
    ),
    linear-gradient(
      -45deg,
      transparent 48%,
      rgba(0,0,0,0.2) 50%,
      transparent 52%
    )
  `,

        pixelTextureSize: '7px 7px',
    }
};

export type MosaicTheme = typeof mosaicTheme;