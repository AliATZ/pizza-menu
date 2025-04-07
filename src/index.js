import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];
function App() {
    return <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>;
}

function Header() {
    const style = {color: "gray",
        fontSize: "40px",
        textTransform: "uppercase"}
    return <header className="header footer">
        <h1 style={style} >fast react co.</h1>
    </header>
}

function Menu(){
    const pizzas = pizzaData
    const numPizzas = pizzas.length

    return <main className="menu">
        <h2>Our menu </h2>

        {numPizzas>0 ? (<ul className='pizzas'>
            {pizzas.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name}/>))}
        </ul>):<p>coming soon</p>}
        {/*<Pizza name="pizza spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photoName="pizzas/spinaci.jpg" price={10}/>*/}
        {/*<Pizza name="pizza funghi" ingredients="tomato, mushrooms" price={10} photoName="pizzas/funghi.jpg"/>*/}
    </main>
}

function Footer() {
    const hour = new Date().getHours();
    const openHour =12;
    const closeHour =22;
    const isOpen= hour>=openHour && hour<=closeHour;

    return (<footer className="footer">
            {isOpen ? (
                <div className="order" >
                    <p>
                    we are open until {closeHour}:00.
                    </p>
                    <button className="btn" >Order</button>
                </div>
            ) : (<p>
                we are happy to greet you between {openHour}:00 and {closeHour}:00.
            </p>)}
    </footer>
    )
}

function Pizza(props){

    if (props.pizzaObj.soldOut){
        return null
    }
    return <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.name}/>
        <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.price}</span>
        </div>
        </li>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);