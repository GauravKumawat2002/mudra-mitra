export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>this one comes from the layout.tsx of (auth) folder{children}</main>
  );
}
