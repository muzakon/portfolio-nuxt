import { onMounted, onUnmounted } from "vue";

/**
 * Vue composable for reveal-on-scroll animations using IntersectionObserver.
 * Adds 'visible' class to elements with '.reveal' or '.reveal-children' when they enter viewport.
 */
export function useRevealOnScroll() {
    let observer: IntersectionObserver | null = null;

    onMounted(() => {
        if (typeof window === "undefined") return;

        const revealEls = document.querySelectorAll(".reveal, .reveal-children");

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        revealEls.forEach((el) => observer?.observe(el));
    });

    onUnmounted(() => {
        observer?.disconnect();
    });
}
