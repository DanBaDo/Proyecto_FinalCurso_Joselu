import CircleButton from '../../components/CircleButton/CircleButton';
import './EditingView.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import back from './../../assets/icons//back_icon.jpg';
import { useContext } from "react";
import { Context } from '../../services/SharedStorage';

function EditingView() {
    //----------States:----------
    const [ store ] = useContext(Context);
    //----------Handlers:----------

    return(
        <div className='editContainer'>
            <CircleButton imgSrc={back} path={-1}/>
            <h1>Edita tus datos:</h1>
            <div>
            <ProfileCard user={store}/>    
            </div>
        </div>
    );
}
export default EditingView;