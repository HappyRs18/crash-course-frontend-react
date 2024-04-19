export function FpButton(props: { label: string; width: number }) {
  return (
    <>
      <button type="button"
              style={{width: props.width + 'px'}}>
        {props.label}
      </button>
    </>
  );
}
