import {useRef, useState} from "react";
import Stomp from 'react-stomp';

function ChatBox() {
    const [channel, setChannel] = useState('123')
    const [messages, setMessages] = useState(["aaa"]);
    const [newMessage, setNewMessage] = useState('');
    const inputRef = useRef();
    let stompClient;

    const handleMessageReceived = (message) => {
        const payload = JSON.parse(message.body);
        console.log(payload)
        setMessages((prevMessages) => [...prevMessages, payload.content]);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            const message = {
                content: newMessage,
            };
            const channelId = '/app/chat' + channel
            stompClient.sendMessage(channelId, JSON.stringify(message));
            setNewMessage('');
        }
    };

    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaHVuZ25ndXllbiIsImlhdCI6MTY5MTU1NTA0NCwiZXhwIjoxNjkyMTU5ODQ0fQ.tk8uV53u-9Cu48BcT8UWbS5ub-hTrYwWk4LM6Fu5mZ5fkZ9asGr4oHqyd6X25phlNHP73K9fj64huFogk3Zn8A';

    return (
        <div>
            <Stomp
                url={'http://localhost:8080/ws'}
                headers={{ Authorization: 'Bearer ' + token }}
                topics={[`/topic/${channel}`]}
                onMessage={handleMessageReceived}
                ref={(client) => (stompClient = client)}
            />


            <div className='mb-3'>
                Channel
                <input type="text"
                       onChange={(event)=> setChannel(event.target.value)}
                       className='form-control'
                       placeholder={'input channel'}/>
            </div>
            <div className='mb-3'>
                <input
                    type="text"
                    ref={inputRef}
                    value={newMessage}
                    placeholder='input message'
                    className='form-control'
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className='btn btn-info mt-3'
                        onClick={handleSendMessage}>Send</button>
            </div>
            <div className='border rounded'>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ChatBox;