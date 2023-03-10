import React from "react";
import { Link } from "react-router-dom";
import "./mainHeader.scss";
import { CircularProgress, LinearProgress } from "@mui/material";
export const MainHeader = ({ data, repo }) => {
  const [fixed, setFixed] = React.useState(false);
  const [fixed2, setFixed2] = React.useState(false);
  const [checkedSection, setCheckedSection] = React.useState("overview");
  React.useEffect(() => {
    if (window.location.pathname === "/repository") {
      setCheckedSection("repository");
    } else if (window.location.pathname === "/projects") {
      setCheckedSection("projects");
    } else if (window.location.pathname === "/packages") {
      setCheckedSection("packages");
    } else if (window.location.pathname === "/stars") {
      setCheckedSection("stars");
    } else {
      setCheckedSection("sog'_bo'lasla");
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setFixed(true);
      } else if (window.scrollY > 100) {
        setFixed2(true);
      } else {
        setFixed(false);
        setFixed2(false);
      }
    });
    // fill
  });
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180) {
        setFixed2(true);
      } else {
        setFixed2(false);
      }
    });
  });

  return (
    <section
      id={fixed ? "fixed" : fixed2 ? "fixed2" : ""}
      className="mainHeader"
    >
      <div className="container mainHeader__container">
        <nav>
          {fixed ? (
            <div
              style={
                fixed2
                  ? { opacity: "1", zIndex: "333" }
                  : { opacity: "0", zIndex: "-222" }
              }
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  marginLeft: "50px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  {data?.avatar_url ? (
                    <img src={data.avatar_url} alt="profil img" />
                  ) : (
                    <CircularProgress
                      style={{
                        width: "20px",
                        height: "20px",
                        margin: "auto",
                        display: "block",
                      }}
                    />
                  )}
                </div>
                <p
                  style={{
                    fontWeight: "600",
                    lineHeight: "1.25",
                    color: "#c9d1d9",
                  }}
                >
                  {data?.login ? (
                    data.login
                  ) : (
                    // <CircularProgress
                    //   style={{
                    //     width: "10px",
                    //     height: "10px",
                    //     margin: "auto",
                    //     display: "block",
                    // }}
                    <LinearProgress
                      style={{ width: "100px", display: "block" }}
                    />
                    // />
                  )}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}

          <ul className="mainHeader__nav">
            <li
              onClick={() => setCheckedSection("overview")}
              style={
                checkedSection === "overview"
                  ? { borderBottom: "3px solid #B56150" }
                  : { borderBottom: "3px solid transparent" }
              }
            >
              <Link
                to="/odilbekl/"
                style={
                  checkedSection === "overview"
                    ? {
                        backgroundColor: "transparent",
                      }
                    : {}
                }
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                  ></path>
                </svg>
                <p>Overview</p>
              </Link>
            </li>
            <li
              onClick={() => setCheckedSection("repository")}
              style={
                checkedSection === "repository"
                  ? {
                      borderBottom: "3px solid #B56150",
                    }
                  : { borderBottom: "3px solid transparent" }
              }
            >
              <Link
                to="/odilbekl/repository"
                style={
                  checkedSection === "repository"
                    ? {
                        backgroundColor: "transparent",
                      }
                    : {}
                }
              >
                {" "}
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  dataViewComponent="true"
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  ></path>
                </svg>
                <p>
                  Repositories
                  <span
                    style={{
                      backgroundColor: "#6e768166",
                      color: "#c9d1d9",
                      borderRadius: "200px",
                      height: "14px",
                      padding: "0px 10px",
                      marginLeft: "7px",
                    }}
                  >
                    {repo?.length ? (
                      repo.length
                    ) : (
                      <CircularProgress
                        style={{ width: "10px", height: "10px" }}
                      />
                    )}
                  </span>
                </p>
              </Link>
            </li>
            <li
              onClick={() => setCheckedSection("projects")}
              style={
                checkedSection === "projects"
                  ? {
                      borderBottom: "3px solid #B56150",
                    }
                  : { borderBottom: "3px solid transparent" }
              }
            >
              <Link
                to="/odilbekl/projects"
                style={
                  checkedSection === "projects"
                    ? {
                        backgroundColor: "transparent",
                      }
                    : {}
                }
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
                  ></path>
                </svg>
                <p>Projects</p>
              </Link>
            </li>
            <li
              onClick={() => setCheckedSection("packages")}
              style={
                checkedSection === "packages"
                  ? {
                      borderBottom: "3px solid #B56150",
                    }
                  : { borderBottom: "3px solid transparent" }
              }
            >
              <Link
                to="/odilbekl/packages"
                style={
                  checkedSection === "packages"
                    ? {
                        backgroundColor: "transparent",
                      }
                    : {}
                }
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"
                  ></path>
                </svg>
                <p>Packages</p>
              </Link>
            </li>
            <li
              onClick={() => setCheckedSection("stars")}
              style={
                checkedSection === "stars"
                  ? {
                      borderBottom: "3px solid #B56150",
                    }
                  : { borderBottom: "3px solid transparent" }
              }
            >
              <Link
                to="/odilbekl/stars"
                style={
                  checkedSection === "stars"
                    ? {
                        backgroundColor: "transparent",
                      }
                    : {}
                }
              >
                <svg
                  ariaHidden="true"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  className="overview-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
                <p>Stars</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
