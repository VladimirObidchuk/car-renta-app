import clsx from "clsx";
import Buttom from "../../components/Buttom/Buttom";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <div className={style.hero}>
      <div className={clsx("container", style.container)}>
        <h2 className={style.title}>Find your perfect rental car</h2>
        <p className={style.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Buttom
          type="button"
          value="View Catalog"
          styleCss={style.btn}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
