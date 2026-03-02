import { Title } from "@solidjs/meta";
import ClassListStyling from "~/components/ClassListStyling";
import DelegatedEventHandling from "~/components/EventHandling/DelegatedEventHandling";
import DynamicEventHandling from "~/components/EventHandling/DynamicEventHandling";
import NativeEventHandling from "~/components/EventHandling/NativeEventHandling";
import MergeProps from "~/components/Props/MergeProps";
import { ThemedButton } from "~/components/ThemedButton";

export default function About() {
  return (
    <main>
      <ThemedButton/>
      <ClassListStyling/>
      <DelegatedEventHandling/>
      <NativeEventHandling/>
      <DynamicEventHandling/>

      <MergeProps name="Drinah"/>
    </main>
  );
}
