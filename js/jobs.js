console.log("jobs.js loaded");
const jobs = [

   {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Mumbai",
    salary: "8-10 LPA",
    type: "Full Time",
    experience: "1-3 Years",
    skills: "HTML, CSS, JavaScript, React",
    description: "Build responsive web applications, create reusable UI components, collaborate with designers, and optimize website performance."
},

{
    id: 2,
    title: "React Developer",
    company: "Adobe",
    location: "Bangalore",
    salary: "10-12 LPA",
    type: "Remote",
    experience: "2+ Years",
    skills: "React, Redux, JavaScript",
    description: "Develop scalable React applications, integrate REST APIs, manage application state, and improve user experience."
},

{
    id: 3,
    title: "UI Developer",
    company: "Amazon",
    location: "Pune",
    salary: "5-7 LPA",
    type: "Internship",
    experience: "Fresher",
    skills: "HTML, CSS, Bootstrap, Figma",
    description: "Create attractive and responsive user interfaces, convert Figma designs into web pages, and ensure cross-browser compatibility."
},

{
    id: 4,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Delhi",
    salary: "12-15 LPA",
    type: "Full Time",
    experience: "2-4 Years",
    skills: "Node.js, Express.js, MongoDB, SQL",
    description: "Develop secure backend APIs, manage databases, implement authentication, and optimize server performance."
},

{
    id: 5,
    title: "Java Developer",
    company: "Infosys",
    location: "Mumbai",
    salary: "6-8 LPA",
    type: "Hybrid",
    experience: "0-2 Years",
    skills: "Java, Spring Boot, MySQL",
    description: "Develop Java applications, write efficient SQL queries, fix bugs, and collaborate with development teams."
},

{
    id: 6,
    title: "Full Stack Developer",
    company: "TCS",
    location: "Mumbai",
    salary: "7-9 LPA",
    type: "Full Time",
    experience: "1-2 Years",
    skills: "HTML, CSS, JavaScript, Node.js, MongoDB",
    description: "Develop frontend and backend applications, integrate APIs, and maintain databases."
},

{
    id: 7,
    title: "Software Engineer",
    company: "Wipro",
    location: "Pune",
    salary: "6-8 LPA",
    type: "Full Time",
    experience: "Fresher",
    skills: "Java, SQL, HTML, CSS",
    description: "Develop software solutions, debug applications, and work with development teams."
},

{
    id: 8,
    title: "Frontend Developer",
    company: "Accenture",
    location: "Bangalore",
    salary: "8-11 LPA",
    type: "Hybrid",
    experience: "1+ Years",
    skills: "React, JavaScript, Bootstrap",
    description: "Build responsive web interfaces and collaborate with UI/UX designers."
},

{
    id: 9,
    title: "Web Developer",
    company: "Capgemini",
    location: "Mumbai",
    salary: "5-7 LPA",
    type: "Full Time",
    experience: "Fresher",
    skills: "HTML, CSS, JavaScript",
    description: "Create responsive websites and maintain existing web applications."
},

{
    id: 10,
    title: "Java Developer",
    company: "Cognizant",
    location: "Chennai",
    salary: "7-10 LPA",
    type: "Hybrid",
    experience: "2 Years",
    skills: "Java, Spring Boot, MySQL",
    description: "Develop enterprise applications using Java and Spring Boot."
},

{
    id: 11,
    title: "UI/UX Designer",
    company: "Zoho",
    location: "Chennai",
    salary: "6-8 LPA",
    type: "Full Time",
    experience: "1 Year",
    skills: "Figma, Adobe XD, Photoshop",
    description: "Design modern user interfaces and improve user experience."
},

{
    id: 12,
    title: "React Developer",
    company: "Flipkart",
    location: "Bangalore",
    salary: "10-13 LPA",
    type: "Remote",
    experience: "2+ Years",
    skills: "React, Redux, REST API",
    description: "Develop scalable React applications and optimize performance."
},

{
    id: 13,
    title: "Frontend Engineer",
    company: "Paytm",
    location: "Noida",
    salary: "9-11 LPA",
    type: "Hybrid",
    experience: "2 Years",
    skills: "JavaScript, React, CSS",
    description: "Build reusable UI components and improve application performance."
},

{
    id: 14,
    title: "Software Developer",
    company: "HCL",
    location: "Delhi",
    salary: "6-9 LPA",
    type: "Full Time",
    experience: "Fresher",
    skills: "Java, SQL, Git",
    description: "Develop software modules and participate in code reviews."
},

{
    id: 15,
    title: "Backend Engineer",
    company: "IBM",
    location: "Hyderabad",
    salary: "11-14 LPA",
    type: "Full Time",
    experience: "2-3 Years",
    skills: "Node.js, Express, MongoDB",
    description: "Develop secure REST APIs and optimize backend services."
},

{
    id: 16,
    title: "Frontend Developer",
    company: "Oracle",
    location: "Hyderabad",
    salary: "9-12 LPA",
    type: "Hybrid",
    experience: "1-2 Years",
    skills: "HTML, CSS, JavaScript, React",
    description: "Create responsive dashboards and interactive user interfaces."
},

{
    id: 17,
    title: "Software Engineer",
    company: "Tech Mahindra",
    location: "Pune",
    salary: "5-7 LPA",
    type: "Full Time",
    experience: "Fresher",
    skills: "Java, HTML, CSS, SQL",
    description: "Develop and maintain enterprise software solutions."
},

{
    id: 18,
    title: "React JS Developer",
    company: "LTIMindtree",
    location: "Mumbai",
    salary: "8-10 LPA",
    type: "Remote",
    experience: "1 Year",
    skills: "React, Redux, JavaScript",
    description: "Develop modern React applications and integrate APIs."
},

{
    id: 19,
    title: "UI Developer",
    company: "Deloitte",
    location: "Hyderabad",
    salary: "9-11 LPA",
    type: "Hybrid",
    experience: "2 Years",
    skills: "HTML, CSS, Bootstrap",
    description: "Create responsive interfaces and collaborate with frontend teams."
},

{
    id: 20,
    title: "Frontend Developer",
    company: "Reliance Jio",
    location: "Mumbai",
    salary: "7-9 LPA",
    type: "Full Time",
    experience: "Fresher",
    skills: "HTML, CSS, JavaScript",
    description: "Build responsive web pages and optimize website performance."
}

];
const toast = document.getElementById("toast");
const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");
const companyFilter = document.getElementById("companyFilter");
const sortFilter = document.getElementById("sortFilter");
const jobCount = document.getElementById("jobCount");

const applyModal = document.getElementById("applyModal");
const applyForm = document.getElementById("applyForm");
const closeApply = document.querySelector(".close-apply");

const jobModal = document.getElementById("jobModal");
const modalTitle = document.getElementById("modalTitle");
const modalCompany = document.getElementById("modalCompany");
const modalLocation = document.getElementById("modalLocation");
const modalSalary = document.getElementById("modalSalary");
const modalType = document.getElementById("modalType");
const modalExperience = document.getElementById("modalExperience");
const modalSkills = document.getElementById("modalSkills");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");
function displayJobs(jobArray){

    jobList.innerHTML = "";
    jobCount.textContent = `Showing ${jobArray.length} Job${jobArray.length !== 1 ? "s" : ""}`;

    if(jobArray.length === 0){

        jobList.innerHTML = `
            <div class="no-jobs">
                <i class="fa-solid fa-face-frown"></i>
                <h2>No Jobs Found</h2>
                <p>Try searching with different keywords or filters.</p>
            </div>
        `;

        return;
    }

    jobArray.forEach((job,index)=>{
        const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

const isSaved = savedJobs.some(savedJob => {

    return (
        savedJob.title === job.title &&
        savedJob.company === job.company
    );

});

        jobList.innerHTML += `

        <div class="job-card">

            <span class="job-type">${job.type}</span>

            <h2>${job.title}</h2>

            <h4>${job.company}</h4>

            <p>
                <i class="fa-solid fa-location-dot"></i>
                ${job.location}
            </p>

            <p>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                ${job.salary}
            </p>

            <div class="job-buttons">

              <button
                class="apply-btn"
                onclick="openApplyForm()">
                Apply Now
            </button>


            <button
             class="details-btn"
             onclick="showDetails(${job.id})">
            View Details
            </button>


            <button
            class="save-btn"
            id="saveBtn${index}"
            onclick="saveJob(${index})"
            ${isSaved ? "disabled" : ""}>

            <i class="fa-solid ${isSaved ? "fa-check" : "fa-bookmark"}"></i>

            ${isSaved ? "Saved" : "Save"}

            </button>

            </div>

        </div>

        `;

    });

}


function filterJobs(){

    const keyword = searchInput.value.toLowerCase();

    const location = locationFilter.value;

    const type = typeFilter.value;
    const company = companyFilter.value;

    let filteredJobs = jobs.filter(job => {

        const matchesKeyword =
            job.title.toLowerCase().includes(keyword) ||
            job.company.toLowerCase().includes(keyword);

        const matchesLocation =
            location === "All" || job.location === location;

        const matchesType =
            type === "All" || job.type === type;

            const matchesCompany =
    company === "All" || job.company === company;

return matchesKeyword &&
       matchesLocation &&
       matchesType &&
       matchesCompany;
    });

    displayJobs(filteredJobs);

}
displayJobs(jobs);
// Show jobs for selected company from Companies page

const params = new URLSearchParams(window.location.search);

const selectedCompany = params.get("company");

if (selectedCompany) {

    companyFilter.value = selectedCompany;

    filterJobs();

}

// SEARCH

searchInput.addEventListener("input", filterJobs);
// LOCATION FILTER

locationFilter.addEventListener("change", filterJobs);

// JOB TYPE FILTER

typeFilter.addEventListener("change", filterJobs);

// SAVE JOB

function saveJob(index) {

    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    const job = jobs[index];

    const alreadySaved = savedJobs.some(savedJob => {

        return savedJob.title === job.title &&
               savedJob.company === job.company;

    });

    if (alreadySaved) {

        showToast("⚠ Job Already Saved");

        return;

    }

    savedJobs.push(job);

    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));

    showToast("✔ Job Saved Successfully");

const saveButton = document.getElementById(`saveBtn${index}`);

saveButton.innerHTML = `
    <i class="fa-solid fa-check"></i>
    Saved
`;

saveButton.disabled = true;

}
function openApplyForm(){

    applyModal.style.display = "flex";

}

closeApply.addEventListener("click",()=>{

    applyModal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===applyModal){

        applyModal.style.display="none";

    }

});
applyForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    showToast("🎉 Application Submitted");

    applyForm.reset();

    applyModal.style.display="none";

});sortFilter.addEventListener("change", () => {

    let sortedJobs = [...jobs];

    switch (sortFilter.value) {

        case "company":

            sortedJobs.sort((a, b) => a.company.localeCompare(b.company));
            break;

        case "salaryLow":

            sortedJobs.sort((a, b) => {

                return parseInt(a.salary) - parseInt(b.salary);

            });

            break;

        case "salaryHigh":

            sortedJobs.sort((a, b) => {

                return parseInt(b.salary) - parseInt(a.salary);

            });

            break;

        default:

            displayJobs(jobs);
            return;

    }

    displayJobs(sortedJobs);

});
companyFilter.addEventListener("change", filterJobs);

function showDetails(id) {

    const selectedJob = jobs.find(job => job.id === id);

    modalTitle.textContent = selectedJob.title;
    modalCompany.textContent = selectedJob.company;
    modalLocation.textContent = "📍 Location: " + selectedJob.location;
    modalSalary.textContent = "💰 Salary: " + selectedJob.salary;
    modalType.textContent = "💼 Type: " + selectedJob.type;
    modalExperience.textContent = "🧑‍💻 Experience: " + selectedJob.experience;
    modalSkills.textContent = "🛠 Skills: " + selectedJob.skills;
    modalDescription.textContent = "📝 " + selectedJob.description;

    jobModal.style.display = "flex";
}
closeBtn.addEventListener("click", () => {

    jobModal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === jobModal) {

        jobModal.style.display = "none";

    }

});
function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerHTML = "☀️";

}
themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.innerHTML = "🌙";

        localStorage.setItem("theme", "light");

    }

});