import { mergeProps } from "solid-js";

export default function MergeProps(props: {name: string}) {
const finalProps = mergeProps({defaultName: "Madrine"},props);
return(
  <div>
    <div>Default name: {finalProps.defaultName}</div>
    <div>Provided name: {finalProps.name}</div> 
   </div>
)
}