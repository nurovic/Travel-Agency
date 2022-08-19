import './App.css';
import styled from "styled-components";
import Navbar from './Components/Navbar'
import Location from './Components/Location'

function App() {
  return (
    <Section>
      <Navbar />
      <Location />
    </Section>
  );
}

export default App;

const Section = styled.section`
body{
  font-family: 'Sofia Pro', sans-serif;
}
`