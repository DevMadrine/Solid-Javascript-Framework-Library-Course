export default function EventHandling() {
  return(
    <div>
      //delegated events, not case sensitive
      <button onClick={() => alert("Button clicked!")}>Click Me</button>
      <button onclick={() => alert("Event object")}>Log Event</button>
    </div>
  )
}