import { useState } from "react";

function useTabs(initialValue, allTabs) {
  //   if (!allTabs || Array.isArray(allTabs)) {
  //     return;
  //   }
  const [currentIndex, setCurrentIndex] = useState(initialValue);
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
}

export default useTabs;

// const content = [
//     {
//       tab: "Section 1",
//       content: "I'm the content of the Section1",
//     },
//     {
//       tab: "Section 2",
//       content: "I'm the content of the Section2",
//     },
//   ];

//   function App() {
//     const { currentItem, changeItem } = useTabs(0, content);
//     return (
//       <div>
//         {content.map((section, index) => (
//           <button onClick={() => changeItem(index)}>{section.tab}</button>
//         ))}
//         <div> {currentItem.content}</div>
//       </div>
//     );
//   }
