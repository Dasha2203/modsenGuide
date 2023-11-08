import useAuth from 'hooks/use-auth'

export const Main = () => {
  const { email } = useAuth()
  return (
    <div>
      Main {email}
    </div>
  )
}

export default Main