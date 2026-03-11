import { useMutation } from "@tanstack/react-query";
import type { ContactMessageInput } from "@shared/routes";

export function useCreateContactMessage() {
  return useMutation({
    mutationFn: async (data: ContactMessageInput) => {
      // No database — simulate success (e.g. use mailto or a form service in production).
      await new Promise((r) => setTimeout(r, 400));
      return { ...data, id: 1, createdAt: new Date() };
    },
  });
}
