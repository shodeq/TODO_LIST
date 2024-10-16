import { TodoQueryResponse } from "../../types";
import axiosInstance from "../../libs/axios";
import { useEffect, useState } from "react";

export const useQueryTodosID = ({ id, onSuccess }: { id: string; onSuccess: () => void }) => {
  const [state, setState] = useState<TodoQueryResponse>({
    data: null,
    isLoading: true,
    isError: null,
  });

  const refetch = async () => {
    setState(prev => ({
      ...prev,
      isLoading: true, 
    }));

    try {
      const response = await axiosInstance.get(`/todos/${id}`);
      setState({
        data: response.data.data,
        isLoading: false,
        isError: null, 
      });
      onSuccess();
    } catch (error) {
      setState(prev => ({
        ...prev,
        isError: error instanceof Error ? error : new Error("Unknown error"),
        isLoading: false, 
      }));
    }
  };

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id]);

  return {
    ...state,
    refetch,
  };
};
