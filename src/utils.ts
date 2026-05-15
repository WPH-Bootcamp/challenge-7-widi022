// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

import { Todo } from "./types";

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

export function isTodo(obj: any): obj is Todo {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.id === "number" &&
    typeof obj.text === "string" &&
    typeof obj.completed === "boolean"
  );
}

// Fungsi helper buat cek array of Todo
export function isTodoArray(obj: any): obj is Todo[] {
  return Array.isArray(obj) && obj.every(isTodo);
}
// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus
export function formatDate(date: Date): string {
  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid
export function validateStringInput(input: string): boolean {
  return typeof input === "string" && input.trim().length > 0;
}

