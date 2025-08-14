import type { Theme } from '@mui/material'

export default function MuiTextField(theme: Theme) {
  return ({
  styleOverrides: {
    root: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        color: '#fff',
        '& fieldset': {
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '&:hover fieldset': {
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.primary.main,
        }
      },
      '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-focused': {
          color: theme.palette.primary.main,
        }
      },
      '& .MuiInputBase-input': {
        '&::placeholder': {
          color: 'rgba(255, 255, 255, 0.5)',
          opacity: 1
        }
      }
    }
  }
})
}
