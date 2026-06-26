"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Nama terlalu pendek"),
  email: z.string().email("Email tidak valid"),
  subject: z.string().min(5, "Subject wajib diisi"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    // Format pesan untuk WhatsApp
    const text = `Halo Gilang!%0A%0ANama: ${data.name}%0AEmail: ${data.email}%0ASubject: ${data.subject}%0A%0A${data.message}`;
    const waUrl = `https://wa.me/6282139376702?text=${text}`;
    
    window.open(waUrl, "_blank");
    toast.success("Membuka WhatsApp...");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto backdrop-blur-sm bg-card/50 p-8 rounded-2xl border border-border">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input placeholder="Name" {...register("name")} className="bg-background/50" />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Input type="email" placeholder="Email" {...register("email")} className="bg-background/50" />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <Input placeholder="Subject" {...register("subject")} className="bg-background/50" />
        {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>}
      </div>
      <div>
        <Textarea placeholder="Your message..." rows={5} {...register("message")} className="bg-background/50" />
        {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}