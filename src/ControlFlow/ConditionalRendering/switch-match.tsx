import { Switch, Match } from "solid-js"

export default function SwitchMatch(){
  const condition1 = true;
  const condition2 = false;
  return(
<Switch>
  <Match when={condition1}>
    <p>Outcome 1</p>
  </Match>
  <Match when={condition2}>
    <p>Outcome 2</p>
  </Match>
</Switch>
  );
}

