/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Pruebas en <GifGridItem/>", () => {
  const title = "One Punch Man GIF";
  const url = "https://one-punch.com/saitama.jpg";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifGridItem title={title} url={url} />);
    //screen.debug()
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifGridItem title={title} url={url} />);
    //screen.debug()

    expect(screen.getByText(title)).toBeTruthy();
  });
});
