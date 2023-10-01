import PropTypes from 'prop-types';

const AddCart = ({name}) => {
    const {course_name} = name;
    
    return (
        <div>
          
            <li>{course_name}</li>
            
        </div>
    );
};

AddCart.propTypes = {
    name: PropTypes.object.isRequired

}
export default AddCart;