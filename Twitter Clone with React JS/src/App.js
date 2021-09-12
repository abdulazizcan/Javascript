import React from "react";
import Container from "./Components/Container";
import Sidebar from "./Components/Sidebar";
import Timeline from "./Components/Timeline";
import Content from "./Components/Content";

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Timeline />
    </Container>
  );
};

export default App;
