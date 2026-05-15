import * as fs from "fs";
import * as path from "path";
import { Todo } from "./types";
import { isTodoArray } from "./utils";

// TODO: Definisikan path file untuk menyimpan data To-Do
const DATA_DIR = path.join(__dirname, "../../data");
const DATA_FILE = path.join(DATA_DIR, "todos.json");

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file
export function readTodos(): Todo[] {
  try {
    initStorage();
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    const parsed = JSON.parse(data);

    if (isTodoArray(parsed)) {
      return parsed;
    } else {
      console.log("Data rusak, reset ke kosong");
      return [];
    }
  } catch (error) {
    console.log("Error baca file:", error);
    return [];
  }
}

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan
export function writeTodos(todos: Todo[]): void {
  try {
    const data = JSON.stringify(todos, null, 2);
    fs.writeFileSync(DATA_FILE, data, "utf-8");
  } catch (error) {
    console.log("Error tulis file:", error);
  }
}

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)
export function initStorage(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, "[]", "utf-8");
    }
  } catch (error) {
    console.log("Gagal inisialisasi storage:", error);
  }
}

// --------------------------

// TODO: Definisikan path file untuk menyimpan data To-Do

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)

// TODO: Buat fungsi untuk membaca To-Do dari file

// TODO: Buat fungsi untuk menyimpan To-Do ke file