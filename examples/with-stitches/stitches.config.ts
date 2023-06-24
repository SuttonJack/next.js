/** @see apps/next_worlds/src/components/StitchesStylesheet.tsx */

import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      highlight: '#0077FF',
      negative: '#E14949',
      yellow100: '#F7BE52',
      yellow200: '#FFB425',
      background: '#1A1A1A',
      backgroundA10: 'rgba(26,26,26,0.1)',
      backgroundA20: 'rgba(26,26,26,0.2)',
      backgroundA30: 'rgba(26,26,26,0.3)',
      backgroundA40: 'rgba(26,26,26,0.4)',
      backgroundA50: 'rgba(26,26,26,0.5)',
      backgroundA60: 'rgba(26,26,26,0.6)',
      backgroundA70: 'rgba(26,26,26,0.7)',
      backgroundA80: 'rgba(26,26,26,0.8)',
      backgroundA90: 'rgba(26,26,26,0.9)',
      backgroundTranslucent: 'rgba(26,26,26,0.6)',
      text100: '#FFFFFF',
      text90: 'rgba(255, 255, 255, 0.9)',
      text80: 'rgba(255, 255, 255, 0.8)',
      text70: 'rgba(255, 255, 255, 0.7)',
      text60: 'rgba(255, 255, 255, 0.6)',
      text50: 'rgba(255, 255, 255, 0.5)',
      text40: 'rgba(255, 255, 255, 0.4)',
      text30: 'rgba(255, 255, 255, 0.3)',
      text20: 'rgba(255, 255, 255, 0.2)',
      text10: 'rgba(255, 255, 255, 0.1)',
      text05: 'rgba(255, 255, 255, 0.05)',
      text00: '#000000',
      accent1: '#262626',
      accent2: '#333333',
      accent3: '#444444',
      accent4: '#666666',
      accent5: '#888888',
      accent6: '#999999',
      accent7: '#EAEAEA',
      accent8: '#FAFAFA',
      elevationBase1: '#000000',
      elevationBase2: '#1A1A1A',
      elevationBase3: '#262626',
      elevationBase3Hover: '#3C3C3C',
      elevationContent1: '#1A1A1A',
      elevationContent2: '#404040',
      elevationContent2Hover: '#535353',
      elevationContent3: '#4D4D4D',
      semanticPrimary: '#FFFFFF',
      semanticHover: 'rgba(255, 255, 255, 0.1)',
      semanticContent: '#404040',
      semanticPopover: 'rgba(38, 38, 38, 0.8)',
      primary: '#0A84FF',
      primaryForeground: '#FFFFFF',
      primaryLight: '#198cff',
      primaryLighter: '#3d9eff',
      primaryDark: '#007cfa',
      primaryDarker: '#006bd6',
      primaryLightA50: 'rgba(25,140,255,0.5)',
      primaryDarkA50: 'rgba(0,124,250,0.5)',
      primaryA30: 'rgba(10,132,255,0.3)',
      primaryA50: 'rgba(10,132,255,0.5)',
      primaryA60: 'rgba(10,132,255,0.6)',
      primaryA70: 'rgba(10,132,255,0.7)',
      red100: '#FF1A1A',
      red200: '#EE0000',
      blue: '#0A84FF',
      cyan: '#64D2FF',
      green: '#30D158',
      indigo: '#5E5CE6',
      mint: '#63E6E2',
      orange: '#FF9F0A',
      pink: '#FF375F',
      purple: '#BF5AF2',
      red: '#FF453A',
      teal: '#40C8E0',
      yellow: '#FFD60A',
    },
    gradients: {
      backgroundDark:
        'linear-gradient(167deg,#252629 5%,rgba(0, 0, 0, 0) 35%), linear-gradient(225deg, rgba(0, 0, 0, 0) 30%, #22140f 100%), linear-gradient(180deg, rgba(38, 31, 27, 0.15) 30%, #221500 100%)',
      large:
        'linear-gradient( 167deg, #f7f6f8 5%, rgba(255, 255, 255, 0) 35%), linear-gradient(225deg, rgba(255, 255, 255, 0) 30%, #f5e0df 100%), linear-gradient(180deg, rgba(226, 213, 194, 0.15) 30%, #fbe6c9 100%)',
      blueDark: 'linear-gradient(167deg, #252629 5%, rgba(0, 0, 0, 0) 35% )',
      blue: 'linear-gradient( 167deg, #f7f6f8 5%, rgba(255, 255, 255, 0) 35%), linear-gradient(225deg, rgba(255, 255, 255, 0) 30%, #b9e4f8 100%), linear-gradient(180deg, rgba(226, 213, 194, 0.15) 30%, #ffd3d9 100%)',
      dim: 'linear-gradient( 167deg, #f7f6f8 5%, rgba(255, 255, 255, 0) 70%), linear-gradient(225deg, rgba(255, 255, 255, 0) 30%, #f4ecee 100%), linear-gradient(180deg, rgba(226, 213, 194, 0.15) 30%, #f8e9dc 100%)',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '48px',
      8: '56px',
      9: '64px',
      10: '72px',
      11: '80px',
      12: '88px',
      13: '96px',
      14: '104px',
      15: '112px',
      16: '120px',
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '48px',
      8: '56px',
      9: '64px',
      10: '72px',
      11: '80px',
      12: '88px',
      13: '96px',
      14: '104px',
      15: '112px',
      16: '120px',
    },
    fontSizes: {
      xs: '10px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      max: '48px',
    },
    letterSpacings: {
      xs: 'normal',
      sm: 'normal',
      md: 'normal',
      lg: 'normal',
      xl: '-0.33px',
      '2xl': '-0.47px',
      '3xl': '-0.79px',
      max: '-1.07px',
    },
    lineHeights: {
      xs: '12px',
      sm: '16px',
      md: '20px',
      lg: '24px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '40px',
      max: '56px',
    },
    fonts: {
      display: `NoeDisplay, sans-serif`,
      sans: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
    },
    filters: {
      translucent: 'saturate(180%) blur(20px)',
    },
    fontWeights: {
      reg: 400,
      semibold: 500,
      bold: 700,
      black: 900,
    },
    borderWidths: {},
    borderStyles: {},
    shadows: {
      primary:
        '0px 20px 40px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.1)',
    },
    radii: {
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      round: '100px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    transitions: {
      ease: 'cubic-bezier(0.19, 1, 0.22, 1)',
      bgColor: 'background-color 0.3s $ease',
      border: 'border 0.3s $ease',
      boxShadow: 'box-shadow 0.3s $ease',
    },
  },
  media: {
    bpMobileS: '(min-width: 425px)',
    isMobile: '(max-width: 576px)',
    bp1: '(min-width: 576px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1200px)',
    bp5: '(min-width: 1800px)',
    bp6: '(min-width: 2560px)',
    hbp1: '(min-height: 850px)',
    hbp2: '(min-height: 890px)',
    hbp3: '(min-height: 900px)',
    hbp4: '(min-height: 960px)',
    hbp5: '(min-height: 1080px)',
    mhbp1: '(max-height: 780px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
      textAlign: value,
    }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({
      flexWrap: value,
    }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
      alignSelf: value,
    }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({
      flexGrow: value,
    }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
      flexBasis: value,
    }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
      boxShadow: value,
    }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({
      overflowX: value,
    }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({
      overflowY: value,
    }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    appearance: (value: Stitches.PropertyValue<'appearance'> | string) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
})

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'NoeDisplay',
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      src: `url('/fonts/noe-display-bold.woff2') format('woff2')`,
    },
    {
      fontFamily: 'Inter',
      fontWeight: '100 900',
      fontStyle: 'normal',
      fontDisplay: 'optional',
      src: `url('/fonts/inter-var-latin.woff2') format('woff2')`,
    },
  ],
  ':root': {
    '--sidebar-nav-width': '280px',
    '--background': '#eff0f4',
    '--background-light': '#ffffff',
    '--background-dark': '#000000',
    '--background-translucent': 'rgba(255, 255, 255, 0.72)',
    '--background-translucent-dark': 'rgba(0, 0, 0, 0.6)',
    '--background-translucent-input': 'rgba(255, 255, 255, 0.3)',
    '--background-translucent-input-dark': 'rgba(0, 0, 0, 0.3)',
    '--commerce': '#00aaff',
    '--error': '#de071c',
    '--error-light': '#fef0f0',
    '--error-dark': '#c02c2c',
    '--success': '#67ce67',
    '--success-light': '#f0faf0',
    '--warning': '#f7be52',
    '--warning-light': '#fffaf5',
    '--danger': '#e14949',
    '--patreon': 'rgb(255, 66, 77)',
    '--patreon-hover': 'rgb(255, 53, 65)',
    '--offset': '10px',
    '--gray-05': '#e0d9d1',
    '--gray-10': '#e4e4e7',
    '--gray-15': '#d7d9da',
    '--gray-40': '#959a9d',
    '--gray-50': '#7a7a85',
    '--gray-60': '#656565',
    '--gray-80': '#313135',
    '--gray-90': '#18181b',
    '--gray-100': '#000000',
    '--ON': 'initial',
    '--OFF': ' ',
  },
  'html.light, html.dark': { '--light': 'var(--ON)', '--dark': 'var(--OFF)' },
  'html.dark': { '--light': 'var(--OFF)', '--dark': 'var(--ON)' },
  'html, body': {
    minWidth: '320px',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  },
  body: {
    margin: '0px',
    padding: '0px',
    overflowX: 'hidden',
    color: 'var(--grey-90)',
    fontWeight: 400,
    fontSize: '17px',
    fontFamily: '$sans',
    fontStyle: 'normal',
    backgroundColor: '$background',
    textRendering: 'optimizelegibility',
    transition: 'background-color 0.2s ease',
  },
  'body, body #root': {
    minHeight: '100vh',
  },
  '@supports (-webkit-touch-callout: none)': {
    'body, body #root': { minHeight: '-webkit-fill-available' },
  },
  '#root': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  'body, button, input, select, textarea': {
    direction: 'ltr',
    textAlign: 'left',
    fontSynthesis: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  svg: { maxWidth: '100%', verticalAlign: 'middle' },
  ul: { margin: '0', padding: '0', listStyle: 'none' },
  a: { color: 'inherit', textDecoration: 'none' },
  '::selection': { background: 'rgba(0, 85, 255, 0.2)' },
  html: {
    boxSizing: 'border-box',
    height: '100%',
    quotes: `'"' '"'`,
    fontFeatureSettings: '"rlig" 1,"calt" 0',
  },
  '*': { boxSizing: 'inherit' },
  '*, ::after, ::before': { boxSizing: 'border-box' },
  /** Google ReCaptcha badge */
  '.grecaptcha-badge': {
    visibility: 'hidden',
  },
  /** Radix UI Portal */
  '*[data-radix-popper-content-wrapper]': {
    zIndex: '10000 !important',
  },
})

export type CSS = Stitches.CSS<typeof config>
