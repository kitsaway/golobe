import { Container } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth={false} className="container">
        <Home />
      </Container>
    </>
  );
}

export default App;
