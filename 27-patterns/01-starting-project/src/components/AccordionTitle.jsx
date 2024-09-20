import { useAccordionContext } from "./Accordion";

export default function AccordionTitle({ id, children, className }) {
  const { toggleItem } = useAccordionContext();
  return <h3 onClick={() => toggleItem(id)}>{children}</h3>;
}
