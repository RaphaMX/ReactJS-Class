
import './App.css'

function App() {
  const user = "John Soulsborne"

  const vehicle = {
    brand: 'Torrente',
    model: 'Torrent',
    year: 2013,
    color: 'Estus',

    owner: {
      name: 'John EldenRing',
      adress: {
        street: 'Yharnam Avenue',
        district: 'Leyndell',
        city: 'Yharnam',
        state: 'Caeilid'
      },
      phone: [
        '15-999999999',
        '15-999999998',
        '15-999999997'
      ]
    },
    photos: [
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fdarksouls3%2Fcomments%2Fs1ffhx%2Fwhat_kind_of_build_would_john_darksoul_have%2F&psig=AOvVaw05HVYZVocdGC2AYmPg-Fwr&ust=1724781366225000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCv8radk4gDFQAAAAAdAAAAABAE',
      'https://preview.redd.it/8u22w1eldbv81.jpg?auto=webp&s=523e84ea2aa115b5f76775e2e87bdd39cefe10b7',
      'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23435022/elden_ring_alexander_hero.png?quality=90&strip=all&crop=7.8125,0,84.375,100'
    ],
    thumbnail: {
      width: 100,
      height: 100,
      border: '1px solid black'
    }
  }

  return (
    <>
      <div>
        <h1>Brand: {vehicle.brand}</h1>
        <h2>Model: {vehicle.model}</h2>
        <h2>Year: {vehicle.year}</h2>
        <h2>Color: {vehicle.color}</h2>
        <hr />
        <h1>Owner Informations</h1>
        <h3>Name: {vehicle.owner.name}</h3>
        <h3>Name: {vehicle.owner.adress.street}</h3>
        <h3>Name: {vehicle.owner.adress.district}</h3>
        <h3>Name: {vehicle.owner.adress.city}</h3>
        <h3>Name: {vehicle.owner.adress.state}</h3>
        <h3>Phone</h3>
        {
          vehicle.owner.phone.map((num, index) => (
            <div key={index}>{num}</div>
          ))
        }
        <h3>Pictures</h3>
        {
          vehicle.photos.map((pic, index) => (
            <div key={index}>
              <img src={pic} style={t} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
