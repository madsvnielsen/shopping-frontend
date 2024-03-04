import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Banner from "../Components/Banner.tsx";



describe(Banner.name, () => {
    it("should render", () => {
        render(<Banner />);
        expect(screen.getByText("Pokemonshop.com")).toBeInTheDocument();
    });
});
