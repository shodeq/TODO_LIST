import { useState } from "react"
import { TodoMutateResponse } from "../../types"
import { CreateTodoInput } from "../../types/todo"
import axiosInstance from "../../libs/axios"

export const useMutationCreateTodo = ({onSuccess}: {onSuccess: () => void}) => {
    const [state, setState] = useState<TodoMutateResponse>({
        data: null,
        isPending: false,
        isError: null,
    })

    const mutate = async (data: CreateTodoInput) => {
        try {
            const response = await axiosInstance.post('/todos', data)
            setState({
                data: response.data.data,
                isPending: true,
            })
            onSuccess()
        } catch (error) {
            setState(prev => ({
                ...prev,
                isError: error instanceof Error ? error : new Error('Unknown error'),
            }))
        } finally {
            setState(prev => ({
                ...prev,
                isPending: false,
            }))
        }
    }

    return { mutate, state }
}