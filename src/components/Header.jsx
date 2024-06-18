import { Link } from "react-router-dom";

function Header() {

    return (
        <navbar>
            <div className='w-full py-3 border-b'>

                <div className='flex justify-center items-center px-10 font-semibold'>
                    <div>
                        <h1 className="text-2xl text-center mb-3">TCG Yu-Gi-Oh</h1>
                        <div className='flex flex-grow justify-center gap-8'>
                            <Link to={'/'} className="hover:text-xl transition duration-300">Página Inicial</Link>
                            <Link to={'/MyCollection'} className="hover:text-xl transition duration-300">Minha Coleção</Link>
                            <Link to={'/Shop'} className="hover:text-xl transition duration-300">Loja</Link>
                        </div>
                    </div>
                </div>

            </div>
        </navbar>
    )
}
export default Header;