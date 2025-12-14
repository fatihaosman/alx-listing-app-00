import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;  


// children is a special React prop. It represents whatever content is inside <Layout> when you use it.

// Example from app.tsx:

// <Layout>
//   <Component {...pageProps} />
// </Layout>



// Here:

// <Component {...pageProps} /> is the page you are visiting (e.g., index.tsx)

// That component is passed as children to Layout

// Layout renders it inside <main>:

// Header
// <main>
//   <-- children content goes here (your page) -->
// </main>
// Footer


// So every page automatically gets Header + Footer without you adding them manually to each page. ✅