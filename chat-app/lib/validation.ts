import { z} from "zod";
export const MessageValidationSchema=z.string().min(2).max(100)
