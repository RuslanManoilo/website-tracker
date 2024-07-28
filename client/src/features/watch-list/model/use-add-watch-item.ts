import { useAddWatchListItem } from "@/entities/watch-list";
import { AddWatchListItemDto } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export function useAddWatchItemForm() {
  const { handleSubmit, register, watch, reset } = useForm<AddWatchListItemDto>(
    {
      defaultValues: {
        type: "WebSite",
      },
    },
  );

  const addWatchListItemMutation = useAddWatchListItem();
  const type = watch("type");

  return {
    handleSubmit: handleSubmit((data) =>
      addWatchListItemMutation.mutate(data, {
        onSuccess() {
          reset();
        },
      }),
    ),
    register,
    isPending: addWatchListItemMutation.isPending,
    type,
  };
}
