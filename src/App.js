import { ChatEngine } from "react-chat-engine";
import './App.css'

const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID="4a484ea3-70fd-4743-8210-889c9ea16b30"
            userName="Ringo"
            userSecret="12345"
        />
    );
}

export default App