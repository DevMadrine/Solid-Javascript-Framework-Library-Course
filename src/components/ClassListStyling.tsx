import { createSignal } from "solid-js";

export default function ClassListStyling() {
  const [current, setCurrent] = createSignal("foo");
  return (
    <button
    classList={{"selected": current() === "foo"}}
    onClick={() => setCurrent("foo")}
    >foo</button>
  )
}