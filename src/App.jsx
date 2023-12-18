import { Header } from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";

import Examples from "./Examples";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
