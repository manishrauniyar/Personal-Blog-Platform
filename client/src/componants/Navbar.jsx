

import { assets } from '../assets/assets'
// import {useNavigate} from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    const { navigate, token } = useAppContext()

    return (
        <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
            <div
                onClick={() => navigate('/')}
                className="flex items-center gap-3 cursor-pointer">

                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        <span className="text-primary">Stack </span>
                        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Stories
                        </span>
                    </h1>

                    <p className="text-xs text-gray-400 tracking-[0.25em] uppercase hidden sm:block">
                        Code • Learn • Share
                    </p>
                </div>
            </div>

            {/* Login Button */}

            <button
                onClick={() => navigate('/admin')}
                className="flex items-center gap-2 rounded-full text-sm cursor-pointer text-white px-8 py-2.5 hover:scale-105 transition-all duration-300 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500"
            >
                {token ? "Dashboard" : "Login"}
                <img src={assets.arrow} className="w-3" alt="arrow" />
            </button>

        </div>
    )
}

export default Navbar