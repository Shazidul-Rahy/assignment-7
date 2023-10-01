import PropTypes from 'prop-types';
import AddCart from './AddCart';


const CartName = ({cartNames}) => {
    
    return (
        <div>
                <div className="-px-2 py-4 border-b-2">
                    <p>Course Name:</p>
                    <ul>
                    {
                        cartNames.map(name => <AddCart key={name.id} name={name}></AddCart>)
                    }
                        
                    </ul>
                </div>
        </div>
    );
};

CartName.propTypes = {
    cartNames: PropTypes.func

} 

export default CartName;