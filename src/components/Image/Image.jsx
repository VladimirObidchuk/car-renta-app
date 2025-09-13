export default function Image({ path, alt, width, height, styleCss }) {
  return (
    <>
      <img
        src={path}
        alt={alt}
        width={width}
        height={height}
        className={styleCss}
      />
    </>
  );
}
