import { Button, useToast } from "@chakra-ui/react";
import { useMutationUpdateTodo } from "../../../features/todo/useMutationUpdatetodo";

type UpdateButtonProps = {
    todoID: string
    className?: string
    
}



export default function UpdateButton(props: UpdateButtonProps) {
    const {todoID, className} = props
    const toast = useToast()

    const {mutate: updateTodo } = useMutationUpdateTodo({
        onSuccess: () => {  
            toast({
                title: "Success",
                description: "Todo deleted successfully",
            })
        }
    })
    const handleTodoUpdate = () => {
        // deleteTodo(todoID)
        console.log(todoID)
    }

    console.log(todoID)
    return(
        <Button
                        size="sm"
                        bg="#FFFFFF"
                        color="#000"
                        border="2px solid #000"
                        boxShadow="2px 2px 0 #000"
                        className={`${className}`}
                        _hover={{ bg: "#F0F0F0" }}
                        onClick={handleTodoUpdate}
                    >
                        Update
                    </Button>
    )
}