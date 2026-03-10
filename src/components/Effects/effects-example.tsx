import { createEffect, createSignal } from "solid-js";

export function EffectsExample(){

const [count, setCount] = createSignal(0);
const [message, setMessage] = createSignal("Hello");

 const increment = () => setCount((prev) => prev + 1);

createEffect(() =>{
  console.log(count());
});

// Managing multiple effects
createEffect(() => {
  console.log(count(), message());
});

setCount(1);
setMessage("World");

// Nested Effects they behave independent of each other
createEffect(() => {
  console.log("Outer effect starts");
  createEffect(() => console.log(count())); 
  console.log("Outer effect ends");
});


return(
  <div>
    Count: {count()}
    <button class="increment" onClick={increment} type="button"></button>
    <p>{message()}</p>
  </div>
)
}