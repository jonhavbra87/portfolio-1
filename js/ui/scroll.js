export function scrollBehavior() {
        window.addEventListener('scroll', () => {
                document.querySelectorAll('.card').forEach(card => {
                    const { top, bottom } = card.getBoundingClientRect();
                    const vh = window.innerHeight;
            
                    if (top < vh && bottom > 0) { // Kortet er delvis i viewporten
                        // Juster opacity basert på hvor mye av kortet som er synlig
                        card.style.opacity = 1 - Math.abs(top) / vh;
                    }
                });
            });
            
}