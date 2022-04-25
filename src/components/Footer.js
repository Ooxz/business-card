import TwitterIcon from "../icons/twitter-icon.png"
import FacebookIcon from "../icons/facebook-icon.png"
import InstagramIcon from "../icons/instagram-icon.png"
import LinkedinIcon from "../icons/linkedin-icon.png"
import GithubIcon from "../icons/github-icon.png"

export default function Footer() {
	return (
		<div className="footer-container">
				<img src={TwitterIcon} alt="Twitter"/>
				<img src={FacebookIcon} alt="Facebook"/>
				<img src={InstagramIcon} alt="Instagram"/>
				<img src={LinkedinIcon} alt="Linkedin"/>
				<img src={GithubIcon} alt="GitHub"/>
			</div>
	)
}