import { useRef, useState } from "react";

export function useContact() {
    // EMAIL
  const [email, setEmail] = useState("");
//   NAME
  const [name, setName] = useState("");
//   Message
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  // ✅ tambahan: state + ref untuk anti double submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submittingRef = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ guard paling penting: cegah submit kedua saat submit pertama jalan
    if (submittingRef.current) return;

    submittingRef.current = true;
    setIsSubmitting(true);

    setStatus(null);
    setStatusType("");

    try {
      const trimmedEmail = email.trim();
      const trimmedName = name.trim();
      const trimmedMessage = message.trim();

      // Validation Tidak Boleh Kosong
      if (!trimmedName || !trimmedMessage || !trimmedEmail) {
        setStatusType("error");
        setStatus("Sorry, Email, Name and message cannot be empty.");
        return;
      }

      // Validation Nama Minimal 3 Karakter
      if (trimmedName.length < 3) {
        setStatusType("error");
        setStatus("Sorry, Name must be at least 3 characters.");
        return;
      }

      // Validation Nama Tidak Boleh Karakter Spesial
      const noSpecialChars = /^[a-zA-Z\s]+$/;
      if (!noSpecialChars.test(trimmedName)) {
        setStatusType("error");
        setStatus("Sorry, Name cannot contain special characters");
        return;
      }

      // Validation Pesan Minimal 5 Karakter
      if (trimmedMessage.length < 5) {
        setStatusType("error");
        setStatus("Sorry, Minimum message 5 characters.");
        return;
      }

      // ✅ optional tapi bagus: idempotency key (buat server dedupe)
      const clientMessageId = crypto.randomUUID();

      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, name: trimmedName, message: trimmedMessage, clientMessageId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusType("error");
        setStatus(data.error || "Terjadi kesalahan");
        return;
      }

      setStatusType("success");
      setStatus(`Successfully sent message, Thans for your message :).`);
      setEmail("");
      setName("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatusType("error");
      setStatus("Gagal mengirim pesan");
    } finally {
      // ✅ lock dilepas pasti, bahkan kalau return di tengah
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    name,
    setName,
    message,
    setMessage,
    status,
    statusType,
    isSubmitting, // ✅ expose untuk disable button
    handleSubmit,
  };
}
