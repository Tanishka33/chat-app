import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer';
import RightSidebar from '../components/RightSidebar';

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className='w-full h-screen sm:px-[15%] sm:py-[5%] bg-black'>
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-[#8185b2] rounded-full blur-[150px] opacity-30 z-0"></div>

      <div
        className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid relative 
        ${
          selectedUser
            ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]'
            : 'md:grid-cols-2'
        } grid-cols-1`}
      >
        <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
      </div>
    </div>
  );
};

export default HomePage;
