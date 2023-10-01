import PropTypes from 'prop-types';
import CreditHour from './CreditHour';

const Credit = ({cartNames}) => {
    
    return (
        <div className="border-b-2">
            
            <p className='flex'>Total Credit Hour : {
                cartNames.map(totalHour=> <CreditHour key={totalHour.id} totalHour={totalHour}></CreditHour>)
            }</p>
            
             
            <hr />
        </div>
    );
};

Credit.propTypes = {
    cartNames: PropTypes.func

} 


export default Credit;