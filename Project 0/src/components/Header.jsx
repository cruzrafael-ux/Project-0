import cart from '../assets/cart.jpg'

export default function Header() {
    return (
        <header>
            <img src={cart} alt="Logo"></img>
        <h1>your shopping list</h1>
        </header>
    )
}