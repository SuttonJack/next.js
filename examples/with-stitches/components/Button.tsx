'use client'

import { CSS, ComponentProps, VariantProps } from '@stitches/react'
import { ElementType, forwardRef } from 'react'

import { styled } from '../stitches.config'

interface StitchesMedia {
  [x: string]: any
  initial?: any
  as?: any
  css?: CSS
}

type StitchesPropsToExclude = 'true' | 'false' | StitchesMedia

export const StyledButton = styled('button', {
  display: 'inline-block',
  maxWidth: '100%',
  border: 'none',
  br: 10,
  fontWeight: 600,
  fontFamily: '$sans',
  letterSpacing: '0',
  textAlign: 'center',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: 'background 0.2s ease, box-shadow 0.2s ease',
  appearance: 'none',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    size: {
      small: {
        p: '8px 14px',
        fontSize: '12px',
        lineHeight: 'normal',
      },
      medium: {
        p: '8px 14px',
        fontSize: '14px',
        lineHeight: '21px',
      },
      large: {
        p: '8px 14px',
        fontSize: '14px',
        lineHeight: '21px',
      },
    },
    rounded: {
      true: {
        br: '$round',
      },
    },
    loading: {
      true: {
        backgroundColor: 'var(--gray-80)',
        cursor: 'not-allowed',
        opacity: 0.2,
      },
    },
    dynamic: {
      true: {
        color: '$background!important',
        bc: '$text100!important',
        '&:hover': {
          bc: '$accent7!important',
          color: '$background!important',
        },
        '&:disabled': {
          bc: '$accent4!important',
        },
        '&:focus': {
          bc: '$accent7!important',
        },
      },
    },
    variant: {
      '': {
        bc: '$text100',
        color: '$text00',
        '&:focus': { bs: '0 0 0 2px #444' },
        '&:hover': {
          bc: '$accent7',
        },
        '&:disabled': {
          bc: 'var(--gray-80)',
          opacity: 0.6,
          userSelect: 'none',
        },
      },
      secondary: {
        bc: '$elevationContent2',
        color: '$text100',
        '&:hover': {
          bc: '$elevationContent2Hover',
          color: '$text100',
        },
        '&:disabled': {
          opacity: 0.6,
          userSelect: 'none',
        },
      },
      default: {
        color: '$text100',
        bc: '$elevationBase3',
        '&:hover': {
          bc: '$elevationBase3Hover',
          color: '$text100',
        },
        '&:disabled': {
          opacity: 0.6,
          userSelect: 'none',
        },
      },
      primary: {
        bc: '$blue',
        color: '#FFF',
        '&:hover': {
          color: '#FFF',
          bc: '#0064FF',
        },
        '&:disabled': {
          bc: '#0064FF',
          opacity: 0.6,
          userSelect: 'none',
        },
      },
      special: {
        background:
          'linear-gradient(76.77deg, #000000 0%, #FFFFFF 100%), #0A84FF',
        backgroundBlendMode: 'soft-light, normal',
        color: '#FFF',
        '&:hover': {
          background:
            'linear-gradient(76.77deg, #000000 0%, #FFFFFF 100%), #00AAFF',
        },
        '&:disabled': {
          opacity: 0.6,
          userSelect: 'none',
        },
      },
      specialPrimary: {
        bc: '$blue',
        color: '#FFF',
        '&:hover': {
          color: '#FFF',
          bc: '#0064FF',
        },
        '&:disabled': {
          bc: '#0064FF',
          opacity: 0.6,
          userSelect: 'none',
        },
      },
      specialSecondary: {
        bc: '$elevationBase3',
        '> span': {
          backgroundImage:
            'linear-gradient(to right, rgb(0, 69, 255), rgb(5, 121, 255), rgb(6, 184, 255))',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'rgb(5, 121, 255)',
        },
        '&:hover': {
          bc: '$elevationBase3Hover',
        },
        '&:disabled': {
          opacity: 0.6,
          userSelect: 'none',
        },
      },
      spotify: {
        bc: '#1db954',
        color: '#ffffff',
        '&:hover': {
          bc: '#1aa74c',
          color: '#ffffff',
        },
      },
      danger: {
        bc: '$elevationBase3',
        color: '$red',
        '&:hover': {
          color: '$red',
          bc: '$elevationBase3Hover',
        },
        '&:disabled': {
          opacity: 0.6,
          userSelect: 'none',
        },
      },
      light: {
        bc: '#ffffff',
        color: '#000000',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        '&:focus': { bs: '0 0 0 2px #EAEAEA' },
        '&:hover': { color: '#000', bc: 'var(--gray-10)' },
        '&:disabled': {
          bc: '#EAEAEA',
          opacity: 0.6,
          userSelect: 'none',
        },
      },
      plain: {},
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      rounded: 'true',
      css: {
        br: '$round',
        '&::before': { br: '$round' },
      },
    },
  ],
  defaultVariants: {
    variant: '',
    size: 'medium',
  },
})

type ButtonVariantsType = VariantProps<typeof StyledButton>

type ButtonVariants = {
  [Property in keyof ButtonVariantsType]: Exclude<
    ButtonVariantsType[Property],
    StitchesPropsToExclude
  >
}

type StyledButtonType = ButtonVariants &
  Omit<ComponentProps<typeof StyledButton>, keyof ButtonVariants>

export type ButtonVariant = ButtonVariants['variant']

export interface ButtonProps extends StyledButtonType {
  as?: ElementType
  href?: string
  openNewTab?: boolean
}

/**
 * Component that renders a button element with configurable theme options
 * @component
 * @param {ButtonProps} props
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as, openNewTab, type = 'submit', ...p }, forwardedRef) => {
    return (
      <StyledButton
        {...p}
        as={as}
        type={type}
        ref={forwardedRef}
        disabled={Boolean(p?.loading || p?.disabled)}
        onClick={(e) => {
          if (p.href && !as) {
            if (openNewTab) {
              window.open(p.href, '_blank')
            } else {
              window.location.href = p.href
            }
          }
          p.onClick?.(e)
        }}
      >
        {p.variant === 'specialSecondary' ? (
          <span>{p.children}</span>
        ) : p.loading ? null : (
          p.children
        )}
      </StyledButton>
    )
  }
)

export default Button
