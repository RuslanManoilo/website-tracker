import { UIButton, UISelectField, UITextField } from "@/shared/ui";
import { useAddWatchItemForm } from "../model/use-add-watch-item";

const typeOptions = [
  { label: "WebSite", value: "WebSite" },
//   { label: "KeyWord", value: "KeyWord" },
];

export function AddWatchListItemForm() {
  const { handleSubmit, register, type, isPending } = useAddWatchItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UISelectField
        className="grow min-w-[200px]"
        options={typeOptions}
        selectProps={{
          ...register("type"),
        }}
      />
      <UITextField
        className="grow"
        inputProps={{
          placeholder:
            type === "KeyWord" ? "Enter Key Word..." : "Enter WebSite",
          ...register("data"),
        }}
      />
      <UIButton variant="primary" disabled={isPending}>
        Add Block Item
      </UIButton>
    </form>
  );
}
