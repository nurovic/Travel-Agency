import './App.css';
import styled from "styled-components";
import Navbar from './Components/Navbar'
import Location from './Components/Location'
import StepTrip from './Components/StepTrip'
import Slide from './Components/Slide'

function App() {
  return (
    <Section>
      <Navbar />
      <Location />
      <StepTrip />
      <Slide />
    </Section>
  );
}

export default App;

const Section = styled.section`
body{
  font-family: 'Sofia Pro', sans-serif;
}
`