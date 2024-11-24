 
function App() {

  return <center className="todo-container"><h1>Todo App</h1>
    <div className="container text-center" >
      {/* first row */}
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="enter todo item"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">Add</button>
        </div>
      </div><br></br>
      {/* second row */}
      <div className="row">
        <div className="col-6">
           Buy Milk
        </div>
        <div className="col-4">
           5/09/2024
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div><br></br>

{/* Third row */}
      <div className="row">
        <div className="col-6">
            Goto college
        </div>
        <div className="col-4">
           12/10/2024
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>

    </div>
  
  </center>
  
}

export default App
