// import {STOMP_CLIENT} from "../../../constants/appConstants.jsx";
// import {useEffect} from "react";
//
// STOMP_CLIENT.onConnect = (frame) => {
//     setConnected(true);
//     console.log('channel '+channel)
//     console.log('Connected: ' + frame);
//     setConnectNotify('Connected: ' + frame)
//     STOMP_CLIENT.subscribe('/topic/listen/' + channel, (message) => {
//         console.log('received: '+message)
//         const messageContent = JSON.parse(message.body).content;
//         setMessages([...messages, messageContent])
//     });
// };
//
// STOMP_CLIENT.onWebSocketError = (error) => {
//     console.error('Error with websocket', error);
//     setConnectNotify('Error with websocket')
// };
//
// STOMP_CLIENT.onStompError = (frame) => {
//     console.error('Broker reported error: ' + frame.headers['message']);
//     console.error('Additional details: ' + frame.body);
// };
//
// useEffect(() => {
//     if (connection)
//         STOMP_CLIENT.activate();
// }, [connection]);
//
// function disconnect() {
//     STOMP_CLIENT.deactivate();
//     setConnected(false);
//     setConnectNotify('Disconnected')
//     console.log("Disconnected");
// }