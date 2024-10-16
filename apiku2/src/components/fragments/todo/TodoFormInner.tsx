import { FormControl,FormLabel, Input } from "@chakra-ui/react";
import { CreateTodoInput } from "../../../types/todo";
import { UseFormReturn } from "react-hook-form";

type TodoFormInnerProps = {
    onSubmit: (values: CreateTodoInput)=>void
    form: UseFormReturn<CreateTodoInput>
}

export default function TodoFormInner( props: TodoFormInnerProps) {
    const {form, onSubmit} = props
    return (
       <form id="todo-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormControl>
            <FormLabel>TODO</FormLabel>
                    <Input
                        placeholder="Input todo here"
                        bg="#fff"
                        border="2px solid #000"
                        color="#000"
                        _placeholder={{ color: '#888' }}
                        mb={4}
                        height="50px"
                        boxShadow="none"
                        {...form.register("text")}
                        />
                        {/* {!isError ? (
                        <FormHelperText>
                        Enter the email you'd like to receive the newsletter on.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    )} */}
            </FormControl>
            
       </form>
    );
}