import { useState } from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import SaveButton from '../../components/SaveButton/SaveButton';
import './RegistrerView.css';

function RegistrerView() {
    //States:
    const [ nameProfile, setNameProfile ] = useState("");
    const [ nameUser, setNameUser ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ interest, setInterest ] = useState([]);
    const [ age , setAge ] = useState (0);
    const [ description, setDescription ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ photo, setPhoto ] = useState("");

    /**
     * A factory for the each handler of the RegistrerView. 
     * @param {seter} setState - A seter of the each `useState`.
     * @returns A handler function for each `useState`.
     */
    function changeValueFactory(setState){
        return function (ev) {
            setState(ev.target.value)
        }
    }

    //Handlers:
    const nameProfileChangeHandler = changeValueFactory(setNameProfile);
    const nameChangeHandler = changeValueFactory(setNameUser);
    const passwordChangeHandler = changeValueFactory(setPassword);
    const locationChangeHandler = changeValueFactory(setLocation);
    const interestChangeHandler = changeValueFactory(setInterest);
    const ageChangeHandler = changeValueFactory(setAge);
    const descriptionChangeHandler = changeValueFactory(setDescription);
    const emailChangeHandler = changeValueFactory(setEmail);
    const photoChangeHandler = changeValueFactory(setPhoto);

    return(
        <div className='registrerContainer'>
            <h1>This is the RegistrerView</h1>
            <CircleButton/>
            <label> 
                Nombre de perfil
                <input onChange={nameProfileChangeHandler} id="nameProfile" type="text"/>
            </label>
            <label>
                Nombre
                <input onChange={nameChangeHandler} id="nameUser" type="text"/>
            </label>
            <label>
                Contraseña
                <input onChange={passwordChangeHandler} type="password" />
            </label>
            <label>
                Ciudad
                <input onChange={locationChangeHandler} type="text"/>
            </label>
            <label>
                Intereses
                <input onChange={interestChangeHandler} type="text"/>
            </label>
            <label>
                Edad
                <input onChange={ageChangeHandler} type="text"/>
            </label>
            <label>
                Descripción
                <input onChange={descriptionChangeHandler} type="text"/>
            </label>
            <label>
                Correo electrónico
                <input onChange={emailChangeHandler} type="text"/>
            </label>
            <label>
                Foto
                <input onChange={photoChangeHandler} type="text"/>
            </label>
            <SaveButton/>
        </div>
    );
}
export default RegistrerView;