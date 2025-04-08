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



        {numPizzas>0 ? (
            <React.Fragment>
                <p>6 creative dishes made completely organic</p>

            <ul className='pizzas'>
            {pizzas.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name}/>))}
        </ul>
            </React.Fragment>
                ):<p>coming soon</p>}
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
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (<p>
                we are happy to greet you between {openHour}:00 and {closeHour}:00.
            </p>)}
    </footer>
    )
}

function Order({closeHour , openHour}) {
    return <div className="order">
        <p>
            we are open from {openHour}:00 to {closeHour}:00.
        </p>
        <button className="btn">Order</button>
    </div>
}

function Pizza({pizzaObj}) {

    return <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <div>
            <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price  }</span>
        </div>
        </li>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);