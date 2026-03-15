import Checkbox from "../Inputs/Checkbox";
import Input from "../Inputs/Input";

function Education({data, handleUpdate, handleRemoval}){
    return (
        <div className="entry-container">
            <ul>
                <li>
                    <Input
                        type='text'
                        id='school'
                        label='school: '
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
                <li>
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
                <li>
                    <Input
                        type='text'
                        id='location'
                        label='Location: '
                        value={data.location}
                        handleUpdate={(value) => handleUpdate({...data, location: value})}
                    />
                </li>
            </ul>
            <button onClick={() => handleRemoval(data.id)}>Delete</button>
        </div>
    );
}

export default Education;