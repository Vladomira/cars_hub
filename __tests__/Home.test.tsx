import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Home from "@/app/page";

describe("Home", () => {
   it("should contain the text information 'Find, book or rent a car'", async () => {
      await act(async () => {
         render(<Home />);
      });

      const myElement = screen.getByText(/Find, book or rent a car/i);

      expect(myElement).toBeInTheDocument();
   });
   it("should have Explore Cars text", async () => {
      await act(async () => {
         render(<Home />);
      });

      const myElement = screen.getByText("Explore Cars");

      expect(myElement).toBeInTheDocument();
   });

   it("should have a heading", async () => {
      await act(async () => {
         render(<Home />);
      });

      const myElement = screen.getByRole("heading", { name: "Car Catalogue" });

      expect(myElement).toBeInTheDocument();
   });
});
