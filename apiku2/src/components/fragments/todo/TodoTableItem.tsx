import { Stack, Td,Tr } from "@chakra-ui/react";

import UpdateButton from "../../elements/todo/UpdateButton";
import ToggleButton from "../../elements/todo/ToggleButton";
import { DeleteButton } from "../../elements/todo";
import { Todo } from "../../../types/todo";

type TodoTableItemProps = {
    todo: Todo
}

export default function TodoTableItem(props: TodoTableItemProps) {
    return(
        <Tr borderBottom="2px solid #000">
                  <Td borderRight="2px solid #000" textAlign="center">{props.todo.text}</Td>
                  <Td borderRight="2px solid #000" textAlign="center">
                   <ToggleButton todoId="1" />
                    </Td>
                  <Td textAlign="center">
                  <Stack direction="row" spacing={2} justify="center">
                    <UpdateButton todoID={props.todo.id}/>
                    <DeleteButton todoID={props.todo.id}/>
                  </Stack>
                  </Td>
                </Tr>
    )
}