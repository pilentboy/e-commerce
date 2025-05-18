import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("auth", "routes/auth.tsx"),
  route("about-us", "routes/aboutus.tsx"),
  route("contact-us", "routes/contactus.tsx"),
  route("blog", "routes/blog.tsx"),
  route("categories/:category", "routes/categories.tsx"),
  route("products", "routes/products.tsx"),
  route("product/:product_id", "routes/product.tsx"),
  route("best_sales", "routes/bestSales.tsx"),

  route("/auth/login", "routes/login.tsx"),
  route("/auth/register", "routes/register.tsx"),
  route("/auth/reset_password", "routes/resetPassword.tsx"),
] satisfies RouteConfig;
