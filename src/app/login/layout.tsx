export default function layout(props) {
  return (
    <>
      <div className="w-full h-full grid place-items-center">
        {props.children}
      </div>
    </>
  );
}
