export default function EventHandling() {
  return(
    <div>
      //delegated events, not case sensitive
      <button onClick={() => alert("Button clicked!")}>Click Me</button>
      <button onclick={(e) => console.log("Event object:", e)}>Log Event</button>
    </div>
  )
}