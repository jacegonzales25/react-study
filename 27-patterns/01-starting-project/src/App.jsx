import Accordion from "./components/Accordion";
import AccordionContent from "./components/AccordionContent";
import AccordionItem from "./components/AccordionItem";
import AccordionTitle from "./components/AccordionTitle";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className={"accordion"}>
          <Accordion.Item className="accordion-item">
            <AccordionTitle
              id={"experience"}
              className={"accordion-item-title"}
            >
              "We got 20 years of experience"
            </AccordionTitle>
            <Accordion.Content
              id={"experience"}
              className={"accordion-item-content"}
            >
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <AccordionTitle
              id={"local-guides"}
              className={"accordion-item-title"}
            >
              "We're working with local guides"
            </AccordionTitle>
            <AccordionContent
              id={"local-guides"}
              className={"accordion-item-content"}
            >
              {" "}
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleasant vacation.
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
