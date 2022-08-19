import './App.css';
import styled from "styled-components";
import Navbar from './Components/Navbar'

function App() {
  return (
    <Section>
      <Navbar />
    </Section>
  );
}

export default App;

const Section = styled.section`
body{
  font-family: 'Sofia Pro', sans-serif;
}
`