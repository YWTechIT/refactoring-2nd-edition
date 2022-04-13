import statement from "./statement";
import invoice from "./invoices.json";
import plays from "./plays.json";
import refactorStatement from "./refactor-statement";

describe("리팩토링 전 후 결과 테스트", () => {
  test("origin statement 결과 확인", () => {
    const trimStr = statement(invoice, plays).replace(/\s/g, "");
    const result =
      "청구내역(고객명:BigCo)Hamlet:$650.00(55석)AsYouLikeIt:$580.00(35석)Othello:$500.00(40석)총액:$1,730.00적립포인트:47점";
    expect(trimStr).toBe(result);
  });

  test("refactorStatement 결과 확인", () => {
    const trimStr = refactorStatement(invoice, plays).replace(/\s/g, "");
    const result =
      "청구내역(고객명:BigCo)Hamlet:$650.00(55석)AsYouLikeIt:$580.00(35석)Othello:$500.00(40석)총액:$1,730.00적립포인트:47점";
    expect(trimStr).toBe(result);
  });
});
