import PropTypes from 'prop-types';
import Button from './button';

const Header = ({ title, showAddTask, setShowAddTask }) => {

    const onClick = () => {
        setShowAddTask(!showAddTask);
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                text={showAddTask ? 'Hide' : 'Show'}
                onClick={onClick}
            />
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