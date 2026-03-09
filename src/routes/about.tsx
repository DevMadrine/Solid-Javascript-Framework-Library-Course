import { Title } from "@solidjs/meta";
import ClassListStyling from "~/components/ClassListStyling";
import DelegatedEventHandling from "~/components/EventHandling/DelegatedEventHandling";
import DynamicEventHandling from "~/components/EventHandling/DynamicEventHandling";
import NativeEventHandling from "~/components/EventHandling/NativeEventHandling";
import MergeProps from "~/components/Props/MergeProps";
import SplitProps from "~/components/Props/SplitProps";
import { ThemedButton } from "~/components/ThemedButton";

export default function About() {
  return (
    <main>
      <ThemedButton/>
      <ClassListStyling/>
      <DelegatedEventHandling/>
      <NativeEventHandling/>
      <DynamicEventHandling/>
      <SplitProps firstName="Drinah" lastName="Smith" age={30} city="New York"/>
      

      <MergeProps name="Drinah"/>
    </main>
  );
}
