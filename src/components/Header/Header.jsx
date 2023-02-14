import { Link } from 'react-router-dom';
import style from './Header.module.css';
export default function Header() {
	return (
		<header>
      <nav className={style.nav}>
        
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/profile/1'>Profile</Link>
			</nav>
		</header>
	);
}
