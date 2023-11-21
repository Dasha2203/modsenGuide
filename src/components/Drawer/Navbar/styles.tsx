import LogoIcon from '@icons/LogoIcon'
import { Box, Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Logo = styled(LogoIcon)(({ theme }) => ({
  width: '30px',
  height: '32px',
  marginBottom: '40px',

  [theme.breakpoints.down('lg')]: {
    width: '20px',
    height: '20px',
    marginBottom: '15px',
    order: 1
  }
}),
);

export const Button = styled(MuiButton)(({ theme }) => ({
  borderWidth: '3px',
  borderColor: '#C4C4C4',
  borderStyle: 'solid',
  width: '60px',
  height: '60px',
  padding: '15px',
  minWidth: 'auto',

  [theme.breakpoints.down('lg')]: {
    width: '40px',
    height: '40px',
    padding: '8px'
  }
}),
);

export const AvatarButton = styled(MuiButton)(({ theme }) => ({
  marginTop: 'auto',
  padding: 0,
  width: '54px',
  height: '54px',
  minWidth: 'auto',
  borderWidth: '3px',
  borderColor: '#C4C4C4',
  borderStyle: 'solid',
  borderRadius: '50%',

  [theme.breakpoints.down('lg')]: {
    width: '30px',
    height: '30px',
    border: 'none',
    order: 2,
    marginTop: 0
  }
}),
);

export const WrapNavbar = styled(Box)(({ theme }) => ({
  padding: '30px 25px 38px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',

  '& .logout': {
    marginTop: 'auto'
  },

  [theme.breakpoints.down('lg')]: {
    '& .logout': {
      marginTop: 0,
      order: 2,
    },
  },

  [theme.breakpoints.down('md')]: {
    padding: '30px 15px 15px',
    backgroundColor: '#EFF2F8'
  }
}),
);

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',

  [theme.breakpoints.down('lg')]: {
    marginTop: 'auto',
    order: 3
  }
}),
);
