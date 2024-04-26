import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept
              key={concept.title}
              title={concept.title}
              description={concept.description}
              image={concept.image}
            />
            
          ))}
            {/* <CoreConcept
              title="Components"
              description="The core UI building block"
              image={componentImg}
            />
            <CoreConcept />
            <CoreConcept /> */}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
