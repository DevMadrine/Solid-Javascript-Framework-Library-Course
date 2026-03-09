import { createSignal, Index } from "solid-js"

export function UsingIndex() {
  const [inputs, setInputs] = createSignal(['input1','input2','input3'])
  return(
    <form>
      <Index each={inputs()}>
        {(input, index) => (
          <input
            type="text"
            value={input()}
            onInput={(e) => {
              // update the input value
            }}
          />
        )}
      </Index>
    </form>
  )
}