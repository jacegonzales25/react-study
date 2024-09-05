import Link from "next/link";

export default function Meals() {
  return (
    <>
      <li>
        <h3>Spaghetti</h3>
        <p>Spaghetti with tomato sauce</p>
        <p>
          <Link href={"/meals/spaghetti"}>Meal details</Link>
        </p>
      </li>
      <li>
        <p>
          <Link href={"/meals/share"}>Share a meal</Link>
        </p>
      </li>
    </>
  );
}
