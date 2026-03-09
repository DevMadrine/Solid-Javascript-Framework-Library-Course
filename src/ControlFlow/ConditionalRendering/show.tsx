import { Show } from "solid-js";
import { createResource } from "solid-js";

export default function ShowRendering(){

  const fetchSomeData = async () => {
    return { name: "User" };
  };

  const [data, { mutate, refetch }] = createResource(fetchSomeData);
  return(
    <div>
    <Show when={data.loading}>
      <div>Loading ...</div>
    </Show>
     
    {/* fallback property(Used to render content incase a condition evaluates to false) */}

    <Show when={!data.loading} fallback={<div>Loading...</div>}>
    <h1>Hi, I am {data()?.name} .</h1>
    </Show>

    {/* //Also nesting to cater for false */}

    <Show when={data.loading}>
      <div>Loading...</div>

      <Show when={data.error}>
          <div>Error: {data.error?.message}</div>
        </Show>
    </Show>
     

    </div>
  );
}