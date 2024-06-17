import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <h1>Página inicial</h1>
            <Link to={'/MyCollection'}>Minha Coleção</Link>
            <br />
            <Link to={'/Shop'}>Loja</Link>
        </>
    )
}

export default Home;