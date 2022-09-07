import React from "react";
import ReactDOM from "react-dom";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("Emoji Search Tests", () => {
  let header, emojiList, input, emojiContainer;
  beforeEach(() => {
    render(<App />);
    input = screen.getByTestId("search-input");
    emojiContainer = screen.getByTestId("emoji-container");
    emojiList = screen.getAllByText("Click to copy emoji");
  });

  test("Header icinde yer alan baslik sayfada gozukecek", () => {
    header = screen.getByText("Emoji Search");
    expect(header).toBeInTheDocument();
  });

  test("Emoji listesi ilk acilista gozukmeli", () => {
    expect(emojiList.length).toEqual(20);
  });

  test("Inputa girilen degere gore emoji listesi guncellenmeli", () => {
    const query = "Skier";
    fireEvent.change(input, { target: { value: query } });

    expect(screen.getByText(query)).toBeInTheDocument();
  });

  test("Emojinin uzerine basildiginda emoji otomatik olarak kopyalanmali", () => {
    const copyEmoji = emojiList.at(0);
    const parentEl = copyEmoji.parentElement;
    expect(parentEl.getAttribute("data-clipboard-text").length).toBeGreaterThan(
      0
    );
  });
});
