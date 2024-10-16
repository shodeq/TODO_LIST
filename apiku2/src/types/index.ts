import { Todo } from "./todo";


export type TodoQueryResponse = {
    data?: Todo[] | null,
    isLoading?: boolean;
    isError?: Error | null;
    refetch?: () => Promise<void>;
}

export type TodoMutateResponse = {
    data?: Todo | null,
    isPending?: boolean;
    isError?: Error | null;
    variable?: Todo | null;
    refetch?: () => Promise<void>;
}