import { createSignal, For } from "solid-js"

export function UsingFor() {
  const [items, setItems] = createSignal(["Item 1", "Item 2", "Item 3"])

  return (
    <ul>
      <input
        type="text"
        onInput={(e) => {
          // add the new item to the list
        }}
      />
      <For each={items()}>
        {(item, index) => (
          <li>
            {item} - {index()}
          </li>
        )}
      </For>
    </ul>
  )
}