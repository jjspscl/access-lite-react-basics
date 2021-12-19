import { Box, Button, Heading } from "@chakra-ui/react"
import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <Box>
            <Heading>{count}</Heading>
            <Button onClick={() => setCount(count + 1)}>Add Count</Button>
        </Box>
    )
}

export default Counter;