import './App.css'

const students = [
  {name: "Margit Omen", courses: ["ADM", "ECO"]},
  {name: "Rennala Fullmoon", courses: ["GSRC", "MOS"]},
]

function App() {
  return (
    <>
      {
        students.map((std, i) => (
          <div key={i}>
            <h2>{std.name}</h2>
            {
              std.courses.map((crs, i) => (
                <h3 key={i}> {crs} </h3>
              ))
            }
        </div>
        ))
      }
    </>
  )
}

export default App
