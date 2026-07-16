
const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

const container = document.getElementById("savedJobsContainer");

if (savedJobs.length === 0) {

    container.innerHTML = "<h2>No Saved Jobs Yet</h2>";

} else {

    savedJobs.forEach((job, index) => {

        container.innerHTML += `

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

        </div>

        `;

    });

}