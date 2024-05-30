//navbar
function Navbar() {
    return (
        <div className="navbar">
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">Udemy</h1>
      </div>
      <div className="navbar__s2">
        <i className="fa-solid fa-magnifying-glass" style={{color: '#000000'}}></i>
        <input type="text" placeholder="Search for anthing here" />
      </div>
      <div className="navbar__s3">
        <p>Course</p>
       
        <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__popup">
            <p>You did not purchase anything</p>
          </div>
        </div>
        <i className="fa-solid fa-cart-shopping" style={{color: '#000000'}}></i>
        <i className="fa-solid fa-bell"style={{color: '#000000'}}></i>
        <i className="fa-solid fa-user" style={{color: '#000000'}}></i>
      </div>
    </div>

    )
}

export default Navbar;