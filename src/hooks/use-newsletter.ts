import { useMutation } from "@tanstack/react-query";
import type { NewsletterSubscriberInput } from "@shared/routes";

export function useSubscribeNewsletter() {
  return useMutation({
    mutationFn: async (data: NewsletterSubscriberInput) => {
      // No database — simulate success (e.g. use a third-party newsletter service or mailto in production).
      await new Promise((r) => setTimeout(r, 400));
      return { email: data.email, id: 1, createdAt: new Date() };
    },
  });
}
