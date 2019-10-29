import React, {useContext} from 'react';
import PersonsContext from '../context/persons';

const PersonList = props => {

        const personsContex = useContext(PersonsContext);

        const removeOne = (index) => {
            let persons = [...personsContex.persons];
            persons.splice(index,1);
            personsContex.setPersons(() => persons);
        }

        return(
        <div>
            {
                personsContex.persons.map((person, index) => (
                    <p key={index} onClick={() => removeOne(index)}>{person.toString()}</p>
                ))
            }
        </div>
    )
}

export default PersonList;