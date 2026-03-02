export default function NativeEventHandling() {
  return(
    <button on:Custom-Event = {() => alert("Custom event triggered!")}> Click me</button>
  );
}