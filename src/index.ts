// TODO: Import readline untuk membaca input dari command line
import * as readline from "readline";
// TODO: Import fungsi-fungsi dari todoService
import {
  addTodo,
  listTodos,
  completeTodo,
  deleteTodo,
  searchTodos,
} from "./todoService";

// TODO: Import fungsi-fungsi dari utils (termasuk type guards)
import { validateStringInput } from "./utils";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO: Buat fungsi untuk menampilkan menu utama
// Tampilkan opsi seperti:
// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todos
// 5. Search todos
// 6. Exit
function showMenu() {
  console.log("\n=== TO-DO APP ===");
  console.log("1. Add new todo");
  console.log("2. Mark todo as complete");
  console.log("3. Delete todo");
  console.log("4. List all todos");
  console.log("5. Search todos");
  console.log("6. Exit");

  handleInput();
}

// TODO: Buat fungsi untuk handle input dari user
// Gunakan readline.question untuk menerima input
function handleInput() {
  rl.question("\nPilih menu [1-6]: ", (choice:string) => {
    switch (choice.trim()) {
      case "1":
        rl.question("Masukkan todo: ", (text:string) => {
          if (validateStringInput(text)) {
            addTodo(text);
          } else {
            console.log("Text tidak boleh kosong!");
          }
          showMenu();
        });
        break;

      case "2":
        rl.question("Masukkan ID todo yang selesai: ", (id:string) => {
          completeTodo(Number(id));
          showMenu();
        });
        break;

      case "3":
        rl.question("Masukkan ID todo yang mau dihapus: ", (id:string) => {
          deleteTodo(Number(id));
          showMenu();
        });
        break;

      case "4":
        listTodos();
        showMenu();
        break;

      case "5":
        rl.question("Masukkan keyword pencarian: ", (keyword:string) => {
          searchTodos(keyword);
          showMenu();
        });
        break;

      case "6":
        console.log("Bye! 👋");
        rl.close();
        break;

      default:
        console.log("Pilihan tidak valid!");
        showMenu();
    }
  });
}

// TODO: Buat fungsi main yang akan menjalankan aplikasi secara loop
// Hint: Gunakan recursive function atau while loop
function main() {
  console.log("Welcome to TypeScript To-Do App!");
  console.log("Start building your app here...");
  showMenu();
}
// TODO: Jalankan fungsi main


main();