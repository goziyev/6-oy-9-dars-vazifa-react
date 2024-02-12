import { Link, Outlet } from "react-router-dom";
import style from './index.module.css'
export default function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link className={style.link} to="/">Home</Link>
          </li>
          <li className={style.li}>
            <Link className={style.link} to="/context" >Context</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
