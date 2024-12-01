document.querySelectorAll(".box-summary").forEach((summary) => {
    summary.addEventListener("click", () => {
      const box = summary.parentElement;
  
           if (box.classList.contains("expanded")) {
        box.classList.remove("expanded");
      } else {
        document.querySelectorAll(".box").forEach((b) => b.classList.remove("expanded"));
  
        box.classList.add("expanded");
      }
    });
});
