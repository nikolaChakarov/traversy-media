import PropTypes from 'prop-types';
import Button from './button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, showAddTask, setShowAddTask }) => {
    const location = useLocation();

    const onClick = () => {
        setShowAddTask(!showAddTask);
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button
                text={showAddTask ? 'Hide' : 'Show'}
                onClick={onClick}
            />)}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}



export default Header;