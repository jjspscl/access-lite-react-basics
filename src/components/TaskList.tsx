import { Box, Button, Checkbox, Flex, Heading, Text } from "@chakra-ui/react"
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ITask } from "../types/tasks";

type Props = {
    tasks: ITask[];
    deleteTask: (id: number) => void;
}
const TaskList: React.FC<Props> = ({
    tasks,
    deleteTask
}) => {
    return (
        <Box>
            {
                tasks.map(({ id, description, reminder }) => (
                    <Flex flexDirection="row" alignContent="center" justifyContent="center">
                        <Text>{description}</Text>
                        <AiOutlineCloseCircle 
                        onClick={() => deleteTask(id)}/>
                    </Flex>
                ))
            }
            <Heading>TASK LISTS</Heading>
        </Box>
    )
}

export default TaskList;