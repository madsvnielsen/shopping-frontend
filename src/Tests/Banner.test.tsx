import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Banner from "../Components/Banner.tsx";



describe(Banner.name, () => {
    it("should render", () => {
        render(<Banner />);
        expect(screen.getByText("Pokemonshop.com")).toBeInTheDocument();
        const image : HTMLImageElement | null = document.querySelector('img[alt="Pokeball"]');
        expect(image).not.toBeNull();

        if (image) {
            expect(image.src).toContain('/src/assets/pokeball.png');
            expect(image.alt).toBeDefined();
        }
    });
});
