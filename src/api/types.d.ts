export type CustomUseQueryOptions<T> = Omit<
  UseQueryOptions<T, any, T, any[]>,
  "queryKey" | "queryFn" | "initialData"
> & {
  initialData: T | (() => T);
};

export type GetAccessTokenSilently = {
  (options?: GetTokenSilentlyOptions | undefined): Promise<string>;
};
