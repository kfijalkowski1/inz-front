import {Id, toast, ToastOptions, TypeOptions, Zoom} from 'react-toastify';


const config: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Zoom,
};


export const toastInfo = (text: string) => {
  toast.info(text, config);
}
export const toastSuccess = (text: string) => {
  toast.success(text, config);
}
export const toastWarning = (text: string) => {
  toast.warning(text, config);
}
export const toastError = (text: string) => {
  toast.error(text, config);
}

export const toastLoading = (text: string): Id => {
  return toast.loading(text);
}
export const toastUpdate = (id: Id, render: string, type: TypeOptions) => {
  toast.update(id, {render, type, isLoading: false})
}

export default {
  info: toastInfo,
  success: toastSuccess,
  warning: toastWarning,
  error: toastError,
  loading: toastLoading,
  update: toastUpdate,
}