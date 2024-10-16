import { TodoQueryResponse } from "../../types"
import axiosInstance from "../../libs/axios"
import { useEffect, useState } from "react"



export const useQueryTodos = ({onSuccess}: {onSuccess: () => void}) => {
    const [state, setState] = useState<TodoQueryResponse>({
        data: null,
        isLoading: true,
        isError: null,
    })

    const refetch = async () => {
        try {
            const response = await axiosInstance.get('/todos')
                setState({
                    data: response.data.data,
                })
                onSuccess()
        } catch (error) {
            setState(prev => ({
                ...prev,
                isError: error instanceof Error ? error : new Error('Unknown error'),
            }))
            
        } finally{
            setState((prev) => ({
                ...prev,
                isLoading: false,
            }))
        }
    }
    useEffect(() =>{
        refetch()
    },[])

    return{
        ...state,
        refetch
    }
}
