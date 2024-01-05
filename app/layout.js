"use client";
import { LoginProvider } from "./hooks/login";
import "./globals.css";
import Navbar from "./common/navbar/navbar";
import { AuthProvider } from "./hooks/authcard";
import { useAuth } from "./hooks/authcard";
import Login from "./common/login/login";
import Register from "./common/register/register";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <AuthProvider>
          <LoginProvider>
            <ContentWrapper>
              <Navbar />
              {children}
            </ContentWrapper>
          </LoginProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

function ContentWrapper({ children }) {
  const { isLoginOpen, isRegisterOpen } = useAuth();

  return (
    <>
      {isLoginOpen && <Login />}
      {isRegisterOpen && <Register />}
      {children}
    </>
  );
}
