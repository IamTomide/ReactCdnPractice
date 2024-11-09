function App() {
  return (
    <main className="wrapper">
      <AppHeader />
      <Navbar />
      <MainContent />
      <AppFooter />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
