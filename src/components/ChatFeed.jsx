import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const{ chats,activeChat, userName,messages } = props;

    const chat = chats && chats[activeChat];
   
    const renderMessages = () => {
        const keys = Object.keys(messages)

        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey  = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            return(
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage />
                            : <TheirMessage />
                        }
                    </div>
                    <div className="read-reciepts" style={{marginRight: isMyMessage ? '18px' : '0', marginLeft: isMyMessage ? '0px' : '60px'}}>
                        read-reciepts
                    </div>
                </div>
            )
        })
    }

    renderMessages()

    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title"></div>
            </div> 
        </div>
    )
}

export default ChatFeed