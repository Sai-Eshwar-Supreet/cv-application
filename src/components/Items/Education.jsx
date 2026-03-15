import { ICONS } from "../../Helpers/Icons";
import Checkbox from "../Inputs/Checkbox";
import Input from "../Inputs/Input";

function Education({data, handleUpdate}){
    return (
        <div className="entry-container">
            <ul className="input-list">
                <li>
                    <Input
                        type='text'
                        id='school'
                        label='School: '
                        value={data.school}
                        handleUpdate={(value) => handleUpdate({...data, school: value})}
                    />
                </li>
                <li>
                    <Input
                        type='text'
                        id='degree'
                        label='Degree'
                        value={data.degree}
                        handleUpdate={(value) => handleUpdate({...data, degree: value})}
                    />
                </li>
                <li className="date-group">
                    <Input
                        type='month'
                        id='startDate'
                        label='Start Date: '
                        value={data.startDate}
                        handleUpdate={(value) => handleUpdate({...data, startDate: value})}
                    />
                    <Input
                        type='month'
                        id='endDate'
                        label='End Date: '
                        value={data.endDate}
                        disabled={data.currentStudent}
                        handleUpdate={(value) => handleUpdate({...data, endDate: value})}
                    />
                </li>
                <li>
                    <Checkbox
                        id='currentStudent'
                        label='Is currently studying here: '
                        value={data.currentStudent}
                        handleUpdate={(value) => handleUpdate({...data, currentStudent: value, ...(value? {endDate: ''}: {})})}
                    />
                </li>
            </ul>
        </div>
    );
}

export default Education;