import investmentImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentImage} alt="Photo of a Money bag"/>
      <h1>Invesment Calculator</h1>
    </header>
  );
}
