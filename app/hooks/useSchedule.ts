import { useRef, useState } from "react";

export function useSchedule() {
  // SCHEDULE NAME
  const [schedule_name, setScheduleName] = useState("");
  //   NAME
  const [schedule_description, setScheduleDescription] = useState("");
  //   Date
  const [date, setDate] = useState("");

  //   Jam
  const [jam, setJam] = useState("");

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
      const trimmedScheduleName = schedule_name.trim();
      const trimmedScheduleDescription = schedule_description.trim();
      const trimmedDate = date.trim();
      const trimmedJam = jam.trim();

      // Validation Tidak Boleh Kosong
      if (!trimmedScheduleName || !trimmedScheduleDescription || !trimmedDate || !trimmedJam) {
        setStatusType("error");
        setStatus("Maaf, Schedule Name, Schedule Description, Date dan Jam tidak boleh kosong.");
        return;
      }

      // Validation Nama Minimal 3 Karakter
      if (trimmedScheduleName.length < 3) {
        setStatusType("error");
        setStatus("Maaf, Nama minimal 3 karakter.");
        return;
      }

      // Validation Nama Tidak Boleh Karakter Spesial
      const noSpecialChars = /^[a-zA-Z\s]+$/;
      if (!noSpecialChars.test(trimmedScheduleName)) {
        setStatusType("error");
        setStatus("Maaf, Nama tidak boleh karakter spesial");
        return;
      }

      // Validation Pesan Minimal 5 Karakter
      if (trimmedScheduleDescription.length < 5) {
        setStatusType("error");
        setStatus("Maaf, Deskripsi minimal 5 karakter.");
        return;
      }

      // ✅ optional tapi bagus: idempotency key (buat server dedupe)
      const clientMessageId = crypto.randomUUID();

      const res = await fetch("/api/schedule/add-schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          schedule_name: trimmedScheduleName,
          schedule_description: trimmedScheduleDescription,
          date: trimmedDate,
          jam: trimmedJam,
          clientMessageId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusType("error");
        setStatus(data.error || "Terjadi kesalahan");
        return;
      }

      setStatusType("success");
      setStatus(`Schedule berhasil ditambahkan dengan ID: ${data.id}`);
      setScheduleName("");
      setScheduleDescription("");
      setDate("");
      setJam("");
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
    schedule_name,
    setScheduleName,
    schedule_description,
    setScheduleDescription,
    date,
    setDate,
    jam,
    setJam,
    status,
    statusType,
    isSubmitting, // ✅ expose untuk disable button
    handleSubmit,
  };
}
