import React, { useState, useCallback } from 'react';

const SwitchTabs = ({ data, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(data[0]);

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
    onTabChange(tab);
  }, [onTabChange]);

  return (
    <div className="flex justify-center items-center bg-white rounded-lg">
      {data.map((tab) => (
        <TabButton
          key={tab}
          tab={tab}
          isActive={activeTab === tab}
          onClick={handleTabClick}
        />
      ))}
    </div>
  );
};

const TabButton = React.memo(({ tab, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(tab)}
      className={`px-4 capitalize font-semibold py-2 rounded transition-all duration-300 delay-100 ease-in-out ${
        isActive ? 'bg-netflixRed text-white ' : 'bg-white text-netflixRed hover:bg-gray-100'
      }`}
    >
      {tab}
    </button>
  );
});

export default SwitchTabs;


// import React, { useState } from 'react'

// function SwitchTabs({data,onTabChange}) {

//   const [activeTab, setActiveTab] = useState(data[0]);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     onTabChange(tab);
//   };

//   return (
//     <div className="flex justify-center items-center bg-white rounded-lg">
//       {data.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => handleTabClick(tab)}
//           className={`px-4 capitalize font-semibold py-2 rounded transition duration-300 ease-in-out ${
//             activeTab === tab
//               ? "bg-netflixRed text-white"
//               : "bg-white text-netflixRed"
//           }`}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// }


// export default SwitchTabs