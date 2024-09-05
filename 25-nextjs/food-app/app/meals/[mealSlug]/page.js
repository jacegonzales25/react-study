export default function MealDetails({params}) {
    return (
        <main>
        <h1>{params.slug}</h1>
        <p>This is {params.slug}</p>
        </main>
    );
}