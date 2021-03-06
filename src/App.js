// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;








// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App(){
//   return (
//     <div className="App">
//       <header className="App-header">
//       <img src={logo} className="App-logo"/>  
//       <p>Hey this is working</p>
//       </header>  
      
//     </div>
//   );
// }

// export default App;


import React from 'react';
import logo from './todoprofilepic.jpg';
import './App.css';


class App extends React.Component{


  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list : []
    }
  }

  addItem(todoValue){
    if(todoValue!==""){
      const newItem ={
        id:Date.now(),
        value:todoValue,
        isDone:false
      };
      const list =[...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item=>item.id!== id);
    this.setState({list:updatedlist});
  }

  updateInput(input){
    this.setState({newItem:input});
  }



  //in class implementation we need to take care of one additional thing which is 'render'
  render(){
    return (
      <div>
        <img src={logo} width="100" height="100" class="logo"></img>
        <h1 className="app-title">my todo app</h1>
        <div className="container">
          New Task
          <br/>
          <input type="text" className="input-text" placeholder="jot down here" required value={this.state.newItem} onChange={e=>this.updateInput(e.target.value)}></input> 
          <button  className="add-btn" onClick={()=>this.addItem(this.state.newItem)} disabled={!this.state.newItem.length} >Add Task</button>
          <div className="list">
            <ul>
              {this.state.list.map(item=>{
                return(
                  <li key={item.id}>
                    <input type="checkbox" name="isDone" checked={item.isDone} onChange={()=>{}}></input>
                  {item.value}
                  <button classNme="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                  </li>
                )
              })}
              <li> <input type="checkbox" className="" id=""/>choose classes for next semester 
              <button className="btn">Delete</button>
              </li>

            </ul>
          </div>
         </div>
      </div>
    );
  }
}

export default App;