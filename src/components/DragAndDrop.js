import React, { useState } from 'react';
import './DragAndDrop.css';

const DragAndDrop = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    const draggedIndex = e.dataTransfer.getData('index');
    const newItems = [...items];
    const draggedItem = newItems.splice(draggedIndex, 1)[0];
    newItems.splice(targetIndex, 0, draggedItem);
    setItems(newItems);
  };

  return (
    <div className="drag-and-drop-container">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="drag-item"
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
