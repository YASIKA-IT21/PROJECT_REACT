import'./CSS/TodoItems.css'
import tick from './Assets/tick.png'
import wrong from './Assets/wrong.webp'
import no_tick from './Assets/no_tick.webp';


const TodoItems = ({no,display,text, setTodos }) => {
  const deleteTodo=(no)=>{
    let data = JSON.parse(localStorage.getItem("todos")) ;
    data=data.filter((todo)=>todo.no!==no);
    setTodos(data);
  
  }
  const toggle =(no)=>{
    let data = JSON.parse(localStorage.getItem("todos")) ;
    for(let i=0;i<data.length;i++)
    {
      if(data[i].no ===no)
      {
        if(data[i].display==="")
        {
          data[i].display = "line-through";
        }
       else
        {
          data[i].display = "";
        }
        break;
      }

    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
      <div className={`todoItems-container ${display }` } onClick={()=>{toggle(no)}}>
        {display===""?<img src={no_tick } width="30px" alt=''/>:<img src={tick} width="30px" alt=''></img>}
        
       
        <div className="todoItems-text">{text}</div>
        </div>
        <img className="todoItems-cross-icon" src={wrong}   width="30px" alt='' onClick={()=>{deleteTodo(no)}}></img>
       


      </div>
      
    
  )
}

export default TodoItems
