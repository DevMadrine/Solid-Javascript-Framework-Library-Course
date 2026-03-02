export default function DynamicEventHandling() {
  function handleClick() {
    alert("Dynamic event triggered!")
   }
  return(
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
   );   
}