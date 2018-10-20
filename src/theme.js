import { css, keyframes } from 'react-emotion'

export const COLORS = {
  PRIMARY: '#003265',
  SECONDARY: '#7E8EB4',
  ACCENT: '#DCA875',
  ACCENT_HIGHLIGHT: '#A23B72',
  OFFWHITE: '#F3F4F8',
  PASTEL_BLUE: '#B5BDD4',
  ERROR_RED: '#F06449',
  ERROR_HIGHLIGHT: '#DB162F',
  DISABLED_COLOR: '#CDCDCD',
  DISABLED_BG_COLOR: '#FAFAFA',
}

export const MEDIA = {
  MOBILE_UP: '@media (min-width: 500px)',
  TABLET_UP: '@media (min-width: 768px)',
  TABLET_DOWN: '@media (max-width: 767px)',
  DESKTOP_UP: '@media (min-width: 1200px)',
  DESKTOP_DOWN: '@media (max-width: 1199px)',
  TAB_DESK_DOWN: '@media (max-width: 992px)',
}

export const FONTS = {
  ROBOTO: '"Roboto Mono", sans-serif',
  SYSTEM: '',
}

export const SPACING = {
  VERTICAL_HEIGHT: {
    BODY_SECTION: '2rem',
  },
  GUTTER: {
    PADDING_LEFT: '30px',
  },
}

export const LAYOUT_STYLES = css`
  ${MEDIA.TABLET_UP} {
    max-width: 35rem;
  }
  ${MEDIA.DESKTOP_UP} {
    max-width: 42rem;
  }
  margin-bottom: 5rem;
`

export const TRANSITION_TIMINGS = {
  CUBIC: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
  FLICKER: 'cubic-bezier(0, 0.51, 0.22,-0.29)',
  EASE: 'ease-in',
}

export const COMMON_STYLES = {
  MOBILE_ONLY: {
    [MEDIA.TABLET_UP]: {
      display: 'none',
    },
  },
  CLICKABLE: {
    cursor: 'pointer',
    transition: `all 0.2s ${TRANSITION_TIMINGS.EASE}`,
  },
  MOBILE_HIDDEN: {
    [MEDIA.TABLET_DOWN]: {
      display: 'none',
    },
  },
  DESKTOP_ONLY: {
    [MEDIA.TABLET_DOWN]: {
      display: 'none',
    },
  },
}

export const FADEUP = keyframes`
  0% {
    transform: translate3d(0,0,0);
    opacity: 0;
    visiblity: hidden;
  }

  100% {
    transform: translate3d(0, -30px, 0);
    opacity: 1;
    visibility: visible;
  }
`

export const FADEIN = keyframes`
  0% {
    transform: translate3d(0,0,0);
    opacity: 0;
    visiblity: hidden;
  }

  100% {
    transform: translate3d(0, 30px, 0);
    opacity: 1;
    visibility: visible;
  }
`

export const FADEOUT = keyframes`
  0% {
    transform: translate3d(0,30px,0);
    opacity: 1;
    visiblity: visible;
  }

  100% {
    transform: translate3d(0,0, 0);
    opacity: 0;
    visibility: hidden;
  }
`

export const FADEDOWN = keyframes`
  0% {
    transform: translate3d(0,0,0);
    opacity: 1;
    visiblity: visible;
  }

  40% {
    transform: translate3d(0, 30px, 0);
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
`
