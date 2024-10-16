import { Button, useToast } from "@chakra-ui/react";
import { useMutationDeleteTodo } from "../../../features/todo/useMutationDeleteTodo";

type DeleteButtonProps = { 
    todoID : string 
    className?: string

}

export const DeleteButton =(props: DeleteButtonProps) =>{
    const { todoID, className } = props
    const toast = useToast()

    const {mutate: deleteTodo } = useMutationDeleteTodo({
        onSuccess: () => {  
            toast({
                title: "Success",
                description: "Todo deleted successfully",
            })
        }
    })
    const handleTodoDelete = () => {
        deleteTodo(todoID)
    }
    console.log(todoID)
    return (
        <Button
                        size="sm"
                        bg="#FF69B4"
                        color="#fff"
                        border="2px solid #000"
                        className={`${className}`}
                        boxShadow="2px 2px 0 #000"
                        _hover={{ bg: "#FF85B9" }}
                        onClick={handleTodoDelete}
                    >
                        Delete
                    </Button>
    );
}

export default DeleteButton