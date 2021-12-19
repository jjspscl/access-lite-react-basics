import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types'
import { MouseEventHandler, useState } from 'react';

type Props = {
    title?: string;
    submit: (description: string, reminder: boolean) => void;
}

const TaskForm: React.FC<Props> = ({ submit }) => {
    const [task, setTask] = useState('');
    const [reminder, setRemind] = useState(false);

    const onSubmit = () => {
        submit(task, reminder);
    }
    return (
        <Box py={5}>
            <FormControl>
                <FormLabel htmlFor='taskTitle'>Task</FormLabel>
                <Input id='taskTitle' type='email' placeholder='Add Task' 
                onChange={(e) => setTask(e.target.value)}/>
            </FormControl>
            <Box>
                <Checkbox size="md" isChecked={reminder}
                onChange={(e) => {
                    setRemind(e.target.checked)
                }}>Set Reminder</Checkbox>
            </Box>
            <Button width="100%" onClick={onSubmit}>Save</Button>
        </Box>
    )
}

// TaskForm.defaultProps = {
//     title: 'NO TITLE PROVIDED'
// }

// TaskForm.propTypes = {
//     title: PropTypes.string.isRequired
// }
export default TaskForm;