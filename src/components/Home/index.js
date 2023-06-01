import Header from '../Header'

import './index.css'

const Home = () => {
  const homeImg =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png'

  return (
    <div className="home-main-container">
      <Header />
      <div className="home-container">
        <div className="home-txt-container">
          <h1 className="home-heading"> Clothes That Get YOU Noticed </h1>
          <img src={homeImg} alt="home img" className="home-img-sm" />
          <p className="home-para">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button type="button" className="home-button">
            Shop Now
          </button>
        </div>
        <img
          src={homeImg}
          alt="clothes that get you noticed"
          className="home-img-lg"
        />
      </div>
    </div>
  )
}

export default Home
