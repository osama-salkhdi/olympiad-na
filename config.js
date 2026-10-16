/* ===== إعدادات منصة الاختبارات — عدّل هنا فقط ===== */
window.CFG = {
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzPPDnMUItK4cX23cmFYw4hgt107g97BAaZ6bwUPkbjEMR-TMTwu6hw-17i-vKCfrGdwg/exec",   // ← رابط Google Apps Script الذي ينتهي بـ /exec (اتركه فارغاً للتجربة المحلية)
  OFFICE: "مكتب الأولمبياد العلمي السوري بدرعا",
  ENGINEER: "المهندس أسامة الصلخدي",
  SUBJECT: "العلوم النووية"   // ← اسم الاختصاص (يظهر في الترويسة): الرياضيات / المعلوماتية / ...
};

/* الاختبارات تُضاف من لوحة التحكم (admin.html) باستيراد ملف HTML، فلا حاجة لتعديل هذا الملف.
   (هذه القائمة للاختبارات الثابتة القديمة فقط، اتركها فارغة) */
window.EXAMS_MANIFEST = [];
