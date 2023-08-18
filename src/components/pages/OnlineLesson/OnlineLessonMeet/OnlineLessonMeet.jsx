// import React, { useState } from 'react';
// import Jitsi from 'react-jitsi';

// const JitsiIntegration = () => {
//   const [meetingUrl, setMeetingUrl] = useState('');
//   const [roomName, setRoomName] = useState('');

//   const handleCreateMeeting = () => {
//     setMeetingUrl(roomName);
//   };

//   return (
//     <div>
//       <h1>Jitsi Integration</h1>
//       <label>
//         Имя комнаты:
//         <input
//           type="text"
//           value={roomName}
//           onChange={(e) => setRoomName(e.target.value)}
//         />
//       </label>
//       <button onClick={handleCreateMeeting}>Создать видеозвонок</button>
//       {meetingUrl && (
//         <p>
//           Ссылка на видеозвонок:{' '}
//           <a
//             href={`https://meet.jit.si/${meetingUrl}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             https://meet.jit.si/{meetingUrl}
//           </a>
//         </p>
//       )}
//       <Jitsi
//         roomName={roomName}
//         displayName="John Doe"
//         containerStyle={{ width: '800px', height: '500px' }}
//       />
//     </div>
//   );
// };

// export default JitsiIntegration;



// import React, { useState } from 'react';

// const JitsiIntegration = () => {
//   const [roomName, setRoomName] = useState('');

//   const handleCreateMeeting = () => {
//     // Формируйте URL для встроенной видеоконференции Jitsi
//     const jitsiUrl = `https://meet.jit.si/${roomName}`;
//     // Откройте встроенную видеоконференцию в iframe
//     const iframe = document.createElement('iframe');
//     iframe.src = jitsiUrl;
//     iframe.allow = 'camera; microphone; fullscreen; display-capture';
//     iframe.frameBorder = '0';
//     iframe.width = '100%';
//     iframe.height = '500';
//     document.getElementById('jitsiContainer').appendChild(iframe);
//   };

//   return (
//     <div>
//       <h1>Jitsi Integration</h1>
//       <label>
//         Имя комнаты:
//         <input
//           type="text"
//           value={roomName}
//           onChange={(e) => setRoomName(e.target.value)}
//         />
//       </label>
//       <button onClick={handleCreateMeeting}>Создать видеозвонок</button>
//       <div id="jitsiContainer"></div>
//     </div>
//   );
// };

// export default JitsiIntegration;

import React, { useState } from 'react';

const JitsiIntegration = () => {
  const [roomName, setRoomName] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const jitsiUrl = `https://meet.jit.si/${roomName}`;

  const handleCreateMeeting = () => {
    setInviteLink(jitsiUrl);

    const iframe = document.createElement('iframe');
    iframe.src = jitsiUrl;
    iframe.allow = 'camera; microphone; fullscreen; display-capture';
    iframe.frameBorder = '0';
    iframe.width = '100%';
    iframe.height = '500';
    document.getElementById('jitsiContainer').appendChild(iframe);
  };

  return (
    <div>
      <h1>Jitsi Integration</h1>
      <label>
        Имя комнаты:
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
      </label>
      <button onClick={handleCreateMeeting}>Создать видеозвонок</button>
      <div id="jitsiContainer"></div>
      {inviteLink && (
        <p>
          Ссылка на приглашение:{' '}
          <a
            href={inviteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {inviteLink}
          </a>
        </p>
      )}
    </div>
  );
};

export default JitsiIntegration;



