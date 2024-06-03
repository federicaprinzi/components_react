import "./index.css";
import Welcome from "./components/Welcome";
import Container from "./components/Container";

const App = () => {
  return (
    <Container title="Benvenuto">
      <Welcome />
    </Container>
  );
};

export default App;
