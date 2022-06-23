import CircleButton from '../../components/CircleButton/CircleButton';
import './EditingView.css';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';

function EditingView() {
    //----------States:----------
 
    //----------Handlers:----------

    return(
        <div className='editContainer'>
            <h1>This is the EditingView</h1>
            <CircleButton/>
            <h1>Edita tus datos:</h1>
           <ProfileCard/>
        </div>
    );
}
export default EditingView;