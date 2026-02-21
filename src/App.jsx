import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Button from "./components/Button";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  function toggleInstructions() {
    setShowInstructions((prev) => !prev);
  }

  function handleClick() {
    alert("Click");
  }

  return (
    <div className="app">
      <Header
        showInstructions={showInstructions}
        toggleInstructions={toggleInstructions}
      />
      <Instructions showInstructions={showInstructions} />
      <Main>
        <Section title="Sizes">
          <Button size="large" onClick={handleClick}>
            Large
          </Button>
          <Button size="medium">Medium</Button>
          <Button size="small">Small</Button>
        </Section>

        <Section title="Variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="gradient">Gradient</Button>
          <Button variant="outline">Outline</Button>
        </Section>

        <Section title="Button States">
          <Button isDisabled={false}>Default</Button>
          <Button isDisabled={true}>Disabled</Button>
        </Section>

        <Section title="Full Width Button">
          <Button fullWidth={true} variant="secondary">
            Full Width
          </Button>
        </Section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
