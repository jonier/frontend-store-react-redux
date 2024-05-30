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
    const getUser = () => {
      //http://localhost:3000/api/v1/users/2
      // fetch('https://jsonplaceholder.typicode.com/users/2', {
      //   method: "GET",
      //   headers: { "Content-Type": "application/json" },
      // })
      //   .then((response) => response)
      //   .then((data) => dispatch(addUser(data)))
      //   .catch((error) => console.log(error))
      dispatch(addUser({
        email: 'jonier@gmail.com',
        userName: 'jonier',
        firstName: 'Isablle',
        lastName: 'Murillo'
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
