import style from "./NoResults.module.css";

export default function NoResults() {
  return (
    <div className={style.noResults}>
      <p className={style.text}>No cars found for your filters 😕</p>
    </div>
  );
}
