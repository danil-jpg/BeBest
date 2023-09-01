// import React from 'react';
// import './Chat.scss';
// import { useState } from 'react';
// import { v1 } from 'uuid';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { IconRenderer } from '../../../UI/IconRenderer/IconRenderer.jsx';

// const Chat2 = () => {
//     const [messages, setMessages] = useState([]);
//     const [value, setValue] = useState('');

//     const sendMessageHandler = async () => {
//         await axios.post('http://localhost:5000/new-messages', {
//             message: value,
//         });
//     };

//     useEffect(() => {
//         subscribe();
//     }, []);

//     const subscribe = async () => {
//         try {
//             const { data } = await axios.get('http://localhost:5000/get-messages');
//             setMessages((prev) => [data, ...prev]);
//             await subscribe();
//         } catch (error) {
//             setTimeout(() => {
//                 subscribe();
//             }, 500);
//         }
//     };

//     return (
//         <div className='chat'>
//             <div className='chat__left'>
//                 <div className='chat__group'>
//                     <div className='chat__item'>
//                         <div className='chat__item__left'>
//                             <img src='https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768' />
//                         </div>
//                         <div className='chat__item__right'>
//                             <p className='chat__name'> Общий чат</p>
//                             <p className='chat__last-text'>xxxx</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='chat__right'>
//                 <div className='chat__right_top'>
//                     <p className='chat__right_top_text'>Общий чат</p>
//                 </div>
//                 <div className='chat__body'>
//                     <div className='messages'>
//                         {messages.map((el) => (
//                             <div key={v1()} className='messages__item'>
//                                 {el.message}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className='longPulling'>
//                     <div className='messages__input-wr'>
//                         <input
//                             className='messages__input'
//                             value={value}
//                             onChange={(e) => setValue(e.target.value)}
//                         />
//                         <div className='messages__send' onClick={sendMessageHandler}>
//                             <IconRenderer id='send' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // export default Chat2;
