import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";

function Experience({data, handleUpdate, handleRemoval}){
    return (
        <div>
            <ul>
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
                        handleUpdate={(value) => handleUpdate({...data, endDate: value})}
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
            <button onClick={() => handleRemoval(data.id)}>Delete</button>
        </div>
    );
}

export default Experience;