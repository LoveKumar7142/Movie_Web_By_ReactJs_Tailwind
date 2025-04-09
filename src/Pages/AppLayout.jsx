import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import TitleManager from './TitleManager';
const AppLayout = () => {
  return (
    <div>
      <TitleManager />
      <Header />
      <div className="pt-[61px]">
        {/* Routes render hote hain yaha */}
        <Outlet />  {/* or <Routes> if using <Route> inside */}
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
