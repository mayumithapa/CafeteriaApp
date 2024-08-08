// import { useState } from "react";
// import Dropdown from "./Dropdown";

// const handleAddClick = () => {
//     const [forms, setForms] = useState(<Dropdown key={1}/>);

//     const addForm = ()=>{
//         setForms([...forms, <Dropdown key={forms.length} />]);
//     }
// }

// const Navbar = () => {
//     return ( 
//         <div className="navbar">
//             <h1>CAFETERIA APPLICATION</h1>
//             <div>
//             <img onClick={handleAddClick} src="/images/add-icon.png" id="add-icon"></img>
//             <button id="reset-btn" type="button" class="btn btn-outline-success">RESET</button>
//             </div>
            
//         </div>
//      );
// }
 
// export default Navbar;



import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
    const [forms, setForms] = useState([<Dropdown key={0}/>]);

    const handleAddClick = () => {
        setForms([...forms, <Dropdown key={forms.length} />]);
    };

    return ( 
        <div className="navbar">
            <h1>CAFETERIA APPLICATION</h1>
            <div>
                <img onClick={handleAddClick} src="/images/add-icon.png" id="add-icon" alt="Add Icon" />
                <button id="reset-btn" type="button" className="btn btn-outline-success">RESET</button>
            </div>
            <div>
                {forms}
            </div>
        </div>
     );
}
 
export default Navbar;
