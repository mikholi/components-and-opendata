import computerimage from './computer.jpg';



function Header() {
    return (
        <div>
            <img src={computerimage} alt='computer'></img>
            <h1>Welcome to the product page!</h1>
        </div>
    )
}

export default Header