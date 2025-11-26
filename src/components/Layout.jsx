import Navbar from "./Navbar"
import "../assets/styles/Layout.css"

function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main className="content-margin">{children}</main>
      </>
    )
}

export default Layout
