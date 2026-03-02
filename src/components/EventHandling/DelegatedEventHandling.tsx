export default function DelegatedEventHandling() {
  return(
    <div>
    {/* delegated events, not case sensitive */}
      <button onClick={() => alert("Button clicked!")}>Click Me</button>
      <button onclick={() => alert("Event object")}>Log Event</button>
    </div>
  )
}