import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import { TrackOrder } from './pages/TrackOrder';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/Dashboard';
import { ManageProducts } from './pages/admin/ManageProducts';
import { AddProduct } from './pages/admin/AddProduct';
import { Categories } from './pages/admin/Categories';
import { Orders } from './pages/admin/Orders';
import { AdminSettings } from './pages/admin/Settings';
import { TagProducts } from './pages/TagProducts';
import { AdminLogin } from './pages/admin/AdminLogin';
import { Auth } from './pages/Auth';
import { MyAccount } from './pages/MyAccount';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Disclaimer } from './pages/Disclaimer';
import { Toaster } from 'sonner';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { GlobalPrompts } from './components/layout/GlobalPrompts';

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>FlipMega | Best Quality at Lowest Price | All-in-One Shopping</title>
        <meta name="description" content="Welcome to FlipMega, your ultimate destination for high-quality electronics, fashion, and home essentials at the lowest prices. Shop now for the best deals in India." />
        <link rel="canonical" href="https://www.flipmega.com/" />
      </Helmet>
      <ThemeProvider>
      <GlobalProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:slug" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/track-order" element={<TrackOrder />} />
                    <Route path="/tag/:tagName" element={<TagProducts />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/account" element={<MyAccount />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    
                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminLayout />}>
                      <Route index element={<AdminDashboard />} />
                      <Route path="products" element={<ManageProducts />} />
                      <Route path="add-product" element={<AddProduct />} />
                      <Route path="edit-product/:id" element={<AddProduct />} />
                      <Route path="categories" element={<Categories />} />
                      <Route path="orders" element={<Orders />} />
                      <Route path="settings" element={<AdminSettings />} />
                    </Route>
                  </Routes>
                </main>
                <Footer />
                <GlobalPrompts />
                <Toaster position="bottom-right" richColors />
              </div>
            </Router>
          </WishlistProvider>
        </CartProvider>
      </GlobalProvider>
    </ThemeProvider>
    </HelmetProvider>
  );
}
