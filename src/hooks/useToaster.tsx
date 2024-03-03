import { toast } from "react-toastify";

export const useToaster = () => {
  const toastSuccess = (message: string) =>
    toast.success(<div className="text-text-primary text-base">{message}</div>);
  const toastError = (message: string) =>
    toast.error(<div className="text-text-primary text-base">{message}</div>);

  return { toastSuccess, toastError };
};
