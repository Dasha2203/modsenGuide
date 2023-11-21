import { Controller,SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { RegexEmail, RegexPassword, RoutesEnum } from '@consts'
import { db } from '@firebaseApp'
import { useAppDispatch } from '@hooks/redux-hooks'
import { Button, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { setUser } from '@store/slices/user/userSlice'
import { FormContainer, FormLink, FormTitle } from '@ui/Form/styles';
import Input from '@ui/Input'
import Link from '@ui/Link';
import { Page } from '@ui/Page'
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

type RegisterForm = {
  name: string
  email: string
  password: string
}

export const Register = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<RegisterForm>({
    defaultValues: {
      name: '',
      password: '',
      email: ''
    }
  })

  const createUserInfo = async (id: string, name: string) => {
    try {
      await addDoc(collection(db, 'usersInfo'), {
        name,
        favoritesPlaces: [],
        userId: id
      })

    } catch (err) {
      console.log(err)
    }
  }

  const submit: SubmitHandler<RegisterForm> = async (data) => {
    try {
      const { email, password, name } = data
      const auth = getAuth()

      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      const { uid, refreshToken: token} = user
      await createUserInfo(user.uid, name)

      dispatch(setUser({
        email,
        id: uid,
        token
      }))

      navigate(RoutesEnum.main)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Page>
      <Container>
        <FormContainer>
          <FormTitle>Регистрация</FormTitle>
          <form onSubmit={(handleSubmit(submit))}>
            <Controller
              name="name"
              rules={{
                required: 'Имя обязательно для заполнения'
              }}
              control={control}
              render={({ field }) => (
                <Input
                  label="Имя"
                  fullWidth={true}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  size="medium"
                  margin="normal"
                  variant="outlined"
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                />
              )}
            />
            <Controller
              name="email"
              rules={{
                required: 'Почта обязательна для заполнения',
                pattern: {
                  value: RegexEmail,
                  message: "invalid email address"
                }
              }}
              control={control}
              render={({ field }) => (
                <Input
                  label="Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth={true}
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
                  value={field.value}
                  onChange={(e) => field.onChange(e)}
                  error={!!errors.password}
                  helperText={errors.password?.message}
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
              Зарегистрироваться
            </Button>
          </form>
          <FormLink>
            <Typography>
              Вы уже зарегистрированы?
            </Typography>
            <Link to={RoutesEnum.login}>Войти</Link>
          </FormLink>
        </FormContainer>
      </Container>
    </Page>
  )
}

export default Register