import {  Table, TableContainer, Tbody, Th, Thead, Tr, useToast } from "@chakra-ui/react";
import TodoTableItem from "./TodoTableItem";
import { Todo } from "../../../types/todo";
import { useQueryTodos } from "../../../features/todo/useQueryTodos";


const renderElement = (todos: Todo[]) => todos.map(todo => <TodoTableItem key={todo.id} todo={todo}/>);

 

export default function TodoTable() {

    const {toast} = useToast()
    const {data: todoData, isloading: todoIsloading} = useQueryTodos({
        onSuccess: () => {
            toast({
                title: "Success",
                description: "Success get todos",
                variant: "success",
            })
        }
    })
    

    return(
        <TableContainer mt={6}>
          <Table variant="unstyled" bg="#4A90E2" border="2px solid #000" borderRadius="8px" color="#fff" width="100%">
            <Thead>
              <Tr borderBottom="2px solid #000" bg="#3A70B2">
                <Th color="#fff" borderRight="2px solid #000" textAlign="center">Todo</Th>
                <Th color="#fff" borderRight="2px solid #000" textAlign="center">Status</Th>
                <Th color="#fff" textAlign="center">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
                {/* <TodoTableItem/> */}
                {!todoIsloading && todoData && renderElement(todoData)}
                {/* <Tr borderBottom="2px solid #000">
                  <Td borderRight="2px solid #000" textAlign="center">TODO 1</Td>
                  <Td borderRight="2px solid #000" textAlign="center">
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Checkbox
                        colorScheme="blackAlpha"
                        border="2px solid #000"
                        bg="#fff"
                        size="lg"
                        mr={2} 
                        />
                        <Text fontWeight="bold" color="#000">
                        Done
                        </Text>
                    </Box>
                    </Td>
                  <Td textAlign="center">
                  <Stack direction="row" spacing={2} justify="center">
                    <Button
                        size="sm"
                        bg="#FFFFFF"
                        color="#000"
                        border="2px solid #000"
                        boxShadow="2px 2px 0 #000"
                        _hover={{ bg: "#F0F0F0" }}
                    >
                        Update
                    </Button>
                    <Button
                        size="sm"
                        bg="#FF69B4"
                        color="#fff"
                        border="2px solid #000"
                        boxShadow="2px 2px 0 #000"
                        _hover={{ bg: "#FF85B9" }}
                    >
                        Delete
                    </Button>
                  </Stack>
                  </Td>
                </Tr>
                <Tr borderBottom="2px solid #000">
                  <Td borderRight="2px solid #000" textAlign="center">TODO 1</Td>
                  <Td borderRight="2px solid #000" textAlign="center">
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Checkbox
                        colorScheme="blackAlpha"
                        border="2px solid #000"
                        bg="#fff"
                        size="lg"
                        mr={2} 
                        />
                        <Text fontWeight="bold" color="#000">
                        Done
                        </Text>
                    </Box>
                    </Td>
                  <Td textAlign="center">
                  <Stack direction="row" spacing={2} justify="center">
                    <Button
                        size="sm"
                        bg="#FFFFFF"
                        color="#000"
                        border="2px solid #000"
                        boxShadow="2px 2px 0 #000"
                        _hover={{ bg: "#F0F0F0" }}
                    >
                        Update
                    </Button>
                    <Button
                        size="sm"
                        bg="#FF69B4"
                        color="#fff"
                        border="2px solid #000"
                        boxShadow="2px 2px 0 #000"
                        _hover={{ bg: "#FF85B9" }}
                    >
                        Delete
                    </Button>
                  </Stack>
                  </Td>
                </Tr> */}
            </Tbody>
          </Table>
        </TableContainer>
    )
}