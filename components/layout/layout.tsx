import Script from "next/script";

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
      <Script src="/assets/vendors/popper.min.js" defer />
      <Script src="/assets/vendors/bootstrap.min.js" defer />
      <Script src="/assets/js/nifty.js" defer />
      <Script src="/assets/vendors/mdDateTimePicker.min.js" defer />
    </>
  );
}

export default Layout;
