import { ICONS } from "../../Helpers/Icons";
import Checkbox from "../Inputs/Checkbox";
import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";

function Experience({data, handleUpdate}){
    return (
        <div className="entry-container">
            <ul className="input-list">
                <li>
                    <Input
                        type='text'
                        id='company'
                        label='Company: '
                        value={data.company}
                        handleUpdate={(value) => handleUpdate({...data, company: value})}
                    />
                </li>
                <li>
                    <Input
                        type='text'
                        id='designation'
                        label='Designation'
                        value={data.designation}
                        handleUpdate={(value) => handleUpdate({...data, designation: value})}
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
                        disabled={data.currentEmployee}
                        handleUpdate={(value) => handleUpdate({...data, endDate: value})}
                    />
                </li>
                <li>
                    <Checkbox
                        id='currentEmployee'
                        label='is currently employed here: '
                        value={data.currentEmployee}
                        handleUpdate={(value) => handleUpdate({...data, currentEmployee: value, ...(value? {endDate: ''}: {})})}
                    />
                </li>
                <li>
                    <Input
                        type='text'
                        id='location'
                        label='Location: '
                        value={data.location}
                        handleUpdate={(value) => handleUpdate({...data, location: value})}
                    />
                </li>
                <li>
                    <TextArea
                        id='description'
                        label='Description: '
                        value={data.description}
                        handleUpdate={(value) => handleUpdate({...data, description: value})}
                    />
                </li>
            </ul>
        </div>
    );
}

export default Experience;