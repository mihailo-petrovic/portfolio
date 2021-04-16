import projects from "./projects.js";
const c = document.querySelector("#check");
const navLinks = document.querySelectorAll(".nav-item");
const btt = document.getElementById("backToTop");
const projectsDiv = document.getElementById("projects");
let skills = document.querySelectorAll(".skillImg");
const skillDiv = document.getElementById("skillDiv");

window.onload = () => {
  projects.forEach((p) => {
    renderProject(p);
  });
};

skills.forEach((skill) => {
  skill.addEventListener("click", showSkill);
});

for (let link of navLinks) {
  link.addEventListener("click", () => {
    c.checked ? (c.checked = false) : (c.checked = true);
  });
}

window.onscroll = () => {
  window.scrollY >= 50
    ? (btt.style.right = "30px")
    : (btt.style.right = "-50px");

  window.scrollY >= 1000
    ? (btt.style.color = "rgb(37, 107, 58)")
    : (btt.style.color = "black");
};

function renderProject(p) {
  let renderDiv = document.createElement("div");
  renderDiv.classList.add("project");
  renderDiv.innerHTML = `
  <div class="pid">
    <a href="${p.link}" target="_blank""><img src="${p.imgSrc}" alt="Image not available" /></a>
  </div>
  <div class="pOpis">
  <a href="${p.link}" target="_blank""><h4>${p.name}</h4></a>
    <p>
      ${p.about}
    </p>
  </div>
  `;
  projectsDiv.appendChild(renderDiv);
}

function showSkill(e) {
  let top = e.pageY - window.innerHeight - 50;
  let name, perc, exp;
  switch (e.target.parentElement.id) {
    case "html": {
      name = "HTML5";
      perc = "90";
      exp = 5;
      break;
    }
    case "css": {
      name = "CSS3";
      perc = "70";
      exp = 4;
      break;
    }
    case "javascript": {
      name = "JavaScript";
      perc = "50";
      exp = 2;
      break;
    }
    case "react": {
      name = "ReactJS";
      perc = "30";
      exp = 1;
      break;
    }
    case "wordpress": {
      name = "WordPress";
      perc = "60";
      exp = 3;
      break;
    }
    case "node": {
      name = "NodeJS";
      perc = "20";
      exp = 0.5;
      break;
    }
  }
  skillDiv.innerHTML = `
  <div><strong>skill: </strong> ${name}</div>
  <div><strong>exp: </strong> ${exp} years</div>
  <div><strong>level: </strong> ${perc}%</div>
  `;
  skillDiv.style.left = (e.pageX - 100) + "px";
  skillDiv.style.top = top + "px";
}

window.addEventListener("click", function (e) {
  if (
    !skillDiv.contains(e.target) &&
    !e.target.classList.contains("skillImg")
  ) {
    skillDiv.style.top = "-1000px";
  }
});
