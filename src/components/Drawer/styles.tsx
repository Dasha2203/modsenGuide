import MuiDrawer from '@mui/material/Drawer'
import { CSSObject,styled, Theme } from '@mui/material/styles'

export const openedMixin = (theme: Theme): CSSObject => ({
  width: '600px',
  whiteSpace: 'normal',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: '110px',
  [theme.breakpoints.down('md')]: {
    width: `70px`,
  },
  [theme.breakpoints.down('sm')]: {
    right: 0,
  },
});

export const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    maxWidth: '600px',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    [theme.breakpoints.down('md')]: {
      width: '350px',
    },

  }),
);