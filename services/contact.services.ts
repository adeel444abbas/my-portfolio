import { ContactPayload } from "@/types/contact.model";
import axiosInstance from "@/utils/config";

export const sendContactMessage = async (
    payload: ContactPayload
) => {
    const response = await axiosInstance.post("/contact", payload);

    return response.data;
};