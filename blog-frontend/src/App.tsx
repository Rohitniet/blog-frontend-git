import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/auth/signup"
import { Signin } from "./pages/auth/singin"
import { Dashboard } from "./pages/dash"
import { Profile } from "./pages/components/Profilepage"
import { Scroll } from "./pages/components/Scrollpage"
import { Editor } from "./pages/components/maineditor"

function App() {
 
return <div>
  
<BrowserRouter>
<Routes>


<Route path="/signup" element={<Signup/>}/>
<Route path="/signin" element={<Signin/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/Share/:userid" element={<Profile/>}/>
<Route path="/scroll" element={<Scroll/>}/>
<Route path="/editor" element={<Editor/>}/>
</Routes>





</BrowserRouter>


</div>

}

export default App
