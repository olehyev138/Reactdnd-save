import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Components from "./Components/Components";
import "./App.css";
import "./custom.css";

function App() {
  const [components, updatecomponents] = useState(Components);
  const [direction, setDirection] = useState("horizontal");

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(components);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updatecomponents(items);
  }

  useEffect(() => {
    function handleResize() {
      setDirection( window.innerWidth < 768 ? "vertical" : "horizental" );
    }
    
    window.addEventListener("resize", handleResize);    
    handleResize();    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="content">
      <div className="content__inner">
        <div className="content__main">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="components" direction={direction}>
              {(provided) => (
                <div className="row row--equal-height"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {components.map(({ id, component }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div className="col sm-12 md-4"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {component}
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default App;
