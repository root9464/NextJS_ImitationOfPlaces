
export default function Home() {
  return (
    <section className="container">
      <h1>Типо места в самолете </h1>
      <div className="box">
        <div>
          <button style={{backgroundColor: 'white'}} className="block"></button>
          <button style={{backgroundColor: 'orange'}} className="block"></button>
          <button style={{backgroundColor: 'green'}} className="block"></button>
        </div>
        <div>
          <p className="pe">Свободное</p>
          <p className="pe">Выбранное</p>
          <p className="pe">Занятое</p>
        </div>
        
      </div>
      
    </section>
  )
}
