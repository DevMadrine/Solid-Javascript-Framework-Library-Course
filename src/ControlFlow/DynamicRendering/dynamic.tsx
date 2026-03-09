import { createSignal, For, JSX } from "solid-js"
import { Dynamic } from "solid-js/web"

const RedDiv = () => <div style="color: red">Red</div>
const GreenDiv = () => <div style="color: green">Green</div>
const BlueDiv = () => <div style="color: blue">Blue</div>

const options: Record<string, () => JSX.Element> = {
  red: RedDiv,
  green: GreenDiv,
  blue: BlueDiv,
}

export function DynamicRendering() {
  const [selected, setSelected] = createSignal("red")

  return (
    <>
      <select
        value={selected()}
        onInput={(e) => setSelected(e.currentTarget.value)}
      >
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>
      <Dynamic component={options[selected()]} />
    </>
  )
}