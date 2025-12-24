function name_p_n_11() {
  document.querySelectorAll(".content_section").forEach(sec => sec.classList.remove("active"));
  document.getElementById("class11_physics_chap").classList.add("active");
  setActiveIcon("class11_physics_chap");
}
function name_c_n_11() {
  document.querySelectorAll(".content_section").forEach(sec => sec.classList.remove("active"));
  document.getElementById("class11_chemistry_chap").classList.add("active");
  setActiveIcon("class11_chemistry_chap");
}
function name_b_n_11() {
  document.querySelectorAll(".content_section").forEach(sec => sec.classList.remove("active"));
  document.getElementById("class11_biology_chap").classList.add("active");
  setActiveIcon("class11_biology_chap");
}
function name_p_fs_11() {
  document.querySelectorAll(".content_section").forEach(sec => sec.classList.remove("active"));
  document.getElementById("class11_physics_formulaSheet_chap").classList.add("active");
  setActiveIcon("class11_physics_formulaSheet_chap");
}
function name_c_fs_11() {
  document.querySelectorAll(".content_section").forEach(sec => sec.classList.remove("active"));
  document.getElementById("class11_chemistry_formulaSheet_chap").classList.add("active");
  setActiveIcon("class11_chemistry_formulaSheet_chap");
}


// Disable Image Dragging Example
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("dragstart", function(e) {
    e.preventDefault();
    alert("This action is not allowed. Error 104!");
  });
});
//Try pressing Ctrl+C, Ctrl+S, Ctrl+U, or Ctrl+P — they won’t work on this page.

document.addEventListener("keydown", function(e) {
      const key = e.key.toLowerCase();
      const ctrlOrMeta = e.ctrlKey || e.metaKey;
      // Block common hotkeys
      if (
        (ctrlOrMeta && ["c", "x", "v", "s", "u", "a", "p"].includes(key)) || // Copy, Cut, Paste, Save, View Source, Select All, Print
        (e.key === "F12") || // DevTools
        (ctrlOrMeta && e.shiftKey && ["i", "j", "c"].includes(key)) // DevTools shortcuts
      ) {
        e.preventDefault();
      }
    });

// Block Safari Reader Mode shortcut (Cmd+Shift+R)
document.addEventListener("keydown", function(e) {
  if (e.metaKey && e.shiftKey && e.key.toLowerCase() === "r") {
    e.preventDefault();
    alert("This action is not allowed. Error 105!");
  }
});