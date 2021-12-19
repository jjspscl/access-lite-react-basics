import { Box, Button, Flex, Heading } from "@chakra-ui/react"

type Props = {
    title: string,
    formShown: boolean;
    toggleForm: () => void;
}
const Header: React.FC<Props> = ({ title, toggleForm, formShown }) => {
    return (
        <Flex justifyContent="space-between">
            <Heading>{title}</Heading>
            <Button
                onClick={toggleForm} 
                colorScheme={ formShown ? "blue" : "green"}>
                { formShown ? "Hide" : "Show" }
            </Button>
        </Flex>
    )
}

export default Header;