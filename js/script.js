document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("overlay");
  const openBtn = document.getElementById("hamburger-btn");
  const closeBtn = document.getElementById("close-btn");

  console.log("JS connected");

  openBtn.addEventListener("click", () => {
    console.log("clicked");

    menu.classList.remove("scale-0", "opacity-0");
    menu.classList.add("scale-100", "opacity-100");

    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100");

    document.body.classList.add("overflow-hidden");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("scale-100", "opacity-100");
    menu.classList.add("scale-0", "opacity-0");

    overlay.classList.add("opacity-0", "pointer-events-none");
    document.body.classList.remove("overflow-hidden");
  });

  overlay.addEventListener("click", () => {
    menu.classList.remove("scale-100", "opacity-100");
    menu.classList.add("scale-0", "opacity-0");

    overlay.classList.add("opacity-0", "pointer-events-none");
    document.body.classList.remove("overflow-hidden");
  });
});


function toggle(btn) {
  const wrap = btn.nextElementSibling;
  const chevron = btn.querySelector('.chevron');
  const isOpen = wrap.classList.contains('open');

  wrap.classList.toggle('open', !isOpen);
  chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  chevron.style.color = isOpen ? '' : '#0C63E4';
  btn.classList.toggle('bg-[#E7F1FF]', !isOpen);
  btn.style.border = isOpen ? '' : '3px solid #86B7FE';
}


  
