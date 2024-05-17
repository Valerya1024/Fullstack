import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UsreGreeting.jsx"
import List from "./List.jsx"
import ButtonClick from "./ButtonClick.jsx"
import ProfilePic from "./ProfilePic.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
import OnChangeDemo from "./OnChangeDemo.jsx"
import ColorPicker from "./ColorPicker.jsx"
import CounterUpdater from "./CounterUpdater.jsx"
import UpdateObject from "./UpdateObject.jsx"
import UpdateList from "./UpdateList.jsx"
import UpdateListObjects from "./UpdateListObjects.jsx"
import ToDoList from "./ToDoList.jsx"
import UseEffectDemo from "./UseEffectDemo.jsx"
import UseEffectDemoCleanUp from "./UseEffectDemoCleanUp.jsx"
import DigitalClock from "./DigitalClock.jsx"
import UseContextDemo from "./UseContextDemo.jsx"
import UseRefDemo from "./UseRefDemo.jsx"
import Stopwatch from "./Stopwatch.jsx"

function App() {

  const fruits = [
    {id: 1, name: "apple", calories: 91},
    {id: 2, name: "banana", calories: 92},
    {id: 3, name: "orange", calories: 93},
    {id: 4, name: "pineapple", calories: 94},
    {id: 5, name: "coconut", calories: 95}]

  const vegetables = [
    {id: 6, name: "carrots", calories: 91},
    {id: 7, name: "corn", calories: 92},
    {id: 8, name: "brocoli", calories: 93},
    {id: 9, name: "potatoes", calories: 94},
    {id: 10, name: "celery", calories: 95}]
  
  return (
// 1
    // <> 
    //   <Header/>
    //   <Food/>
    //   <Footer/>
    // </>

// 2
    // <> 
    //   <Card/>
    //   <Card/>
    //   <Card/>
    //   <Card/>
    // </>

// 3
    // <> 
    //   <Button/>
    // </>

// 4
    // <> 
    //   <Student name = "SpongeBob" age = {"30"} isStudent={true}/>
    //   <Student name = "Patrick" age = {42} isStudent={false}/>
    //   <Student name = "Squidward" age = {50} isStudent={false}/>
    //   <Student name = "Sandy" age = {27} isStudent={true}/>
    //   <Student name = "Larry" />
    // </>

// 5
    // <> 
    //   <UserGreeting isLoggedIn = {true} username = "Val" />
    //   <UserGreeting isLoggedIn = {false} username = "Val" />
    //   <UserGreeting isLoggedIn = {true} />
    // </>

//6
    // <> 
    //   {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    //   {vegetables.length > 0? <List items={vegetables} /> : null }
    // </>

//7
    // <> 
    //   <ButtonClick />
    //   <ProfilePic />
    // </>

// 8
    // <> 
    //   <MyComponent />
    //   <Counter />
    // </>

//9
    // <> 
    //   <OnChangeDemo />
    // </>

// 10
    // <> 
    //   <ColorPicker />
    // </>

//11
    // <>
    // <CounterUpdater />
    // </>

//12
    // <>
    // <UpdateObject />
    // </>

//13
    // <>
    // <UpdateList />
    // </>

//14
    // <>
    //   <UpdateListObjects />
    // </>

//15
    // <>
    //   <ToDoList />
    // </>
//16
    // <>
    //   <UseEffectDemo />
    // </>
//16.2
    // <>
    // <UseEffectDemoCleanUp />
    // </>
//17
    // <>
    //   <DigitalClock />
    // </>
//18
    // <>
    //   <UseContextDemo/>
    // </>
//19
    // <>
    //     <UseRefDemo />
    // </>
//20
    <>
        <Stopwatch />
        <Stopwatch />
    </>
  )
}

export default App
