import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Typography } from '@mui/material'
import { RegexEmail, RegexPassword, RoutesEnum } from 'consts'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useAppDispatch } from 'hooks/redux-hooks'
import { setUser } from "store/slices/user/userSlice"
import { FormContainer, FormLink, FormTitle } from 'ui/Form/styles'
import Input from 'ui/Input'
import Link from 'ui/Link'
import { Page } from 'ui/Page';

type LoginForm = {
  email: string
  password: string
}

export const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { handleSubmit, control, formState: { errors } } = useForm<LoginForm>({
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

      navigate(RoutesEnum.main)
    } catch (err) {
      console.log(err)
      setError('Что-то пошло не так')
    }
  }

  return (
    <Page>
      <Container>
        <FormContainer>
          <FormTitle>
            Вход
          </FormTitle>
          {error && <Typography color={"secondary"}>{error}</Typography>}
          <form onSubmit={handleSubmit(submit)}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Почта обязательна для заполнения',
                pattern: {
                  value: RegexEmail,
                  message: "Неверный формат почты"
                }
              }}
              render={({ field }) => (
                <Input
                  label="Email"
                  fullWidth
                  size="medium"
                  margin="normal"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
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
                  value: RegexPassword,
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
                  error={!!errors.password}
                  helperText={errors.password?.message}
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

          <FormLink>
            <Typography>
              Вы не зарегистрированы?
            </Typography>
            <Link to={RoutesEnum.register}>Регистрация</Link>
          </FormLink>
        </FormContainer>
      </Container>
    </Page>
  )
}

export default Login