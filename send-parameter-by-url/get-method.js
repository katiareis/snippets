/*
Send product name through url using get method to budget/quotation page
initial url: https://domain.com/product/product-name
budget url: https://domain.com/get-a-quotation
final url: https://domain.com/solicite-um-orcamento?product_title=${productTitle}
*/

const isProductPage = window.location.pathname.indexOf("product") !== -1;

if (isProductPage) {
  const productTitle = document
    .querySelector("h2.product_title.entry-title.show-product-nav")
    .textContent.trim();
  const formBudget = document.querySelector("#btn-get-a-quotation a").href;
  document.querySelector("#btn-get-a-quotation a").href =
    formBudget + `?product_title=${productTitle}`;
}

const isBudgetPage = window.location.pathname.indexOf("get-a-quotation") !== -1;

if (isBudgetPage) {
  const urlParams = new URLSearchParams(window.location.search);
  const productTitle = urlParams.get("product_title");
  document.querySelector("#forminator-field-text-1").value = productTitle;
}
