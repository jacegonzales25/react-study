import quizLogo from '../assets/quiz-logo.png'

export default function Header() {
    return (
        <header>
        <img src={quizLogo} alt='quiz-image'/>
            <h1>ReactQuiz</h1>
        </header>
    )
}