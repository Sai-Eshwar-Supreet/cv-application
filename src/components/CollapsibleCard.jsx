import '../styles/CollapsibleCard.css';
import { useState } from "react";

function CollapsibleCard({cardName, children}){

    const [collapsed, setCollapsed] = useState(true);

    function toggleCollapse(){
        setCollapsed(!collapsed);
    }

    return <div className="collapsible">
        <button onClick={toggleCollapse} className="collapse">{cardName}</button>
        <div className={`container ${collapsed? 'collapsed': 'expanded'}`}>
            {!collapsed && children}
        </div>
    </div>
}

export default CollapsibleCard;