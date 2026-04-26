// 共用 Firebase 初始化（opd.html / index.html / 其他頁面共用）
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyATCaOlYxkYTle1hPzYAcuXNlQHaAuO3-8",
    authDomain: "case-scheduler-f752b.firebaseapp.com",
    projectId: "case-scheduler-f752b",
    storageBucket: "case-scheduler-f752b.firebasestorage.app",
    messagingSenderId: "703006186929",
    appId: "1:703006186929:web:57ac5b059678005455f190",
    databaseURL: "https://case-scheduler-f752b-default-rtdb.firebaseio.com"
};

export const fbApp = initializeApp(FIREBASE_CONFIG);
export const fbAuth = getAuth(fbApp);
export const fbDb = getDatabase(fbApp);
