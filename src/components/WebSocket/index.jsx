import React, {useEffect, useRef, useState} from 'react';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

const WebSocketComponent = () => {
    const [channel, setChannel] = useState('123')
    const [messages, setMessages] = useState(["aaa"]);
    const [newMessage, setNewMessage] = useState('');
    const inputRef = useRef();
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = Stomp.over(socket);
    const token = '';
    stompClient.connect({Authorization: 'Bearer ' + token}, () => {
        console.log('connect success')
        stompClient.subscribe('/topic/' + channel, (message) => {
            const payload = JSON.parse(message.body);
            console.log(payload)
            setMessages([...messages, payload])
        });
    });

    const sendMessage = () => {
        console.log(newMessage)
        console.log('try to send message')
        stompClient.send("/app/chat"+channel, {},JSON.stringify({content: newMessage}))
        // socket.send(JSON.stringify({content: newMessage}));
        inputRef.current.value = "";
    }

    return (
        <div>
            <div className='mb-3'>
                Channel
                <input type="text"
                       onBlur={(event) => setChannel(event.target.value)}
                       className='form-control'
                       placeholder='input channel'/>
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
                        onClick={sendMessage}>Send
                </button>
            </div>
            <div className='border rounded'>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WebSocketComponent;
