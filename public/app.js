function createFloatingElements(container) {
    if (!container) return;
  
    // Remove existing floating elements
    const existingElements = container.querySelectorAll('.floating-background');
    existingElements.forEach(el => el.remove());
    
    // Create new floating elements
    const numElements = container.classList.contains('hero') ? 15 : 8;
    
    for (let i = 0; i < numElements; i++) {
      const element = document.createElement('div');
      element.className = 'floating-background';
      
      const size = Math.random() * 150 + 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 4 + 6;
      
      element.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.15 + 0.05};
        animation: float ${duration}s ease-in-out infinite;
        animation-delay: -${delay}s;
        background: radial-gradient(circle at center, #bc13fe, transparent);
        border-radius: 50%;
        position: absolute;
        pointer-events: none;
        z-index: 0;
      `;
      
      container.appendChild(element);
      console.log(element)
    }
    
}
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    console.log(sections)
    sections.forEach(section => {
      createFloatingElements(section);
    });
});
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
      y: 50,
      opacity: 0,
  },
  {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
  }
);

// Enhanced 3D animation with better clarity
gsap.timeline()
  .fromTo("#svg", {
      rotateX: 45,
      rotateY: -45,
      scale: 0.8,
      opacity: 0.5,
  }, {
      rotateX: 25,
      rotateY: -25,
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "power2.out"
  })
  .to("#svg", {
      rotateX: 30,
      rotateY: -30,
      y: -15,
      z: 30,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
  });

// Add subtle rotation on mouse move for extra depth
document.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  
  gsap.to("#svg", {
      rotationY: -25 + xAxis,
      rotationX: 25 + yAxis,
      duration: 1,
      ease: "power2.out"
  });
});
