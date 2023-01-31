import { render, screen } from "@testing-library/react";
import App from "./App";

test("test 1...", () => {
    render(<App />);
    screen.getByRole("nav").toBeInTheDocument();
})
/* test("test 2...", () => {
    
}) */