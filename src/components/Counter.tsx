import { createEffect, createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const [double, setDouble]  = createSignal(0);
  const [theme, setTheme] = createSignal("light");

  const animal ={breed: "dog", name: "Rex"};
   
  createEffect(() => {
    setDouble(count() * 2);
  });

  const increment = () => setCount((prev) => prev + 1);
  return (
    <div>
      

    <div>Double: {double()}</div>
    <p>I have a {animal.breed} named {animal.name}</p>
    <div>{count() > 5 ? 
    <div>Count limit reached</div>
    : (
      <>
      <p>Count: {count()}</p>
      <span>Count: {count()}</span>{"    "}
      <button class="increment" onClick={increment} type="button">
    Increment
    </button>

      </>
    )}
    </div>
    <div class={theme() === "light" ? "light-theme" : "dark-theme"}>
      This div's theme is determined dynamically!
    </div>
   </div> 
  );
}
