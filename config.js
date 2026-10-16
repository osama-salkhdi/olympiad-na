/* ===== إعدادات منصة الاختبارات — عدّل هنا فقط ===== */
window.CFG = {
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxP0SaKOss2hPLfwCdfGW1Y2mqqsGQ-z94tpNEUa4mjic5CAt-p74SHl9CrNHlsZNS4jA/exec",   // ← رابط Google Apps Script الذي ينتهي بـ /exec (اتركه فارغاً للتجربة المحلية)
  OFFICE: "مكتب الأولمبياد العلمي السوري بدرعا",
  ENGINEER: "المهندس أسامة الصلخدي",
  SUBJECT: "العلوم النووية"   // ← اسم الاختصاص (يظهر في الترويسة): الرياضيات / المعلوماتية / ...
};

/* الاختبارات تُضاف من لوحة التحكم (admin.html) باستيراد ملف HTML، فلا حاجة لتعديل هذا الملف.
   (هذه القائمة للاختبارات الثابتة القديمة فقط، اتركها فارغة) */
window.EXAMS_MANIFEST = [];
