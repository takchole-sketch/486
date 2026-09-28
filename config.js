// ─────────────────────────────────────────────
// 486 설정 파일 — 이 파일만 고치면 돼요 (설치가이드 참고)
// ─────────────────────────────────────────────

// ① Firebase 설정값: Firebase 콘솔 → 프로젝트 설정 → 내 앱 → "SDK 설정 및 구성"에서
//    const firebaseConfig = { ... } 의 { } 안쪽 내용을 그대로 붙여넣으세요.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDBoTIw_4nPq1v93vsFMcSP-LEk60Q-zts",
  authDomain: "project486-a8424.firebaseapp.com",
  projectId: "project486-a8424",
  storageBucket: "project486-a8424.firebasestorage.app",
  messagingSenderId: "689271995634",
  appId: "1:689271995634:web:3f1ab695f06b4cdf0ce46b"
};

// ② 두 사람 계정: Firebase Authentication 에서 만든 이메일과 똑같이 적어주세요.
//    A = 파란색, B = 초록색
window.ACCOUNTS = {
  A: { name: "쿄",   email: "kyo@486.app" },
  B: { name: "잡채", email: "jabchae@486.app" }
};
