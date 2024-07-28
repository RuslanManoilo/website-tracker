import {
  watchListControllerAddWatchListItem,
  watchListControllerDeleteWatchListItem,
  watchListControllerGetWatchList,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const WATCH_LIST_KEY = ["watch-list"] as unknown[];

export function useWatchListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: WATCH_LIST_KEY.concat([{ q }]),
    queryFn: () => watchListControllerGetWatchList({ q }),
  });
}

export function useAddWatchListItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: watchListControllerAddWatchListItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: WATCH_LIST_KEY });
    },
  });
}

export function useDeleteWatchListItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: watchListControllerDeleteWatchListItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: WATCH_LIST_KEY });
    },
  });
}
