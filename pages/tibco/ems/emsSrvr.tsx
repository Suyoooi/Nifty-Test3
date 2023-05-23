export default function EmsSrvr() {
  return (
    <>
      <section id="content" className="content">
        <div className="content__header content__boxed overlapping">
          <div className="content__wrap">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="./index.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  EMS 서버 관리
                </li>
              </ol>
            </nav>

            <h1 className="page-title mb-0 mt-2">EMS 서버 관리</h1>

            <p className="lead"></p>
          </div>
        </div>

        <div className="content__boxed">
          <div className="content__wrap">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Your content here</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  natus temporibus voluptate corporis possimus ab aut cumque.
                </p>
                <div className="d-flex mt-4 gap-3">
                  <button className="btn btn-lg btn-light" type="button">
                    Back
                  </button>
                  <div className="bg-[#515560] rounded-lg ">
                    <a className="btn btn-lg" href="./index.html">
                      Homepage
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <article className="d-md-flex gap-4">
              <div className="flex-fill">
                <section id="navigation-tips" className="card mb-4">
                  <div className="card-body">
                    <h4 className="px-2 mb-3">Navigation</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="w-400px">
                              Max navigation by default
                            </td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .mn--max
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>Min navigation by default</td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .mn--min
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>
                              OffCanvas navigation with{" "}
                              <h6 className="d-inline-block">PUSH</h6> mode by
                              default
                            </td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .mn--push
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>
                              OffCanvas navigation with{" "}
                              <h6 className="d-inline-block">SLIDE</h6> mode by
                              default
                            </td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .mn--slide
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>
                              OffCanvas navigation with{" "}
                              <h6 className="d-inline-block">REVEAL</h6> mode by
                              default
                            </td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .mn--slide
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>Sticky navigation</td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .mn--sticky
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>Create a ToggleButton for navigation</td>
                            <td>
                              <p>
                                Add a className{" "}
                                <code className="bg-gray-300 px-2 py-1 rounded">
                                  .nav-toggler
                                </code>{" "}
                                to the button.
                              </p>
                              <p>Example :</p>
                              <button className="btn btn-lg btn-primary nav-toggler">
                                Toggle Navigation
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="sidebar-tips" className="card mb-4">
                  <div className="card-body">
                    <h4 className="px-2 mb-3">Sidebar</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="w-400px">
                              Disable sidebar backdrop
                            </td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .sb--bd-0
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>Static position</td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .sb--static
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>Stuck sidebar as the default mode</td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .sb--stuck
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>Unite sidebar as the default mode</td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .sb--unite
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>Pinned sidebar as the default mode</td>
                            <td>
                              Add a className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .sb--pinned
                              </code>{" "}
                              to the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>Toggle visibility</td>
                            <td>
                              Toggle the className{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .sb--show
                              </code>{" "}
                              in the{" "}
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                #root
                              </code>
                              .
                            </td>
                          </tr>
                          <tr>
                            <td>Create a ToggleButton for Sidebar</td>
                            <td>
                              <p>
                                Add a className{" "}
                                <code className="bg-gray-300 px-2 py-1 rounded">
                                  .sidebar-toggler
                                </code>{" "}
                                to the button.
                              </p>
                              <p>Example :</p>
                              <button className="btn btn-lg btn-primary sidebar-toggler">
                                Toggle Sidebar
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="animations-tips" className="card mb-4">
                  <div className="card-body">
                    <h4 className="px-2 mb-3">Animations</h4>
                    <p className="px-2">
                      Add the following className to the{" "}
                      <code className="bg-gray-300 px-2 py-1 rounded">
                        body
                      </code>{" "}
                      to change the animation transition.
                    </p>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th style={{ width: "250px" }}>
                              Transition function name
                            </th>
                            <th>className name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>In Quart</td>
                            <td>
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .in-quart
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td>Out Quart</td>
                            <td>
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .out-quart
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td>In Back</td>
                            <td>
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .in-back
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td>Out Back</td>
                            <td>
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .out-back
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td>In Out Back</td>
                            <td>
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .in-out-back
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td>easeInOutBack</td>
                            <td>
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .easeInOutBack
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td>steps</td>
                            <td>
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .steps
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td>jumping</td>
                            <td>
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .jumping
                              </code>
                            </td>
                          </tr>
                          <tr>
                            <td>rubber</td>
                            <td>
                              <code className="bg-gray-300 px-2 py-1 rounded">
                                .rubber
                              </code>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
              <div className="w-md-160px w-xl-250px flex-shrink-0">
                <div className="card position-sticky" style={{ top: "1rem" }}>
                  <div className="card-body">
                    <h5>Tips on this page : </h5>
                    <nav className="nav flex-column">
                      <a className="nav-link px-0" href="#boxed-layout-tips">
                        Boxed layout
                      </a>
                      <a className="nav-link px-0" href="#color-schemes-tips">
                        Color Scemes
                      </a>
                      <a className="nav-link px-0" href="#header-tips">
                        Header
                      </a>
                      <a className="nav-link px-0" href="#navigation-tips">
                        Navigation
                      </a>
                      <a className="nav-link px-0" href="#sidebar-tips">
                        Sidebar
                      </a>
                      <a className="nav-link px-0" href="#animations-tips">
                        Animations
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* <!-- FOOTER --> */}
        <footer className="mt-auto">
          <div className="content__boxed">
            <div className="content__wrap py-3 py-md-1 d-flex flex-column flex-md-row align-items-md-center">
              <div className="text-nowrap mb-4 mb-md-0">
                Copyright &copy; 2022{" "}
                <a href="#" className="ms-1 btn-link fw-bold">
                  My Company
                </a>
              </div>
              <nav
                className="nav flex-column gap-1 flex-md-row gap-md-3 ms-md-auto"
                style={{ rowGap: "0 !important" }}
              >
                <a className="nav-link px-0" href="#">
                  Policy Privacy
                </a>
                <a className="nav-link px-0" href="#">
                  Terms and conditions
                </a>
                <a className="nav-link px-0" href="#">
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </footer>
        {/* <!-- END - FOOTER --> */}
      </section>
    </>
  );
}
