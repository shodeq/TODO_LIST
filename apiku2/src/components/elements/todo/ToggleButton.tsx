import { Checkbox, FormLabel } from "@chakra-ui/react";

type ToggleButtonProps = {
    todoId: string
    className?: string
}

export default function ToggleButton(props: ToggleButtonProps) {
    const {todoId, className} = props
    console.log(todoId)
    return(
        
        <FormLabel  display="flex" alignItems="center" justifyContent="center" htmlFor={"status"}>
        <Checkbox
        colorScheme="blackAlpha"
        border="2px solid #000"
        bg="#fff"
        size="lg"
        mr={2} 
        id="status"
        className={`${className}`}
        />
        Done
    </FormLabel>
    )
}