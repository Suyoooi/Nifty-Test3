import Header from "../header";
import Sidebar from "../sidebar";

function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      {/*PAGE CONTAINER */}
      <div id="root" className="root mn--max hd--expanded">
        {/* content */}
        <section id="content" className="content">
          {props.children}
        </section>
        <Header />
        <Sidebar />
      </div>
      <script src="/assets/vendors/popper.min.js" defer></script>
      <script src="/assets/vendors/bootstrap.min.js" defer></script>
      <script src="/assets/js/nifty.js" defer></script>
      <script src="/assets/vendors/mdDateTimePicker.min.js" defer></script>
    </>
  );
}

export default Layout;
