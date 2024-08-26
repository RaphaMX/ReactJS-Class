import "./Header.css";

export default function Header( {name, title, contact, image} ) {
    return (
        <>
        <div className="header">
            <div className="header-left">
                <img src={image} alt="Profile" className="profile-image" />
            </div>
            <div className="header-right">
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div>
        </div>
        <hr />
        <div className="contact">
                <h3>
                    <span className="icon">📞</span> {contact.phone}
                </h3>
                <h3>
                    <span className="icon">✉️</span> {contact.email}
                </h3>
            </div>
        <hr />
        </>
    )
}