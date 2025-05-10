import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <p>content</p>
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
