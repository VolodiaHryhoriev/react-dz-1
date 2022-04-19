import logo from './XIX.jpg';
import './App.css';

function App() {
  return (
   <div className={"block"}>
     <div className={"history"}>
       <h1>Історія Львова</h1>
       <img src={logo} alt="img"/>
     </div>
     <hr></hr>
     <div className={"facts"}>
        <p><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti distinctio facere magni maxime, molestiae!</p>
         <p><strong>Lorem</strong> ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti distinctio facere magni maxime, molestiae!</p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. At doloribus ex fuga hic ipsum, laudantium nostrum pariatur perferendis quos rerum!
     </div>
     <hr></hr>
     <div className={"list"}>
       <h3>Зміст</h3>
       <ol>
           <li><strong>Lorem</strong> ipsum dolor sit amet, consectetur.</li>
           <li><strong>Lorem</strong> ipsum dolor sit amet, consectetur.</li>
           <li><strong>Lorem</strong> ipsum dolor sit amet, consectetur.</li>
           <li><strong>Lorem</strong> ipsum dolor sit amet, consectetur.</li>
           <li><strong>Lorem</strong> ipsum dolor sit amet, consectetur.</li>
           <li><strong>Lorem</strong> ipsum dolor sit amet, consectetur.</li>
           <li><strong>Lorem</strong> ipsum dolor sit amet, consectetur.</li>
           <li><strong>Lorem</strong> ipsum dolor sit amet, consectetur.</li>
       </ol>
     </div>
   </div>
  );
}

export default App;
