import '../../styles/CollapsibleCard.css';
import { useState } from "react";

function CollapsibleCard({cardName, index, handleMovement,  children}){

    if(typeof cardName !== 'string'){
        throw new TypeError('Expects cardName to be a string');
    }

    if(index !== undefined && (!(Number.isInteger(index)) || index < 0)){
        throw new TypeError('Expects index to be a non-negative integer');
    }

    if(handleMovement !== undefined && typeof handleMovement !== 'function'){
        throw new TypeError('Expects handleMovement to be a function');
    }

    const [collapsed, setCollapsed] = useState(false);

    function toggleCollapse(){
        setCollapsed(!collapsed);
    }

    function move(direction){
        handleMovement(index, direction)
    }

    return <section className="collapsible">
        <div>
            <header><button onClick={toggleCollapse} className="collapse">{cardName}</button></header>
            {handleMovement && <div className='move-bar'>
                <button onClick={() => move(-1)}>Move up</button>
                <button onClick={() => move(1)}>Move down</button>
            </div>}
        </div>
        <div className={`container ${collapsed? 'collapsed': 'expanded'}`}>
            {!collapsed && children}
        </div>
    </section>
}

export default CollapsibleCard;