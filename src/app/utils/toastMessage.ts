import toast from "react-hot-toast";


export const successToast = (msg: string) => {
    toast(msg, {
        duration: 1000,
        position: "bottom-right",
        style: {
          backgroundColor: "#E7FEE2",
          border: "2px, solid, #16A34A",
          minWidth: "400px",
          color: "black",
        },
      });
}

export const errorToast = (msg: string) => {
        toast(msg, {
          duration: 8000,
          position: "bottom-right",
          style: {
            backgroundColor: "#FEE2E2",
            border: "2px, solid, #DC2626",
            minWidth: "400px",
            color: "black",
          },
        })

      }