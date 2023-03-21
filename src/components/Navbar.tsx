import { useNavigate } from "react-router-dom";
import { User } from "../types/user";
import { PageRoutes } from "../constants/pageRoutes";
import "../assets/styles/navbar.css";
interface NavbarProps {
  user: User | undefined;
  logout: () => void;
}

const Navbar = ({ user, logout }: NavbarProps) => {
  const navigate = useNavigate();
  return (
    <>
      <header className="navbar">
        <div
          className="logo-container"
          onClick={() => {
            navigate(`${PageRoutes.HOME}?page=1`);
          }}
        >
          <img className="header-logo" src="/Logo-Gamer.png" />
          <h1 className="header-title">Gamer Corner</h1>
        </div>
        <nav className="nav-section">
          <ul className="nav-list">
            <li
              className="nav-elements"
              onClick={() => {
                navigate(PageRoutes.HOME);
              }}
            >
              <a className="nav-elements-a">Home</a>
            </li>
            {user?.name===""? (
              <>
                <li
                  className="nav-elements"
                  onClick={() => {
                    navigate(PageRoutes.LOGIN);
                  }}
                >
                  <a className="nav-elements-a">Login</a>
                </li>
                <li
                  className="nav-elements"
                  onClick={() => {
                    navigate(PageRoutes.REGISTER);
                  }}
                >
                  <a className="nav-elements-a">Register</a>
                </li>
              </>
            ) : (
              <>
                <li
                  className="nav-elements"
                  onClick={async () => {
                    await logout();
                    navigate(PageRoutes.HOME);
                  }}
                >
                  <a className="nav-elements-a">logout</a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
