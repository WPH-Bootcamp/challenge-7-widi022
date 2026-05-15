"use strict";
// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTodo = isTodo;
exports.isTodoArray = isTodoArray;
exports.formatDate = formatDate;
exports.validateStringInput = validateStringInput;
// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid
function isTodo(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.id === "number" &&
        typeof obj.text === "string" &&
        typeof obj.completed === "boolean");
}
// Fungsi helper buat cek array of Todo
function isTodoArray(obj) {
    return Array.isArray(obj) && obj.every(isTodo);
}
// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus
function formatDate(date) {
    return date.toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}
// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid
function validateStringInput(input) {
    return typeof input === "string" && input.trim().length > 0;
}
