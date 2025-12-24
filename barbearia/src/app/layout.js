import "./globals.css";

export const metadata = {
  title: "Barbearia",
  description: "Página da barbearia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
