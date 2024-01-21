import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import "./Main.css";

export default function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
    </main>
  )
}
