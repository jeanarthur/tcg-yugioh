import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <div className="bg-black text-white h-screen">
            <navbar>
                <div className='w-full py-3 border-b'>

                    <div className='flex justify-between px-10 items-center font-semibold'>
                        <div>
                            <h1 className="text-2xl">TCG Yu-Gi-Oh</h1>
                        </div>
                        <div className='flex flex-grow justify-center xl:gap-10 md:gap-8 gap-2'>
                            <a href="">Página Inicial</a>
                            <Link to={'/MyCollection'}>Minha Coleção</Link>
                            <Link to={'/Shop'}>Loja</Link>
                        </div>
                    </div>

                </div>
            </navbar>
        </div>
        
        </>
    );
}

export default Home;
