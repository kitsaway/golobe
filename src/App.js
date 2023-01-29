import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth={false} className="container">
        <Home />
      </Container>
      <Footer />
    </>
  );
}

export default App;
