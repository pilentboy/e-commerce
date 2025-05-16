import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }

  interface Future {
    unstable_middleware: false
  }
}

type Params = {
  "/": {};
  "/auth": {};
  "/about-us": {};
  "/contact-us": {};
  "/blog": {};
  "/categories/:category": {
    "category": string;
  };
  "/products": {};
  "/product/:product_id": {
    "product_id": string;
  };
  "/best_sales": {};
  "/auth/login": {};
  "/auth/register": {};
};