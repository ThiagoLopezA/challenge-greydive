import Swal from "sweetalert2";

export const alerts = {
  success: async (title: string, text: string) => {
    await Swal.fire({
      title,
      text,
      icon: "success",
      iconColor: "#d30070",
      confirmButtonColor: "#d30070",
      confirmButtonText: "Cerrar",
    });
  },
};
