import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Box, Button, Typography } from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useAppDispatch } from 'hooks/redux-hooks'
import { useNavigate } from 'react-router-dom'

import Input from 'components/Input'
import Link from 'components/Link'
import { setUser } from "store/slices/user/userSlice"

type LoginForm = {
  email: string
  password: string
}

export const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { handleSubmit, control } = useForm<LoginForm>({
    defaultValues: {
      password: '',
      email: ''
    }
  })

  const submit: SubmitHandler<LoginForm> = async (data) => {
    setError('')
    
    try {
      const { email, password } = data
      const auth = getAuth()

      const { user } = await signInWithEmailAndPassword(auth, email, password)

      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.getIdToken()

      }))

      const token = await user.getIdToken()
      localStorage.setItem('token', token)
      
      navigate('/')
    } catch (err) {
      console.log(err)
      setError('Что-то пошло не так')
    }
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
          }}
        >
          Вход
        </Typography>
        {error && <Typography color={"secondary"}>{error}</Typography>}
        <form onSubmit={(handleSubmit(submit))}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Почта обязательна для заполнения',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address dashka"
              }
            }}
            render={({ field }) => (
              <Input
                label="Email"
                fullWidth
                size="medium"
                margin="normal"
                variant="outlined"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Пароль обязателен для заполнения',
              pattern: {
                value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                message: 'Пароль должен состоять из 6 символов, включая спецсимвол, минимум 1 заглавную букву'
              }
            }}
            render={({ field }) => (
              <Input
                label="Пароль"
                fullWidth={true}
                size="medium"
                margin="normal"
                variant="outlined"
                value={field.value}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Button
            variant="contained"
            size="medium"
            fullWidth
            type="submit"
            sx={{
              mt: '25px'
            }}
          >
            Войти
          </Button>
        </form>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px', gap: '5px' }}>
          <Typography>
            Вы не зарегистрированы?
          </Typography>
          <Link to={"/register"}>Регистрация</Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Login