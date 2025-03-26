import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve inserir 2 comentarios", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("textarea-teste"), {
      target: {
        value: "Inserindo o primeiro comentario",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario-teste"));

    fireEvent.change(screen.getByTestId("textarea-teste"), {
      target: {
        value: "Inserindo o segundo comentario",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario-teste"));

    expect(screen.getAllByTestId("lista-teste")).toHaveLength(2);
  });
});
