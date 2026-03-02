function ThemedButton(props: any) {
  return (
    <button class={props.them}>
      {props.theme === "light" ? "Light Button" : "Dark Button"}
    </button>
  );
}