/* ===== إعدادات منصة الاختبارات — عدّل هنا فقط ===== */
window.CFG = {
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyqmdDzH9M60jYgLttBUxm3n8DRjazQciOS2P3DlYoDMkA5gsKKOePBfLJKndbb5Mi5RA/exec",   // ← رابط Google Apps Script الذي ينتهي بـ /exec (اتركه فارغاً للتجربة المحلية)
  OFFICE: "مكتب الأولمبياد العلمي السوري بدرعا",
  ENGINEER: "المهندس أسامة الصلخدي",
  SUBJECT: "العلوم النووية"   // ← اسم الاختصاص (يظهر في الترويسة): الرياضيات / المعلوماتية / ...
};

/* الاختبارات تُضاف من لوحة التحكم (admin.html) باستيراد ملف HTML، فلا حاجة لتعديل هذا الملف.
   (هذه القائمة للاختبارات الثابتة القديمة فقط، اتركها فارغة) */
window.EXAMS_MANIFEST = [];
