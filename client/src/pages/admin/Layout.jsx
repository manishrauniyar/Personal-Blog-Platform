
// import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../componants/admin/Sidebar'

const Layout = () => {
    const navigate = useNavigate()
    const logout = () => {
        navigate('/')
        
    }
    return (
        <>
            <div className='flex items-center justify-between py-2 h-17.5 px-4 sm:px-12 border-b border-gray-300'>
                <h1 className="text-2xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
                    <span className="text-primary">Stack </span>
                    <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Stories
                    </span>
                </h1>
                <button
                onClick={logout}
                className="flex items-center gap-2 rounded-full text-sm cursor-pointer text-white px-8 py-2.5 hover:scale-105 transition-all duration-300 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500"
            >
                Logout
            </button>
            </div>
            <div className='flex min-h-[calc(100vh-70px)] bg-blue-50'>
                <Sidebar />
                <Outlet />

            </div>

        </>
    )
}

export default Layout
