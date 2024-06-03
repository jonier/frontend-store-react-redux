import { Box, ThemeProvider } from "@mui/material";
import theme from "./assets/configTheme"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser } from "./redux/userSlice";
import Header from "./components/Header";
import Email from "./components/Email";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const getUser = async () => {
      //http://localhost:3000/api/v1/users/2
      // fetch('https://jsonplaceholder.typicode.com/users/2', {
      //   method: "GET",
      //   headers: { "Content-Type": "application/json" },
      // })
      //   .then((response) => response)
      //   .then((data) => dispatch(addUser(data)))
      //   .catch((error) => console.log(error)) JONIER

      const response = await fetch('http://localhost:3000/api/v1/users')
      //Return an object {}
      const resUser = await response.json()
      const user = resUser.data
      console.log('Vea pues user: Response ', response.status)
      console.log('Vea pues user: user ', resUser)

      dispatch(addUser({
        email: user.email,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName
      }))
    }
    getUser()

    return () => {
      getUser()
    }
  }, [dispatch])


  return (
    <ThemeProvider theme={theme}>
      <Box>Hola Mundo</Box>
      <Header />
      <Email />
    </ThemeProvider>
  );
}

export default App;
