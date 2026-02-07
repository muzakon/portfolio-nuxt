import { ref, onMounted, onUnmounted } from "vue";

/**
 * Vue composable for scroll spy functionality.
 * Tracks which section is currently in view and updates active section.
 */
export function useScrollSpy(sectionIds: string[]) {
    const activeSection = ref("");

    const updateActiveSection = () => {
        if (typeof window === "undefined") return;

        // Check if scrolled to bottom of page - activate last section
        const scrolledToBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

        if (scrolledToBottom && sectionIds.length > 0) {
            activeSection.value = sectionIds[sectionIds.length - 1];
            return;
        }

        let current = "";
        for (const id of sectionIds) {
            const section = document.getElementById(id);
            if (section) {
                const top = section.offsetTop - 120;
                if (window.scrollY >= top) {
                    current = id;
                }
            }
        }
        activeSection.value = current;
    };

    // Only run on client side
    if (import.meta.client) {
        onMounted(() => {
            if (typeof window === "undefined") return;
            window.addEventListener("scroll", updateActiveSection, { passive: true });
            updateActiveSection();
        });

        onUnmounted(() => {
            if (typeof window === "undefined") return;
            window.removeEventListener("scroll", updateActiveSection);
        });
    }

    return { activeSection };
}
