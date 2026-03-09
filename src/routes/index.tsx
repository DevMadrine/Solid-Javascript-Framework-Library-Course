import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import ShowRendering from "~/ControlFlow/ConditionalRendering/show";
import SwitchMatch from "~/ControlFlow/ConditionalRendering/switch-match";
import { DynamicRendering } from "~/ControlFlow/DynamicRendering/dynamic";
import { UsingFor } from "~/ControlFlow/ListRendering/for-example";
import { UsingIndex } from "~/ControlFlow/ListRendering/index-example";



export default function Home() {
  return (
    <main>
   
      <Counter />

      <ShowRendering/>
      <SwitchMatch/>
      <DynamicRendering/>
      <UsingFor/>
      <UsingIndex/>
   
    </main>
  );
}
