"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: Import readline untuk membaca input dari command line
const readline = __importStar(require("readline"));
// TODO: Import fungsi-fungsi dari todoService
const todoService_1 = require("./todoService");
// TODO: Import fungsi-fungsi dari utils (termasuk type guards)
const utils_1 = require("./utils");
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
    rl.question("\nPilih menu [1-6]: ", (choice) => {
        switch (choice.trim()) {
            case "1":
                rl.question("Masukkan todo: ", (text) => {
                    if ((0, utils_1.validateStringInput)(text)) {
                        (0, todoService_1.addTodo)(text);
                    }
                    else {
                        console.log("Text tidak boleh kosong!");
                    }
                    showMenu();
                });
                break;
            case "2":
                rl.question("Masukkan ID todo yang selesai: ", (id) => {
                    (0, todoService_1.completeTodo)(Number(id));
                    showMenu();
                });
                break;
            case "3":
                rl.question("Masukkan ID todo yang mau dihapus: ", (id) => {
                    (0, todoService_1.deleteTodo)(Number(id));
                    showMenu();
                });
                break;
            case "4":
                (0, todoService_1.listTodos)();
                showMenu();
                break;
            case "5":
                rl.question("Masukkan keyword pencarian: ", (keyword) => {
                    (0, todoService_1.searchTodos)(keyword);
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
// console.log("Welcome to TypeScript To-Do App!");
main();
