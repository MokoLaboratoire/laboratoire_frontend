import { fireEvent, render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import { RouterProvider } from "react-router-dom";
import router from './Router';
import Navigation from "./Navigation";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

test("Test if marker nav is present", () => {
    const { container } = render(
        <RouterProvider router={router}>
            <Navigation />
        </RouterProvider>
    );
    logRoles(container)
    const navigation = screen.getByRole("navigation");
    logRoles(navigation)
    expect(navigation).toBeInTheDocument();
    expect(navigation).toContainHTML('<nav><ul><li><a class="rrd_link" href="/">Home</a></li><li><a class="rrd_link" href="/coding">Coding</a></li><li><a class="rrd_link" href="/contact">Contact</a></li></ul></nav>');
})

test("Test color of home button", () => {
    render(
        <RouterProvider router={router}>
            <Navigation />
        </RouterProvider>
    ); 
    const home_link = screen.getByText("Home");
    expect(home_link).toHaveClass("rrd_link")
    fireEvent.click(home_link);
    expect(home_link).toHaveClass("rrd_link")
})