// !INFO: Add main content on load
document.addEventListener("DOMContentLoaded", () => changeContent("dashboard"));

// !INFO: handle packages
document.addEventListener("click", () => {
    const packs = document.querySelectorAll(".packages .package");
    if (packs.length > 0) {
        packs.forEach((pack) => {
            pack.addEventListener("click", () => {
                packs.forEach((pack) => {
                    pack.classList.remove("selected");
                });
                pack.classList.add("selected");
            });
        });
    }
});

// !INFO: Make the loading choosing the current page from Lis
const tabs = document.querySelectorAll(".sidebar li");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        const title = tab.dataset.content;
        changeContent(title);
    });
    // console.log(tab.dataset.content.toLowerCase(), pageName);
});

function changeContent(title) {
    const main = document.querySelector("#dyn-content");
    const h3 = document.querySelector(".content h3");
    document.title = `${title.slice(0, 1).toUpperCase()}${title.slice(
        1
    )} | Page`;
    h3.innerHTML = `${title.slice(0, 1).toUpperCase()}${title.slice(1)}`;

    main.innerHTML = window[title];
    window.scrollTo(0, 0);
}

// !INFO: Content section

window.dashboard = `<div class="row gap-3 mt-4 mx-1 quick-intro">
                            <div class="col-lg col-12 bg-white rounded p-3 pb-0">
                                <div class="welcome mb-3 my-4">
                                    <h5>Welcome</h5>
                                    <p class="text-muted">Abdulrahman</p>
                                </div>
                                <div
                                    class="stats d-flex justify-content-between text-center bg-e p-3 rounded my-4"
                                >
                                    <div class="col-3">
                                        <h5 class="fs-6">Abdulrahman</h5>
                                        <p class="text-muted">Developer</p>
                                    </div>
                                    <div class="col-3">
                                        <h5 class="fs-6">Projects</h5>
                                        <p class="text-muted">48</p>
                                    </div>
                                    <div class="col-3">
                                        <h5 class="fs-6">Earned</h5>
                                        <p class="text-muted">$500</p>
                                    </div>
                                </div>
                                <div class="badge-place text-end my-4">
                                    <span
                                        href="profile.html"
                                        class="btn btn-sm btn-primary py-1 p-2 px-3"
                                        >Profile</
                                    >
                                </div>
                            </div>
                            <div class="col-lg col-12 bg-white rounded p-3">
                                <h5>Quick Draft</h5>
                                <p class="text-muted">
                                    Write A Draft For Your Ideas
                                </p>
                        
                                <div
                                    class="quick-feedback d-flex flex-column gap-2"
                                >
                                    <input
                                        type="text"
                                        name="feedback"
                                        id="feedback"
                                        placeholder="Title"
                                    />
                                    <textarea
                                        name="draft"
                                        id="opinion"
                                        cols="30"
                                        rows="5"
                                        placeholder="Write your Thought here..."
                                    ></textarea>
                                </div>
                                <div class="text-end my-2">
                                    <button
                                        class="btn btn-sm btn-primary px-3 px-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row gap-3 mt-4 mx-1">
                            <div class="col-lg col-12 bg-white rounded-3 p-3">
                                <h5>Yearly Targets</h5>
                                <p class="text-muted">Targets Of The Year</p>
                        
                                <div class="targets d-flex flex-column gap-3">
                                    <div class="col-12 target row">
                                        <div class="col-2 text-primary fs-2 ms-4">
                                            <i class="fas fa-dollar-sign fa-fw"></i>
                                        </div>
                                        <div
                                            class="col-9 target-details position-relative flex-grow-1"
                                        >
                                            <p class="text-muted mb-1">Money</p>
                                            <h6>$20.00</h6>
                                            <div class="progress">
                                                <span
                                                    role="progressbar"
                                                    class="progress-bar progress-bar-striped text-center fw-semibold text-black"
                                                    style="width: 70%"
                                                    >67%</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 target row">
                                        <div
                                            class="col-2 text-primary fs-2 ms-4"
                                            style="background-color: #fdecce"
                                        >
                                            <i
                                                class="fas fa-code fa-fw"
                                                style="color: #f59e0b"
                                            ></i>
                                        </div>
                                        <div
                                            class="col-9 target-details flex-grow-1"
                                        >
                                            <p class="text-muted mb-1">Projects</p>
                                            <h6>24</h6>
                                            <div class="progress">
                                                <span
                                                    role="progressbar"
                                                    class="progress-bar progress-bar-striped text-center fw-semibold text-black"
                                                    style="
                                                        width: 50%;
                                                        background-color: #f59e0b;
                                                    "
                                                    >50%</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 target row">
                                        <div
                                            class="col-2 text-primary fs-2 ms-4"
                                            style="background-color: #d3f3df"
                                        >
                                            <i
                                                class="fas fa-user fa-fw"
                                                style="color: #22c55e"
                                            ></i>
                                        </div>
                                        <div
                                            class="col-9 target-details flex-grow-1"
                                        >
                                            <p class="text-muted mb-1">Team</p>
                                            <h6>12</h6>
                                            <div class="progress">
                                                <span
                                                    role="progressbar"
                                                    class="progress-bar progress-bar-striped text-center fw-semibold text-black"
                                                    style="
                                                        width: 85%;
                                                        background-color: #22c55e;
                                                    "
                                                    >85%</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg col-12 bg-white rounded-3 p-3">
                                <h5>Tickets Statistics</h5>
                                <p class="text-muted">
                                    Everything About Support Tickets
                                </p>
                                <div
                                    class="row tickets gap-3 justify-content-evenly align-items-center"
                                >
                                    <div
                                        class="col-5 border d-flex flex-column align-items-center justify-content-center py-2 gap-1 rounded-3"
                                    >
                                        <i
                                            class="fas fa-list-ul fa-fw fs-4 my-2"
                                            style="color: #f59e0b"
                                        ></i>
                                        <h5>2500</h5>
                                        <p class="text-muted">Total</p>
                                    </div>
                                    <div
                                        class="col-5 border d-flex flex-column align-items-center justify-content-center py-2 gap-1 rounded-3"
                                    >
                                        <i
                                            class="fas fa-spinner fa-fw fs-4 my-2"
                                            style="color: #0d6efd"
                                        ></i>
                                        <h5>500</h5>
                                        <p class="text-muted">Pending</p>
                                    </div>
                                    <div
                                        class="col-5 border d-flex flex-column align-items-center justify-content-center py-2 gap-1 rounded-3"
                                    >
                                        <i
                                            class="fa-regular fa-circle-check fa-fw fs-4 my-2 text-success"
                                        ></i>
                                        <h5>1900</h5>
                                        <p class="text-muted">Closed</p>
                                    </div>
                                    <div
                                        class="col-5 border d-flex flex-column align-items-center justify-content-center py-2 gap-1 rounded-3"
                                    >
                                        <i
                                            class="fa-regular fa-rectangle-xmark fa-fw fs-4 my-2 text-danger"
                                        ></i>
                                        <h5>90</h5>
                                        <p class="text-muted">Deleted</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gap-3 mt-4 mx-1">
                            <div class="col-lg col-12 bg-white rounded-3 p-3 news">
                                <h5 class="fs-4 mb-3">Latest News</h5>
                                <div
                                    class="mb-1 row justify-content-center align-items-center gap-2"
                                >
                                    <div class="col">
                                        <div class="text-center">
                                            <img
                                                src="images/news-01.png"
                                                alt=""
                                                class="w-75 rounded"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-5 mt-3 px-0">
                                        <h5 class="fs-6">Created SASS Section</h5>
                                        <p class="text-muted">
                                            New SASS Examples & Tutorials
                                        </p>
                                    </div>
                                    <div class="col align-content-center">
                                        <p
                                            class="bg-secondary-subtle rounded text-center py-1 px-2 text-body-emphasis"
                                        >
                                            3 Days Ago
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div
                                    class="mb-1 row justify-content-center align-items-center gap-2"
                                >
                                    <div class="col">
                                        <div class="text-center">
                                            <img
                                                src="images/news-02.png"
                                                alt=""
                                                class="w-75 rounded"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-5 mt-3 px-0">
                                        <h5 class="fs-6">Changed The Design</h5>
                                        <p class="text-muted">
                                            A Brand New Website Design
                                        </p>
                                    </div>
                                    <div class="col align-content-center">
                                        <p
                                            class="bg-secondary-subtle rounded text-center py-1 px-2 text-body-emphasis"
                                        >
                                            3 Days Ago
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div
                                    class="mb-1 row justify-content-center align-items-center gap-2"
                                >
                                    <div class="col">
                                        <div class="text-center">
                                            <img
                                                src="images/news-03.png"
                                                alt=""
                                                class="w-75 rounded"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-5 mt-3 px-0">
                                        <h5 class="fs-6">Team Increased</h5>
                                        <p class="text-muted">
                                            3 Developers Joined The Team
                                        </p>
                                    </div>
                                    <div class="col align-content-center">
                                        <p
                                            class="bg-secondary-subtle rounded text-center py-1 px-2 text-body-emphasis"
                                        >
                                            3 Days Ago
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div
                                    class="mb-1 row justify-content-center align-items-center gap-2"
                                >
                                    <div class="col">
                                        <div class="text-center">
                                            <img
                                                src="images/news-04.png"
                                                alt=""
                                                class="w-75 rounded"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-5 mt-3 px-0">
                                        <h5 class="fs-6">Added Payment Gateway</h5>
                                        <p class="text-muted">
                                            Many New Payment Gateways Added
                                        </p>
                                    </div>
                                    <div class="col align-content-center">
                                        <p
                                            class="bg-secondary-subtle rounded text-center py-1 px-2 text-body-emphasis"
                                        >
                                            3 Days Ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg col-12 bg-white rounded-3 p-3 tasks">
                                <h5 class="fs-4 mb-3">Latest Tasks</h5>
                                <div class="row">
                                    <div class="col-12 task">
                                        <div
                                            class="row mb-1 justify-content-between align-items-center"
                                        >
                                            <div class="col-11 mb-2 pt-2">
                                                <h5 class="fs-6">
                                                    Record One New Video
                                                </h5>
                                                <p class="text-muted">
                                                    Record Python Create Exe Project
                                                </p>
                                            </div>
                                            <div class="delete col-1 pe-2">
                                                <i
                                                    class="fa-regular fa-trash-can fa-fw fs-5"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-12 task">
                                        <div
                                            class="row mb-1 justify-content-between align-items-center"
                                        >
                                            <div class="col-11 mb-2 pt-2">
                                                <h5 class="fs-6">Write Article</h5>
                                                <p class="text-muted">
                                                    Write Low Level vs High Level
                                                    Languages
                                                </p>
                                            </div>
                                            <div class="delete col-1 pe-2">
                                                <i
                                                    class="fa-regular fa-trash-can fa-fw fs-5"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-12 task">
                                        <div
                                            class="row mb-1 justify-content-between align-items-center"
                                        >
                                            <div class="col-11 mb-2 pt-2">
                                                <h5 class="fs-6">Finish Project</h5>
                                                <p class="text-muted">
                                                    Publish Academy Programming
                                                    Project
                                                </p>
                                            </div>
                                            <div class="delete col-1 pe-2">
                                                <i
                                                    class="fa-regular fa-trash-can fa-fw fs-5"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-12 task done">
                                        <div
                                            class="row mb-1 justify-content-between align-items-center"
                                        >
                                            <div class="col-11 mb-2 pt-2">
                                                <h5 class="fs-6">
                                                    Attend The Meeting
                                                </h5>
                                                <p class="text-muted">
                                                    Attend The Project Business
                                                    Analysis Meeting
                                                </p>
                                            </div>
                                            <div class="delete col-1 pe-2">
                                                <i
                                                    class="fa-regular fa-trash-can fa-fw fs-5"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gap-3 mt-4 mx-1">
                            <div class="col-lg col-12 bg-white rounded-3 p-3">
                                <h5>Top Search Items</h5>
                                <div
                                    class="search-result mt-2 d-flex justify-content-between"
                                >
                                    <p
                                        class="text-muted fs-6 fw-semibold text-black-50"
                                    >
                                        Keyword
                                    </p>
                                    <p
                                        class="text-muted fs-6 fw-semibold text-black-50"
                                    >
                                        Count
                                    </p>
                                </div>
                                <div
                                    class="search-result my-2 d-flex justify-content-between"
                                >
                                    <p class="fw-semibold fs-6 text-black">
                                        Programming
                                    </p>
                                    <p
                                        class="px-2 py-1 rounded bg-secondary-subtle"
                                    >
                                        220
                                    </p>
                                </div>
                                <div
                                    class="search-result my-2 d-flex justify-content-between"
                                >
                                    <p class="fw-semibold fs-6 text-black">
                                        JavaScript
                                    </p>
                                    <p
                                        class="px-2 py-1 rounded bg-secondary-subtle"
                                    >
                                        200
                                    </p>
                                </div>
                                <div
                                    class="search-result my-2 d-flex justify-content-between"
                                >
                                    <p class="fw-semibold fs-6 text-black">
                                        Node.JS
                                    </p>
                                    <p
                                        class="px-2 py-1 rounded bg-secondary-subtle"
                                    >
                                        180
                                    </p>
                                </div>
                                <div
                                    class="search-result my-2 d-flex justify-content-between"
                                >
                                    <p class="fw-semibold fs-6 text-black">CSS</p>
                                    <p
                                        class="px-2 py-1 rounded bg-secondary-subtle"
                                    >
                                        150
                                    </p>
                                </div>
                                <div
                                    class="search-result my-2 d-flex justify-content-between"
                                >
                                    <p class="fw-semibold fs-6 text-black">HTML</p>
                                    <p
                                        class="px-2 py-1 rounded bg-secondary-subtle"
                                    >
                                        110
                                    </p>
                                </div>
                                <div
                                    class="search-result my-2 d-flex justify-content-between"
                                >
                                    <p class="fw-semibold fs-6 text-black">PHP</p>
                                    <p
                                        class="px-2 py-1 rounded bg-secondary-subtle"
                                    >
                                        69
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg col-12 bg-white rounded-3 p-3">
                                <h5>Latest Uploads</h5>
                                <div
                                    class="upload d-flex justify-content-between align-items-center border-bottom pb-2"
                                >
                                    <div
                                        class="d-flex h-100 gap-3 align-items-center"
                                    >
                                        <img
                                            src="images/pdf.svg"
                                            alt=""
                                            class="h-75"
                                        />
                                        <div>
                                            <p class="fw-medium mt-2 mb-0">
                                                my-file.pdf
                                            </p>
                                            <p class="text-muted">El-zero</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            class="bg-secondary-subtle rounded px-2 py-1"
                                        >
                                            2.9MB
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="upload d-flex justify-content-between align-items-center border-bottom pb-2"
                                >
                                    <div
                                        class="d-flex h-100 gap-3 align-items-center"
                                    >
                                        <img
                                            src="images/psd.svg"
                                            alt=""
                                            class="h-75"
                                        />
                                        <div>
                                            <p class="fw-medium mt-2 mb-0">
                                                My-Psd-File.pdf
                                            </p>
                                            <p class="text-muted">Abdulrahman</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            class="bg-secondary-subtle rounded px-2 py-1"
                                        >
                                            4.9MB
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="upload d-flex justify-content-between align-items-center border-bottom pb-2"
                                >
                                    <div
                                        class="d-flex h-100 gap-3 align-items-center"
                                    >
                                        <img
                                            src="images/zip.svg"
                                            alt=""
                                            class="h-75"
                                        />
                                        <div>
                                            <p class="fw-medium mt-2 mb-0">
                                                My-Zip-File.pdf
                                            </p>
                                            <p class="text-muted">User</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            class="bg-secondary-subtle rounded px-2 py-1"
                                        >
                                            5.4MB
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="upload d-flex justify-content-between align-items-center border-bottom pb-2"
                                >
                                    <div
                                        class="d-flex h-100 gap-3 align-items-center"
                                    >
                                        <img
                                            src="images/dll.svg"
                                            alt=""
                                            class="h-75"
                                        />
                                        <div>
                                            <p class="fw-medium mt-2 mb-0">
                                                My-DLL-File.pdf
                                            </p>
                                            <p class="text-muted">Admin</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            class="bg-secondary-subtle rounded px-2 py-1"
                                        >
                                            3.7MB
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="upload d-flex justify-content-between align-items-center pb-2"
                                >
                                    <div
                                        class="d-flex h-100 gap-3 align-items-center"
                                    >
                                        <img
                                            src="images/eps.svg"
                                            alt=""
                                            class="h-75"
                                        />
                                        <div>
                                            <p class="fw-medium mt-2 mb-0">
                                                My-Eps-File.pdf
                                            </p>
                                            <p class="text-muted">Designer</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            class="bg-secondary-subtle rounded px-2 py-1"
                                        >
                                            1.7MB
                                        </p>
                                    </div>
                                </div>
                            </div>
</div>`;
window.setting = `<div class="mt-2">
  <div class="row row-cols-1 row-cols-lg-2 g-3 mt-2">
    <div class="col setting">
      <div class="bg-white rounded p-3 w-100 h-100 d-flex flex-column">
        <h5 class="fs-4">Site Control</h5>
        <p class="text-muted fw-semibold">Control The Website If There Is Maintenance</p>
        <div class="row justify-content-between align-items-center mb-2">
          <div class="col-8">
            <p class="m-0 mt-2 fw-semibold fs-6">Website Control</p>
            <p class="text-muted">Open/Close Website And Type The Reason</p>
          </div>
          <div class="col text-end">
            <label>
              <input type="checkbox" class="toggle-checkbox d-none">
              <div class="toggle-switch"></div>
            </label>
          </div>
        </div>
        <div class="mt-auto">
          <textarea rows="5" placeholder="Close Message Content..."></textarea>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="bg-white rounded p-3 w-100 h-100 d-flex flex-column">
        <h5 class="fs-4">Site Control</h5>
        <p class="text-muted fw-semibold">Control The Website If There Is Maintenance</p>
        <div class="inputs">
          <div class="mb-3 d-flex flex-column gap-2">
            <label for="FirstName">First Name</label>
            <input class="" type="text" id="FirstName" placeholder="First Name...">
          </div>
          <div class="mb-3 d-flex flex-column gap-2">
            <label for="LastName">Last Name</label>
            <input class="" type="text" id="LastName" placeholder="Last Name...">
          </div>
          <div class="mb-3 d-flex justify-content-between align-items-center">
            <div class="w-75 d-flex flex-column gap-2">
              <label for="Email">E-Mail</label>
              <input type="text" id="Email" placeholder="E-Mail..." disabled>
            </div>
            <span class="text-primary cursor-pointer">Change</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-lg-2 g-3 mt-4">
    <div class="col">
      <div class="bg-white rounded p-3 w-100 h-100 d-flex flex-column">
        <h5 class="fs-4">Security Info</h5>
        <p class="text-muted fw-semibold">Security Information About Your Account</p>
        <div class="d-flex justify-content-between mb-3 align-items-center">
          <div>
            <p class="m-0 mt-2 fw-semibold fs-6">Password</p>
            <p class="text-muted">Last Change On 25/10/2021</p>
          </div>
          <button class="btn btn-primary btn-sm">Change</button>
        </div>
        <div class="d-flex justify-content-between mb-3 align-items-center">
          <div>
            <p class="m-0 mt-2 fw-semibold fs-6">Two-Factor Authentication</p>
            <p class="text-muted">Enable/Disable The Feature</p>
          </div>
          <label>
            <input type="checkbox" class="toggle-checkbox d-none">
            <div class="toggle-switch"></div>
          </label>
        </div>
        <div class="d-flex justify-content-between mb-3 align-items-center">
          <div>
            <p class="m-0 mt-2 fw-semibold fs-6">Devices</p>
            <p class="text-muted">Check The Login Devices List</p>
          </div>
          <span class="bg-light border rounded px-2 py-1 pointer">Devices</span>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="bg-white rounded p-3 w-100 h-100 d-flex flex-column">
        <h5 class="fs-4">Backup Manager</h5>
        <p class="text-muted fw-semibold">Control Backup Time And Location</p>
        <div class="d-flex flex-column gap-3 fs-5 backup px-3">
          <div>
            <input class="me-2" type="radio" name="backup" id="daily">
            <label for="daily">Daily</label>
          </div>
          <div>
            <input class="me-2" type="radio" name="backup" id="monthly" checked>
            <label for="monthly">Monthly</label>
          </div>
          <div>
            <input class="me-2" type="radio" name="backup" id="weekly">
            <label for="weekly">Weekly</label>
          </div>
          <hr class="m-1 my-2">
        </div>
        <div class="packages mt-2">
          <div class="row gap-3 justify-content-center align-items-center">
            <button class="package bg-transparent col-3 rounded d-flex flex-column justify-content-center align-items-center gap-2 fs-5 p-3 pointer">
              <i class="fas fa-server fa-fw fs-6"></i> <span>Mega</span>
            </button>
            <button class="package selected bg-transparent col-3 rounded d-flex flex-column justify-content-center align-items-center gap-2 fs-5 p-3 pointer">
              <i class="fas fa-hard-drive fa-fw fs-6"></i> <span>Regular</span>
            </button>
            <button class="package bg-transparent col-3 rounded d-flex flex-column justify-content-center align-items-center gap-2 fs-5 p-3 pointer">
              <i class="fas fa-database fa-fw fs-6"></i> <span>Sigma</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
window.profile = `<div class="row gap-3 mt-4 bg-white rounded p-3 mx-0">
                            <div
                                class="col-lg-2 profile-overview d-flex flex-column justify-content-center align-items-center gap-3"
                            >
                                <div
                                    class="col my-2 text-center d-flex flex-column align-items-center justify-content-center gap-4"
                                >
                                    <img
                                        class="rounded-circle"
                                        src="images/user.jpg"
                                        alt=""
                                    />
                                    <div>
                                        <h6 class="fw-semibold fs-5 mb-0">
                                            Abdulrahman
                                        </h6>
                                        <p class="text-muted mb-0">Lvl: 20</p>
                                    </div>
                                    <div
                                        class="d-flex flex-column align-items-center justify-content-center gap-2"
                                    >
                                        <div
                                            class="col progress w-100"
                                            style="max-height: 10px"
                                        >
                                            <span
                                                style="height: 10px"
                                                class="progress-bar progress bg-primary w-75"
                                            ></span>
                                        </div>
                                        <div
                                            class="col stars text-warning flex-grow-0"
                                        >
                                            <i class="fas fa-star fa-fw"></i>
                                            <i class="fas fa-star fa-fw"></i>
                                            <i class="fas fa-star fa-fw"></i>
                                            <i class="fas fa-star fa-fw"></i>
                                            <i class="fas fa-star fa-fw"></i>
                                        </div>
                                        <p class="text-muted text-black-50">
                                            550 Rating
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-lg-8 information d-flex flex-column justify-content-start gap-3 py-2 align-items-center flex-grow-1"
                            >
                                <div
                                    class="col-3 gap-sm-0 gap-3 w-100 info-row position-relative row"
                                >
                                    <div
                                        class="col-sm-4 d-sm-flex text-center flex-column"
                                    >
                                        <p
                                            class="text-muted text-black-50 my-1"
                                        >
                                            General Information
                                        </p>
                                        <p class="text-muted text-black-50">
                                            Full Name <b>Abdulrahman Saad</b>
                                        </p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked
                                                class="toggle-checkbox d-none"
                                            />
                                            <div class="toggle-switch"></div>
                                        </label>
                                    </div>
                                    <div
                                        class="col-sm-4 d-sm-flex text-center justify-content-center align-items-center"
                                    >
                                        <p
                                            class="text-muted text-black-50 mb-0"
                                        >
                                            Gender: <b>Male</b>
                                        </p>
                                    </div>
                                    <div
                                        class="col-sm-4 d-sm-flex text-center justify-content-center align-items-center"
                                    >
                                        <p
                                            class="text-muted text-black-50 mb-0"
                                        >
                                            Country: <b>Egypt</b>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-3 gap-sm-0 gap-3 w-100 info-row position-relative row"
                                >
                                    <div
                                        class="col-sm-4 d-sm-flex text-center flex-column"
                                    >
                                        <p
                                            class="text-muted text-black-50 my-1"
                                        >
                                            Personal Information
                                        </p>
                                        <p class="text-muted text-black-50">
                                            E-Mail <b>o@nn.sa Saad</b>
                                        </p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                class="toggle-checkbox d-none"
                                            />
                                            <div class="toggle-switch"></div>
                                        </label>
                                    </div>
                                    <div
                                        class="col-sm-4 d-sm-flex text-center justify-content-center align-items-center"
                                    >
                                        <p
                                            class="text-muted text-black-50 mb-0"
                                        >
                                            Phone: <b>019123456789</b>
                                        </p>
                                    </div>
                                    <div
                                        class="col-sm-4 d-sm-flex text-center justify-content-center align-items-center"
                                    >
                                        <p
                                            class="text-muted text-black-50 mb-0"
                                        >
                                            Date Of Birth: <b> 25/10/1982</b>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-3 gap-sm-0 gap-3 w-100 info-row position-relative row"
                                >
                                    <div
                                        class="col-sm-4 d-sm-flex text-center flex-column"
                                    >
                                        <p
                                            class="text-muted text-black-50 my-1"
                                        >
                                            Job Information
                                        </p>
                                        <p class="text-muted text-black-50">
                                            Title <b>MERNStack Developer</b>
                                        </p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked
                                                class="toggle-checkbox d-none"
                                            />
                                            <div class="toggle-switch"></div>
                                        </label>
                                    </div>
                                    <div
                                        class="col-sm-4 d-sm-flex text-center justify-content-center align-items-center"
                                    >
                                        <p
                                            class="text-muted text-black-50 mb-0"
                                        >
                                            Programming Language:
                                            <b>JavaScript</b>
                                        </p>
                                    </div>
                                    <div
                                        class="col-sm-4 d-sm-flex text-center justify-content-center align-items-center"
                                    >
                                        <p
                                            class="text-muted text-black-50 mb-0"
                                        >
                                            Years Of Experience: <b>2</b>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="col-3 gap-sm-0 gap-3 w-100 position-relative row"
                                >
                                    <div
                                        class="col-sm-4 d-sm-flex text-center flex-column"
                                    >
                                        <p
                                            class="text-muted text-black-50 my-1"
                                        >
                                            Billing Information
                                        </p>
                                        <p class="text-muted text-black-50">
                                            Payment Method: <b>Paypal</b>
                                        </p>
                                        <label>
                                            <input
                                                type="checkbox"
                                                class="toggle-checkbox d-none"
                                            />
                                            <div class="toggle-switch"></div>
                                        </label>
                                    </div>
                                    <div
                                        class="col-sm-4 d-sm-flex text-center justify-content-center align-items-center"
                                    >
                                        <p
                                            class="text-muted text-black-50 mb-0"
                                        >
                                            E-Mail: <b>email@website.com</b>
                                        </p>
                                    </div>
                                    <div
                                        class="col-sm-4 d-sm-flex text-center justify-content-center align-items-center"
                                    >
                                        <p
                                            class="text-muted text-black-50 mb-0"
                                        >
                                            Subscription: <b>Monthly</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row gap-3 mt-4 mx-0">
                            <div class="col-lg-4 bg-white p-3 rounded-3">
                                <div>
                                    <h5>My Skills</h5>
                                    <p class="text-muted">
                                        Complete Skills List
                                    </p>
                                </div>
                                <div
                                    class="skill d-flex flex-column gap-4 py-3"
                                >
                                    <div
                                        class="skill-list border-bottom pb-3 d-flex gap-2"
                                    >
                                        <div class="label">HTML</div>
                                        <div class="label">CSS</div>
                                        <div class="label">JavaScript</div>
                                    </div>
                                    <div
                                        class="skill-list border-bottom pb-3 d-flex gap-2"
                                    >
                                        <div class="label">PHP</div>
                                        <div class="label">SQL</div>
                                        <div class="label">Rest APIs</div>
                                    </div>
                                    <div
                                        class="skill-list border-bottom pb-3 d-flex gap-2"
                                    >
                                        <div class="label">NPM</div>
                                        <div class="label">React</div>
                                    </div>
                                    <div
                                        class="skill-list border-bottom pb-3 d-flex gap-2"
                                    >
                                        <div class="label">Git</div>
                                        <div class="label">Bootstrap</div>
                                        <div class="label">Tailwind</div>
                                    </div>
                                    <div
                                        class="skill-list border-bottom pb-3 d-flex gap-2"
                                    >
                                        <div class="label">Python</div>
                                        <div class="label">Java</div>
                                        <div class="label">C++</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-lg-7 p-3 rounded-3 bg-white flex-grow-1 activities"
                            >
                                <div>
                                    <h5 class="fs-5">Latest Activities</h5>
                                    <p class="text-muted fs-6">
                                        Latest Activities Done By The User
                                    </p>
                                </div>
                                <div
                                    class="row px-2 gap-sm-2 gap-3 justify-content-between align-items-center"
                                >
                                    <div class="col-sm-7 col-12">
                                        <div
                                            class="d-flex justify-content-start align-items-center gap-0"
                                        >
                                            <div class="w-25">
                                                <img
                                                    src="images/activity-01 (1).png"
                                                    alt=""
                                                    class="w-75"
                                                />
                                            </div>
                                            <div>
                                                <h5 class="fw-medium">Store</h5>
                                                <p class="text-muted mb-0">
                                                    Bought The Mastering Python
                                                    Course
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-sm-4 text-sm-end text-center"
                                    >
                                        <h5 class="fs-6">18:47</h5>
                                        <p class="text-muted mb-0">Yesterday</p>
                                    </div>
                                    <hr class="my-2 border-secondary-subtle" />
                                </div>
                                <div
                                    class="row px-2 gap-sm-2 gap-3 justify-content-between align-items-center"
                                >
                                    <div class="col-sm-7 col-12">
                                        <div
                                            class="d-flex justify-content-start align-items-center gap-0"
                                        >
                                            <div class="w-25">
                                                <img
                                                    src="images/activity-02.png"
                                                    alt=""
                                                    class="w-75"
                                                />
                                            </div>
                                            <div>
                                                <h5 class="fw-medium">
                                                    Academy
                                                </h5>
                                                <p class="text-muted mb-0">
                                                    Got The PHP Certificate
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-sm-4 text-sm-end text-center"
                                    >
                                        <h5 class="fs-6">16:05</h5>
                                        <p class="text-muted mb-0">Yesterday</p>
                                    </div>
                                    <hr class="my-2 border-secondary-subtle" />
                                </div>
                                <div
                                    class="row px-2 gap-sm-2 gap-3 justify-content-between align-items-center"
                                >
                                    <div class="col-sm-7 col-12">
                                        <div
                                            class="d-flex justify-content-start align-items-center gap-0"
                                        >
                                            <div class="w-25">
                                                <img
                                                    src="images/activity-03.png"
                                                    alt=""
                                                    class="w-75"
                                                />
                                            </div>
                                            <div>
                                                <h5 class="fw-medium">
                                                    Badges
                                                </h5>
                                                <p class="text-muted mb-0">
                                                    Unlocked The 10 Skills Badge
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-sm-4 text-sm-end text-center"
                                    >
                                        <h5 class="fs-6">18:05</h5>
                                        <p class="text-muted mb-0">Yesterday</p>
                                    </div>
                                    <hr class="my-2 border-secondary-subtle" />
                                </div>
                                <div
                                    class="row px-2 gap-sm-2 gap-3 justify-content-between align-items-center"
                                >
                                    <div class="col-sm-7 col-12">
                                        <div
                                            class="d-flex justify-content-start align-items-center gap-0"
                                        >
                                            <div class="w-25">
                                                <img
                                                    src="images/activity-01.png"
                                                    alt=""
                                                    class="w-75"
                                                />
                                            </div>
                                            <div>
                                                <h5 class="fw-medium">Store</h5>
                                                <p class="text-muted mb-0">
                                                    Bought The Typescript Course
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-sm-4 text-sm-end text-center"
                                    >
                                        <h5 class="fs-6">12:05</h5>
                                        <p class="text-muted mb-0">Yesterday</p>
                                    </div>
                                </div>
                            </div>
</div>`;
window.plans = `<div class="row mt-1 gx-4 gy-4 mx-1">
                            <div class="col-lg-6 col-12 ps-0">
                                <div
                                    class="bg-white rounded p-3 h-100 d-flex flex-column"
                                >
                                    <div
                                        style="background-color: #22c55e"
                                        class="p-3 w-100 text-white text-center rounded-2 mb-3"
                                    >
                                        <h5 class="fw-semibold fs-3">Basic</h5>
                                        <p class="fw-semibold fs-3">$7.99</p>
                                    </div>
                                    <ul class="plans p-0">
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Access All Text Lessons</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span
                                                >Access All Videos Lessons</span
                                            >
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Appear On Leaderboard</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-xmark fa-fw"
                                            ></i>
                                            <span
                                                >Browse Content Without
                                                Ads</span
                                            >
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-xmark fa-fw"
                                            ></i>
                                            <span>Access All Assignments</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-xmark fa-fw"
                                            ></i>
                                            <span>Get Daily Prizes</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-xmark fa-fw"
                                            ></i>
                                            <span>Earn Certificate</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-xmark fa-fw"
                                            ></i>
                                            <span
                                                >1 GB Space For Hosting
                                                Files</span
                                            >
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-xmark fa-fw"
                                            ></i>
                                            <span>Access Badge System</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                    </ul>
                                    <button
                                        class="btn btn-sm btn-outline-success mx-auto w-100"
                                    >
                                        Join
                                    </button>
                                </div>
                            </div>

                            <div class="col-lg-6 col-12">
                                <div
                                    class="bg-white rounded p-3 h-100 d-flex flex-column"
                                >
                                    <div
                                        class="bg-primary p-3 w-100 text-white text-center rounded-2 mb-3"
                                    >
                                        <h5 class="fw-semibold fs-3">Basic</h5>
                                        <p class="fw-semibold fs-3">$7.99</p>
                                    </div>
                                    <ul class="plans p-0">
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Access All Text Lessons</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span
                                                >Access All Videos Lessons</span
                                            >
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Appear On Leaderboard</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span
                                                >Browse Content Without
                                                Ads</span
                                            >
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Access All Assignments</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Get Daily Prizes</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Earn Certificate</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-xmark fa-fw"
                                            ></i>
                                            <span
                                                >1 GB Space For Hosting
                                                Files</span
                                            >
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-xmark fa-fw"
                                            ></i>
                                            <span>Access Badge System</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                    </ul>
                                    <button
                                        class="btn btn-sm btn-outline-primary mx-auto w-100"
                                    >
                                        Join
                                    </button>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12 ps-0">
                                <div
                                    class="bg-white rounded p-3 h-100 d-flex flex-column"
                                >
                                    <div
                                        style="background-color: #f59e0b"
                                        class="p-3 w-100 text-white text-center rounded-2 mb-3"
                                    >
                                        <h5 class="fw-semibold fs-3">
                                            Premium
                                        </h5>
                                        <p class="fw-semibold fs-3">$18.99</p>
                                    </div>
                                    <ul class="plans p-0">
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Access All Text Lessons</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span
                                                >Access All Videos Lessons</span
                                            >
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Appear On Leaderboard</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span
                                                >Browse Content Without
                                                Ads</span
                                            >
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Access All Assignments</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Get Daily Prizes</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Earn Certificate</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span
                                                >1 GB Space For Hosting
                                                Files</span
                                            >
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                        <li>
                                            <i
                                                class="fa-solid fa-check fa-fw yes"
                                            ></i>
                                            <span>Access Badge System</span>
                                            <i
                                                class="fa-solid fa-circle-info help"
                                            ></i>
                                        </li>
                                    </ul>
                                    <p class="text-muted text-center">
                                        This is your current Plan
                                    </p>
                                </div>
                            </div>
</div>`;
window.projects = `<div class="row g-3 mt-3 mx-0">
                            <div class="col-lg-6 ps-0">
                                <div
                                    class="project bg-white position-relative p-3 rounded"
                                >
                                    <h5>Elzero Dashboard</h5>
                                    <p class="text-muted">
                                        Elzero Dashboard Project Design And
                                        Programming And Hosting
                                    </p>

                                    <div
                                        class="contributers d-flex px-3"
                                        style="height: 35px"
                                    >
                                        <img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-01.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-02.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-03.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-04.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-05.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <div
                                        class="labels justify-content-end gap-2 d-flex"
                                    >
                                        <div class="label">
                                            <span>Programming </span>
                                        </div>
                                        <div class="label">
                                            <span>Design </span>
                                        </div>
                                        <div class="label">
                                            <span> Hosting </span>
                                        </div>
                                        <div class="label">
                                            <span> Marketing </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div
                                        class="d-flex py-2 justify-content-between align-items-center"
                                    >
                                        <div class="progress w-75">
                                            <span
                                                class="progress-bar w-75 bg-success"
                                            ></span>
                                        </div>
                                        <p class="text-muted mb-0">$2500</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 ps-0">
                                <div
                                    class="project bg-white position-relative p-3 rounded"
                                >
                                    <h5>Academy Portal</h5>
                                    <p class="text-muted">
                                        Academy Portal Project Design And
                                        Programming
                                    </p>

                                    <div
                                        class="contributers d-flex px-3"
                                        style="height: 35px"
                                    >
                                        <img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-01.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-03.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-04.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-05.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <div
                                        class="labels justify-content-end gap-2 d-flex"
                                    >
                                        <div class="label">
                                            <span>Programming </span>
                                        </div>
                                        <div class="label">
                                            <span>Design </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div
                                        class="d-flex py-2 justify-content-between align-items-center"
                                    >
                                        <div class="progress w-75">
                                            <span
                                                style="width: 57%"
                                                class="progress-bar bg-danger"
                                            ></span>
                                        </div>
                                        <p class="text-muted mb-0">$1900</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 ps-0">
                                <div
                                    class="project bg-white position-relative p-3 rounded"
                                >
                                    <h5>Chatting Application</h5>
                                    <p class="text-muted">
                                        Chatting Application Project Design
                                    </p>

                                    <div
                                        class="contributers d-flex px-3"
                                        style="height: 35px"
                                    >
                                        <img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-01.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-04.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-05.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <div
                                        class="labels justify-content-end gap-2 d-flex"
                                    >
                                        <div class="label">
                                            <span>Programming </span>
                                        </div>
                                        <div class="label">
                                            <span>Design </span>
                                        </div>
                                        <div class="label">
                                            <span> Hosting </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div
                                        class="d-flex py-2 justify-content-between align-items-center"
                                    >
                                        <div class="progress w-75">
                                            <span
                                                style="width: 90%"
                                                class="progress-bar bg-primary"
                                            ></span>
                                        </div>
                                        <p class="text-muted mb-0">$750</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 ps-0">
                                <div
                                    class="project bg-white position-relative p-3 rounded"
                                >
                                    <h5>Mohamed Application</h5>
                                    <p class="text-muted">
                                        Mohamed Application Project Design
                                    </p>

                                    <div
                                        class="contributers d-flex px-3"
                                        style="height: 35px"
                                    >
                                        <img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-01.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-02.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-03.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <div
                                        class="labels justify-content-end gap-2 d-flex"
                                    >
                                        <div class="label">
                                            <span>Programming </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div
                                        class="d-flex py-2 justify-content-between align-items-center"
                                    >
                                        <div class="progress w-75">
                                            <span
                                                style="width: 66%"
                                                class="progress-bar w-75 bg-info"
                                            ></span>
                                        </div>
                                        <p class="text-muted mb-0">$350</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 ps-0">
                                <div
                                    class="project bg-white position-relative p-3 rounded"
                                >
                                    <h5>Mohamed Application</h5>
                                    <p class="text-muted">
                                        Mohamed Application Project Design
                                    </p>

                                    <div
                                        class="contributers d-flex px-3"
                                        style="height: 35px"
                                    >
                                        <img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-01.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-02.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-03.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <div
                                        class="labels justify-content-end gap-2 d-flex"
                                    >
                                        <div class="label">
                                            <span>Programming </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div
                                        class="d-flex py-2 justify-content-between align-items-center"
                                    >
                                        <div class="progress w-75">
                                            <span
                                                style="width: 66%"
                                                class="progress-bar w-75 bg-warning"
                                            ></span>
                                        </div>
                                        <p class="text-muted mb-0">$350</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 ps-0">
                                <div
                                    class="project bg-white position-relative p-3 rounded"
                                >
                                    <h5>Mohamed Application</h5>
                                    <p class="text-muted">
                                        Mohamed Application Project Design
                                    </p>

                                    <div
                                        class="contributers d-flex px-3"
                                        style="height: 35px"
                                    >
                                        <img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-01.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-02.png"
                                            alt=""
                                        /><img
                                            class="border border-white rounded-circle pointer"
                                            src="images/team-03.png"
                                            alt=""
                                        />
                                    </div>
                                    <hr />
                                    <div
                                        class="labels justify-content-end gap-2 d-flex"
                                    >
                                        <div class="label">
                                            <span>Programming </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div
                                        class="d-flex py-2 justify-content-between align-items-center"
                                    >
                                        <div class="progress w-75">
                                            <span
                                                style="width: 66%"
                                                class="progress-bar w-75 bg-success"
                                            ></span>
                                        </div>
                                        <p class="text-muted mb-0">$350</p>
                                    </div>
                                </div>
                            </div>
</div>`;
window.friends = `<div class="row mt-1 friends g-4 mx-0">
                            <div class="col-lg-4 ps-1">
                                <div
                                    class="d-flex flex-column gap-2 align-items-center justify-content-center bg-white rounded pt-2"
                                >
                                    <div
                                        class="actions position-relative d-flex w-100 justify-content-start align-items-center gap-2 ps-3"
                                    >
                                        <i class="fa-solid fa-phone"></i>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div class="w-50 text-center">
                                        <img
                                            src="images/friend-01 (1).jpg"
                                            alt=""
                                            class="w-50 rounded-circle"
                                        />
                                    </div>
                                    <h6 class="m-0">Osama Elzero</h6>
                                    <p class="m-0 text-muted">Uncle Of World</p>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="features w-100 px-4 d-flex flex-column justify-content-center align-items-start"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i class="fas fa-user fa-fw"></i>
                                            <p class="text-muted mb-0">
                                                78 Friends
                                            </p>
                                        </div>
                                        <d
                                            mb-0iv
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fa-solid fa-code-commit fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                25 Projects
                                            </p>
                                        </d>
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fas fa-newspaper fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                17 Articles
                                            </p>
                                        </div>
                                    </div>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="details pt-0 w-100 px-4 py-2 d-flex justify-content-between align-items-center"
                                    >
                                        <p class="text-muted">
                                            Joined 02/10/2021
                                        </p>
                                        <div
                                            class="details-btns d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <button
                                                class="btn btn-sm btn-primary"
                                            >
                                                Profile</button
                                            ><button
                                                class="btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 ps-1">
                                <div
                                    class="d-flex flex-column gap-2 align-items-center justify-content-center bg-white rounded pt-2"
                                >
                                    <div
                                        class="actions position-relative d-flex w-100 justify-content-start align-items-center gap-2 ps-3"
                                    >
                                        <i class="fa-solid fa-phone"></i>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div class="w-50 text-center">
                                        <img
                                            src="images/friend-02.jpg"
                                            alt=""
                                            class="w-50 rounded-circle"
                                        />
                                    </div>
                                    <h6 class="m-0">Ahmed Abdulazim</h6>
                                    <p class="m-0 text-muted">
                                        JavaScript Developer
                                    </p>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="features w-100 px-4 d-flex flex-column justify-content-center align-items-start"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i class="fas fa-user fa-fw"></i>
                                            <p class="text-muted mb-0">
                                                350 Friends
                                            </p>
                                        </div>
                                        <d
                                            mb-0iv
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fa-solid fa-code-commit fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                7 Projects
                                            </p>
                                        </d>
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fas fa-newspaper fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                14 Articles
                                            </p>
                                        </div>
                                    </div>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="details pt-0 w-100 px-4 py-2 d-flex justify-content-between align-items-center"
                                    >
                                        <p class="text-muted">
                                            Joined 09/05/2018
                                        </p>
                                        <div
                                            class="details-btns d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <button
                                                class="btn btn-sm btn-primary"
                                            >
                                                Profile</button
                                            ><button
                                                class="btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 ps-1">
                                <div
                                    class="d-flex flex-column gap-2 align-items-center justify-content-center bg-white rounded pt-2"
                                >
                                    <div
                                        class="actions position-relative d-flex w-100 justify-content-start align-items-center gap-2 ps-3"
                                    >
                                        <i class="fa-solid fa-phone"></i>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div class="w-50 text-center">
                                        <img
                                            src="images/friend-03.jpg"
                                            alt=""
                                            class="w-50 rounded-circle"
                                        />
                                    </div>
                                    <h6 class="m-0">Ramez Khaled</h6>
                                    <p class="m-0 text-muted">
                                        Courses Collector
                                    </p>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="features w-100 px-4 d-flex flex-column justify-content-center align-items-start"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i class="fas fa-user fa-fw"></i>
                                            <p class="text-muted mb-0">
                                                56 Friends
                                            </p>
                                        </div>
                                        <d
                                            mb-0iv
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fa-solid fa-code-commit fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                17 Projects
                                            </p>
                                        </d>
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fas fa-newspaper fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                20 Articles
                                            </p>
                                        </div>
                                    </div>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="details pt-0 w-100 px-4 py-2 d-flex justify-content-between align-items-center"
                                    >
                                        <p class="text-muted">
                                            Joined 22/05/2023
                                        </p>
                                        <div
                                            class="details-btns d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <button
                                                class="btn btn-sm btn-primary"
                                            >
                                                Profile</button
                                            ><button
                                                class="btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 ps-1">
                                <div
                                    class="d-flex flex-column gap-2 align-items-center justify-content-center bg-white rounded pt-2"
                                >
                                    <div
                                        class="actions position-relative d-flex w-100 justify-content-start align-items-center gap-2 ps-3"
                                    >
                                        <i class="fa-solid fa-phone"></i>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div class="w-50 text-center">
                                        <img
                                            src="images/friend-04 (1).jpg"
                                            alt=""
                                            class="w-50 rounded-circle"
                                        />
                                    </div>
                                    <h6 class="m-0">Taha Gaber</h6>
                                    <p class="m-0 text-muted">
                                        Flutter Developer
                                    </p>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="features w-100 px-4 d-flex flex-column justify-content-center align-items-start"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i class="fas fa-user fa-fw"></i>
                                            <p class="text-muted mb-0">
                                                10 Friends
                                            </p>
                                        </div>
                                        <d
                                            mb-0iv
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fa-solid fa-code-commit fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                18 Projects
                                            </p>
                                        </d>
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fas fa-newspaper fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                65 Articles
                                            </p>
                                        </div>
                                    </div>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="details pt-0 w-100 px-4 py-2 d-flex justify-content-between align-items-center"
                                    >
                                        <p class="text-muted">
                                            Joined 17/10/2024
                                        </p>
                                        <div
                                            class="details-btns d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <button
                                                class="btn btn-sm btn-primary"
                                            >
                                                Profile</button
                                            ><button
                                                class="btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 ps-1">
                                <div
                                    class="d-flex flex-column gap-2 align-items-center justify-content-center bg-white rounded pt-2"
                                >
                                    <div
                                        class="actions position-relative d-flex w-100 justify-content-start align-items-center gap-2 ps-3"
                                    >
                                        <i class="fa-solid fa-phone"></i>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div class="w-50 text-center">
                                        <img
                                            src="images/friend-05 (1).jpg"
                                            alt=""
                                            class="w-50 rounded-circle"
                                        />
                                    </div>
                                    <h6 class="m-0">Belal Ahmed</h6>
                                    <p class="m-0 text-muted">Police Officer</p>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="features w-100 px-4 d-flex flex-column justify-content-center align-items-start"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i class="fas fa-user fa-fw"></i>
                                            <p class="text-muted mb-0">
                                                78 Friends
                                            </p>
                                        </div>
                                        <d
                                            mb-0iv
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fa-solid fa-code-commit fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                25 Projects
                                            </p>
                                        </d>
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fas fa-newspaper fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                17 Articles
                                            </p>
                                        </div>
                                    </div>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="details pt-0 w-100 px-4 py-2 d-flex justify-content-between align-items-center"
                                    >
                                        <p class="text-muted">
                                            Joined 02/10/2021
                                        </p>
                                        <div
                                            class="details-btns d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <button
                                                class="btn btn-sm btn-primary"
                                            >
                                                Profile</button
                                            ><button
                                                class="btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 ps-1">
                                <div
                                    class="d-flex flex-column gap-2 align-items-center justify-content-center bg-white rounded pt-2"
                                >
                                    <div
                                        class="actions position-relative d-flex w-100 justify-content-start align-items-center gap-2 ps-3"
                                    >
                                        <i class="fa-solid fa-phone"></i>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div class="w-50 text-center">
                                        <img
                                            src="images/friend-01 (1).jpg"
                                            alt=""
                                            class="w-50 rounded-circle"
                                        />
                                    </div>
                                    <h6 class="m-0">Ahmed Abu-Zaid</h6>
                                    <p class="m-0 text-muted">Youtuber</p>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="features w-100 px-4 d-flex flex-column justify-content-center align-items-start"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i class="fas fa-user fa-fw"></i>
                                            <p class="text-muted mb-0">
                                                78 Friends
                                            </p>
                                        </div>
                                        <d
                                            mb-0iv
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fa-solid fa-code-commit fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                25 Projects
                                            </p>
                                        </d>
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fas fa-newspaper fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                17 Articles
                                            </p>
                                        </div>
                                    </div>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="details pt-0 w-100 px-4 py-2 d-flex justify-content-between align-items-center"
                                    >
                                        <p class="text-muted">
                                            Joined 02/10/2021
                                        </p>
                                        <div
                                            class="details-btns d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <button
                                                class="btn btn-sm btn-primary"
                                            >
                                                Profile</button
                                            ><button
                                                class="btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 ps-1">
                                <div
                                    class="d-flex flex-column gap-2 align-items-center justify-content-center bg-white rounded pt-2"
                                >
                                    <div
                                        class="actions position-relative d-flex w-100 justify-content-start align-items-center gap-2 ps-3"
                                    >
                                        <i class="fa-solid fa-phone"></i>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div class="w-50 text-center">
                                        <img
                                            src="images/friend-02 (1).jpg"
                                            alt=""
                                            class="w-50 rounded-circle"
                                        />
                                    </div>
                                    <h6 class="m-0">Ahmed bahnasi</h6>
                                    <p class="m-0 text-muted">
                                        Perfect Instructor
                                    </p>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="features w-100 px-4 d-flex flex-column justify-content-center align-items-start"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i class="fas fa-user fa-fw"></i>
                                            <p class="text-muted mb-0">
                                                78 Friends
                                            </p>
                                        </div>
                                        <d
                                            mb-0iv
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fa-solid fa-code-commit fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                25 Projects
                                            </p>
                                        </d>
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fas fa-newspaper fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                17 Articles
                                            </p>
                                        </div>
                                    </div>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="details pt-0 w-100 px-4 py-2 d-flex justify-content-between align-items-center"
                                    >
                                        <p class="text-muted">
                                            Joined 02/10/2021
                                        </p>
                                        <div
                                            class="details-btns d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <button
                                                class="btn btn-sm btn-primary"
                                            >
                                                Profile</button
                                            ><button
                                                class="btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 ps-1">
                                <div
                                    class="d-flex flex-column gap-2 align-items-center justify-content-center bg-white rounded pt-2"
                                >
                                    <div
                                        class="actions position-relative d-flex w-100 justify-content-start align-items-center gap-2 ps-3"
                                    >
                                        <i class="fa-solid fa-phone"></i>
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div class="w-50 text-center">
                                        <img
                                            src="images/friend-03.jpg"
                                            alt=""
                                            class="w-50 rounded-circle"
                                        />
                                    </div>
                                    <h6 class="m-0">El-Osta Abdo</h6>
                                    <p class="m-0 text-muted">Uncle Of World</p>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="features w-100 px-4 d-flex flex-column justify-content-center align-items-start"
                                    >
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i class="fas fa-user fa-fw"></i>
                                            <p class="text-muted mb-0">
                                                1040 Friends
                                            </p>
                                        </div>
                                        <d
                                            mb-0iv
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fa-solid fa-code-commit fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                700 Projects
                                            </p>
                                        </d>
                                        <div
                                            class="d-flex align-items-center gap-3 my-2"
                                        >
                                            <i
                                                class="fas fa-newspaper fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">
                                                8240 Articles
                                            </p>
                                        </div>
                                    </div>
                                    <hr class="w-75 my-1" />
                                    <div
                                        class="details pt-0 w-100 px-4 py-2 d-flex justify-content-between align-items-center"
                                    >
                                        <p class="text-muted">
                                            Joined 02/10/2021
                                        </p>
                                        <div
                                            class="details-btns d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <button
                                                class="btn btn-sm btn-primary"
                                            >
                                                Profile</button
                                            ><button
                                                class="btn btn-sm btn-danger"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
</div>`;

window.courses = `<div class="row mt-2 courses g-4">
                            <div class="col-lg-4 course">
                                <div class="bg-white rounded">
                                    <div class="w-100 rounded">
                                        <img
                                            src="images/course-01.jpg"
                                            alt=""
                                            class="w-100 rounded-top"
                                        />
                                    </div>
                                    <div class="course-details p-3">
                                        <h5 class="fw-semibold fs-5">
                                            Mastering Web Design
                                        </h5>
                                        <p class="text-muted mb-0">
                                            Master The Art Of Web Designing And
                                            Mocking, Prototyping And Creating
                                            Web Design Architecture
                                        </p>
                                    </div>
                                    <div class="position-relative course-info">
                                        <hr class="border-secondary my-2" />
                                        <button class="btn btn-sm btn-primary">
                                            Course Info
                                        </button>
                                    </div>
                                    <div
                                        class="course-data d-flex justify-content-between align-items-center p-2 px-3"
                                    >
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-regular fa-user fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-solid fa-dollar-sign fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 course">
                                <div class="bg-white rounded">
                                    <div class="w-100 rounded">
                                        <img
                                            src="images/course-02 (1).jpg"
                                            alt=""
                                            class="w-100 rounded-top"
                                        />
                                    </div>
                                    <div class="course-details p-3">
                                        <h5 class="fw-semibold fs-5">
                                            Mastering react.JS
                                        </h5>
                                        <p class="text-muted mb-0">
                                            Master The Art Of Web Designing And
                                            Mocking, Prototyping And Creating
                                            Web Components With React
                                        </p>
                                    </div>
                                    <div class="position-relative course-info">
                                        <hr class="border-secondary my-2" />
                                        <button class="btn btn-sm btn-primary">
                                            Course Info
                                        </button>
                                    </div>
                                    <div
                                        class="course-data d-flex justify-content-between align-items-center p-2 px-3"
                                    >
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-regular fa-user fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-solid fa-dollar-sign fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 course">
                                <div class="bg-white rounded">
                                    <div class="w-100 rounded">
                                        <img
                                            src="images/course-03.jpg"
                                            alt=""
                                            class="w-100 rounded-top"
                                        />
                                    </div>
                                    <div class="course-details p-3">
                                        <h5 class="fw-semibold fs-5">
                                            Mastering PHP Tutorials
                                        </h5>
                                        <p class="text-muted mb-0">
                                            PHP Tutorials And Examples And
                                            Practice On Web Application And
                                            Connecting With Databases
                                        </p>
                                    </div>
                                    <div class="position-relative course-info">
                                        <hr class="border-secondary my-2" />
                                        <button class="btn btn-sm btn-primary">
                                            Course Info
                                        </button>
                                    </div>
                                    <div
                                        class="course-data d-flex justify-content-between align-items-center p-2 px-3"
                                    >
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-regular fa-user fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-solid fa-dollar-sign fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 course">
                                <div class="bg-white rounded">
                                    <div class="w-100 rounded">
                                        <img
                                            src="images/course-04.jpg"
                                            alt=""
                                            class="w-100 rounded-top"
                                        />
                                    </div>
                                    <div class="course-details p-3">
                                        <h5 class="fw-semibold fs-5">
                                            Mastering Python
                                        </h5>
                                        <p class="text-muted mb-0">
                                            Mastering Python To Prepare For Data
                                            Science And AI And Automating Things
                                            in Your Life
                                        </p>
                                    </div>
                                    <div class="position-relative course-info">
                                        <hr class="border-secondary my-2" />
                                        <button class="btn btn-sm btn-primary">
                                            Course Info
                                        </button>
                                    </div>
                                    <div
                                        class="course-data d-flex justify-content-between align-items-center p-2 px-3"
                                    >
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-regular fa-user fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-solid fa-dollar-sign fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 course">
                                <div class="bg-white rounded">
                                    <div class="w-100 rounded">
                                        <img
                                            src="images/course-05.jpg"
                                            alt=""
                                            class="w-100 rounded-top"
                                        />
                                    </div>
                                    <div class="course-details p-3">
                                        <h5 class="fw-semibold fs-5">
                                            Responsive Web Design
                                        </h5>
                                        <p class="text-muted mb-0">
                                            Mastering Responsive Web Design And
                                            Media Queries And Know Everything
                                            About Breakpoints
                                        </p>
                                    </div>
                                    <div class="position-relative course-info">
                                        <hr class="border-secondary my-2" />
                                        <button class="btn btn-sm btn-primary">
                                            Course Info
                                        </button>
                                    </div>
                                    <div
                                        class="course-data d-flex justify-content-between align-items-center p-2 px-3"
                                    >
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-regular fa-user fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-solid fa-dollar-sign fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 course">
                                <div class="bg-white rounded">
                                    <div class="w-100 rounded">
                                        <img
                                            src="images/course-01.jpg"
                                            alt=""
                                            class="w-100 rounded-top"
                                        />
                                    </div>
                                    <div class="course-details p-3">
                                        <h5 class="fw-semibold fs-5">
                                            Data Structure And Algorithms
                                        </h5>
                                        <p class="text-muted mb-0">
                                            Master The Art Of Data Strcuture And
                                            Famous Algorithms Like Sorting,
                                            Dividing And Conquering
                                        </p>
                                    </div>
                                    <div class="position-relative course-info">
                                        <hr class="border-secondary my-2" />
                                        <button class="btn btn-sm btn-primary">
                                            Course Info
                                        </button>
                                    </div>
                                    <div
                                        class="course-data d-flex justify-content-between align-items-center p-2 px-3"
                                    >
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-regular fa-user fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                        <div
                                            class="d-flex justify-content-start align-items-center"
                                        >
                                            <i
                                                class="fa-solid fa-dollar-sign fa-fw"
                                            ></i>
                                            <p class="text-muted mb-0">925</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
</div>`;
