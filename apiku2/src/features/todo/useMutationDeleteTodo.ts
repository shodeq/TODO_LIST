import { useState } from "react"
import { TodoMutateResponse } from "../../types"
import axiosInstance from "../../libs/axios"

export const useMutationDeleteTodo = ({onSuccess}: {onSuccess: () => void}) => {
    const [state, setState] = useState<TodoMutateResponse>({
        data: null,
        isPending: false,
        isError: null,
    })

    const mutate = async (id: string) => {
        try {
            const response = await axiosInstance.delete(`/todos/${id}`)
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