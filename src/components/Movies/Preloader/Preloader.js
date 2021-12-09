import React from 'react'
import './Preloader.css'

const Preloader = () => {
  const [close, setClose] = React.useState(true);

  return (
    <div className={close ? "preloader preloader_close" : "preloader"}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader
