import "./Head.css";

let header = {
    picture: "./src/components/Chadagon.jpg",
    name: 'RaphaMX',
    job: 'Game Developer'
}

export function Header() {
    return (
        <>
            <div className="row">
                <div className="left-col">
                <img id="profile" src= { header.picture }/>
                </div>
                <div className="right-col">
                    <h1>{ header.name }</h1>
                    <h3>{ header.job }</h3>
                </div>
            </div>
        </>
    )
}