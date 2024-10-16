import { Box, Flex, FormControl, FormLabel, Heading, Text, useToast } from "@chakra-ui/react";
import TodoFormInner from "./TodoFormInner";
import SubmitButton from "../../elements/todo/SubmitButton";
import { CreateTodoInput, createTodoSchema } from "../../../types/todo";
import { useMutationCreateTodo } from "../../../features/todo/useMutationCreateTodo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Todoform() {
    const toast = useToast()
    const {mutate: createTodo}=useMutationCreateTodo({
        onSuccess: () => {  
            toast({
                title: "Success",
                description: "Todo created successfully",
            })
            form.reset()
        }
    })

    const form = useForm<CreateTodoInput>({
        defaultValues: {
            text: "",
        },
        resolver:zodResolver(createTodoSchema)
        
    })
  const handleTodoSubmit = (values: CreateTodoInput) => {
    createTodo(values);
    console.log(values);

  };

  return (
    <Box
      width="100%"
      bg="#4A90E2"
      p={8}
      borderRadius="8px"
      boxShadow="8px 8px 0 #000"
      border="4px solid #000"
      mb={6}
    >
      <Heading
        size="md"
        mb={1}
        textAlign="left"
        fontFamily="sans-serif"
        color="#1c1c1c"
        textTransform="uppercase"
        fontWeight="bold"
      >
        Todo Form
      </Heading>
      <Text color="#1c1c1c" fontWeight="medium" mb={2} fontSize="md">
        Create Your Todo
      </Text>


        <TodoFormInner form={form} onSubmit={handleTodoSubmit} />

        <Flex justifyContent="flex-end">
          <SubmitButton formID="todo-form" disabled={false}  />
        </Flex>

    </Box>
  );
}
