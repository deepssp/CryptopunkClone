import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon1 from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';
const Header = () => {
	return (
		<div className='header'>
			<div className="logoContainer">
				<img src={punkLogo} className='punkLogo' alt=''></img>
			</div>
			<div className='searchBar'>
				<div className="searchIcon">
					<img src={searchIcon1} />
				</div>
				<input className='searchInput' placeholder="Collection"></input>
			</div>
			<div className='headerItems'>
				<p>Drops</p>
				<p>Market</p>
				<p>Create</p>
			</div>

			<div className="headerActions">
				<div className="themeSwitchContainer">
					<img src={themeSwitchIcon}></img>
				</div>
			</div>

			<div className="loginButton">
			 GET IN
			</div>
		</div>
	)
}

export default Header;