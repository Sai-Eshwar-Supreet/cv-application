import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";

function PersonalDetails({data, handleUpdate}){
    return (
        <div className="entry-container">
            <ul className="input-list">
                <li>
                    <Input
                        type='text'
                        id='fullName'
                        label='Full Name: '
                        value={data.fullName ?? ''}
                        handleUpdate={(value) => handleUpdate({...data, fullName: value})}
                    />
                </li>
                <li>
                    <Input
                        type='email'
                        id='email'
                        label='Email: '
                        value={data.email ?? ''}
                        handleUpdate={(value) => handleUpdate({...data, email: value})}
                    />
                </li>
                <li>
                    <Input
                        type='tel'
                        id='phoneNumber'
                        label='Phone Number: '
                        value={data.phoneNumber ?? ''}
                        handleUpdate={(value) => handleUpdate({...data, phoneNumber: value})}
                    />
                </li>
                <li>
                    <TextArea
                        id='location'
                        label='Location: '
                        value={data.location ?? ''}
                        handleUpdate={(value) => handleUpdate({...data, location: value})}
                    />
                </li>
            </ul>
        </div>
    );
}

export default PersonalDetails;