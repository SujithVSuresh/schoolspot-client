import logo from "../../../../../assets/images/logo.png"

const Header = () => {
  return (
        <header
      className={`container border-b flex items-center justify-between px-8 py-4`}
    >
      <img src={logo} alt="" className="lg:h-10 md:h-8 h-8" />


    </header>
  )
}

export default Header
