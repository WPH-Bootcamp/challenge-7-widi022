"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.completeTodo = completeTodo;
exports.deleteTodo = deleteTodo;
exports.listTodos = listTodos;
exports.searchTodos = searchTodos;
// TODO: Import fungsi storage untuk baca/tulis file
const storage_1 = require("./storage");
// Helper buat generate ID unik
function getNextId(todos) {
    if (todos.length === 0)
        return 1;
    return Math.max(...todos.map(t => t.id)) + 1;
}
// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active
function addTodo(text) {
    if (!text || !text.trim()) {
        console.log('Error: Text todo tidak boleh kosong!');
        return;
    }
    const todos = (0, storage_1.readTodos)();
    const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
    };
    todos.push(newTodo);
    (0, storage_1.writeTodos)(todos);
    console.log(`Todo "${newTodo.text}" berhasil ditambahkan!`);
}
// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan
function completeTodo(id) {
    const todos = (0, storage_1.readTodos)();
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        console.log(`Todo dengan ID ${id} tidak ditemukan`);
        return;
    }
    todo.completed = true;
    (0, storage_1.writeTodos)(todos);
    console.log(`Todo "${todo.text}" ditandai selesai!`);
}
// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan
function deleteTodo(id) {
    const todos = (0, storage_1.readTodos)();
    const filtered = todos.filter(t => t.id !== id);
    if (filtered.length === todos.length) {
        console.log(`Todo dengan ID ${id} tidak ditemukan`);
        return;
    }
    (0, storage_1.writeTodos)(filtered);
    console.log(`Todo dengan ID ${id} berhasil dihapus!`);
}
// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih
function listTodos(status) {
    const todos = (0, storage_1.readTodos)();
    let filtered = todos;
    if (status === 'active') {
        filtered = todos.filter(t => !t.completed);
    }
    else if (status === 'done') {
        filtered = todos.filter(t => t.completed);
    }
    if (filtered.length === 0) {
        console.log('Belum ada todo');
        return;
    }
    console.log('\n--- Daftar Todo ---');
    filtered.forEach((t, index) => {
        const statusIcon = t.completed ? '[DONE]' : '[ACTIVE]';
        console.log(`${index + 1}. ${statusIcon} ${t.text} (ID: ${t.id})`);
    });
}
// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword
function searchTodos(keyword) {
    if (!keyword.trim()) {
        console.log('Keyword tidak boleh kosong');
        listTodos();
        return;
    }
    const todos = (0, storage_1.readTodos)();
    const hasil = todos.filter(t => t.text.toLowerCase().includes(keyword.toLowerCase()));
    console.log(`\n--- Hasil Pencarian "${keyword}" ---`);
    if (hasil.length === 0) {
        console.log('Todo tidak ditemukan');
    }
    else {
        hasil.forEach((t, index) => {
            const statusIcon = t.completed ? '[DONE]' : '[ACTIVE]';
            console.log(`${index + 1}. ${statusIcon} ${t.text} (ID: ${t.id})`);
        });
    }
}
