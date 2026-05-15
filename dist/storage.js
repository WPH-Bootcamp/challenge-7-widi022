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
exports.readTodos = readTodos;
exports.writeTodos = writeTodos;
exports.initStorage = initStorage;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const utils_1 = require("./utils");
// TODO: Definisikan path file untuk menyimpan data To-Do
const DATA_DIR = path.join(__dirname, "../../data");
const DATA_FILE = path.join(DATA_DIR, "todos.json");
// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file
function readTodos() {
    try {
        initStorage();
        const data = fs.readFileSync(DATA_FILE, "utf-8");
        const parsed = JSON.parse(data);
        if ((0, utils_1.isTodoArray)(parsed)) {
            return parsed;
        }
        else {
            console.log("Data rusak, reset ke kosong");
            return [];
        }
    }
    catch (error) {
        console.log("Error baca file:", error);
        return [];
    }
}
// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan
function writeTodos(todos) {
    try {
        const data = JSON.stringify(todos, null, 2);
        fs.writeFileSync(DATA_FILE, data, "utf-8");
    }
    catch (error) {
        console.log("Error tulis file:", error);
    }
}
// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)
function initStorage() {
    try {
        if (!fs.existsSync(DATA_DIR)) {
            fs.mkdirSync(DATA_DIR, { recursive: true });
        }
        if (!fs.existsSync(DATA_FILE)) {
            fs.writeFileSync(DATA_FILE, "[]", "utf-8");
        }
    }
    catch (error) {
        console.log("Gagal inisialisasi storage:", error);
    }
}
// --------------------------
// TODO: Definisikan path file untuk menyimpan data To-Do
// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)
// TODO: Buat fungsi untuk membaca To-Do dari file
// TODO: Buat fungsi untuk menyimpan To-Do ke file
