import { createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";

export function PopUp(){
    const [isOpen, setIsOpen] = createSignal(false);
   return (
    <div style={{ overflow: "hidden" }}> {/* overflow won't clip the modal */}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Show when={isOpen()}>
        <Portal>
          <div class="modal-overlay" onClick={() => setIsOpen(false)}>
            <div class="modal-content">
              <h2>I render in document body!</h2>
              <button onClick={() => setIsOpen(false)}>Close</button>
            </div>
          </div>
        </Portal>
      </Show>
    </div>
  );
}