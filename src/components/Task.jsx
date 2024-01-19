import Button from './Button'

import './styles/Task.css'

function Task() {
    return(
        <div className="container-task">
            <div className='content'>
                <h5>My first Task</h5>
            </div>
            <div className='container-utilities'>
                <Button className='btn-del' value='X'/>
                <Button className='btn-info' value='!'/>
            </div>
        </div>
    )
}

export default Task;