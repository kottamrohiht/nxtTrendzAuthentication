import './index.css'

const Header = () => {
  const navHome =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png'
  const navProducts =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png'
  const navCart =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png'
  const headerNxtTrends =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
  const headerLogout =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png'

  return (
    <nav className="header-main-container">
      <div className="nxt-trends-container">
        <img
          src={headerNxtTrends}
          alt="website logo"
          className="nxt-trends-wesite-logo"
        />
        <img src={headerLogout} alt="nav logout" className="nxt-trends-logo" />
        <ul className="nxt-trend-lg-link-container">
          <li className="nxt-trends-home"> Home </li>
          <li className="nxt-trends-home"> Products </li>
          <li className="nxt-trends-home"> Cart </li>
          <button type="button" className="header-button">
            Logout
          </button>
        </ul>
      </div>

      <div className="nav-img-sm-container">
        <img src={navHome} alt="nav home" className="navhome" />
        <img src={navProducts} alt="nav products" className="navhome" />
        <img src={navCart} alt="nav cart" className="navhome" />
      </div>
    </nav>
  )
}

export default Header
