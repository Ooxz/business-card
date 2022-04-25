import Photo from "../images/adrien-brune.jpg"
import MailIcon from "../icons/mail.png"

export default function Info() {
return (
	<div className="info-container">
	  <img src={Photo} alt="profile portrait" className="photo" />
	  <p className="name">Adrien Brune</p>
	  <p className="job">Frontend Developper</p>
	  <small className="website">adrienbrune.website</small>
	  <button type="button" className="mail-button">
		  <img src={MailIcon} alt="mail" className="mail-icon"/>
		  Email
		  </button>
	</div>
  );
}