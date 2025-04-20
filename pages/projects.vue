<!-- u24739163 Mulondi Makhado -->
<template>
    <main class="container py-5">
      <h1 class="display-4 mb-5 text-center">My Projects</h1>
      
      <div class="row">
        <div class="col-md-4 mb-4" v-for="project in projects" :key="project.id">
          <div class="card h-100">
            <img :src="project.image" class="card-img-top" :alt="project.title">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.link" class="btn btn-primary" :target="project.target">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
<script setup>
import { Octokit } from "octokit";
const runtimeConfig = useRuntimeConfig();
const octokit = new Octokit({ 
    auth: runtimeConfig.githubToken 
});

// Uses the GitHub API to recive the images from the repos
async function fetchImageFromRepo(owner, repo, path) {
  try {
    const response = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
      owner,
      repo,
      path,
    });
    return response.data.download_url;
  } catch (error) {
    console.error(`Failed to fetch image from ${owner}/${repo}:`, error);
    return "";
  }
}

async function getProjectsWithGitHubImages() {
  // Fetch images from 3 different repos
  const [image1, image2, image3] = await Promise.all([
    fetchImageFromRepo("u24739163", "COS-216-PA2", "Images/Brand/Logo.png"),
    fetchImageFromRepo("u24739163", "IMY-210-PP1", "src/assets/sudoLogo.png"),
    fetchImageFromRepo("u24739163", "COS221_Assignment_4", "src/u24739163_northwind_gui/assets/SudoLogo.png"),
  ]);

  return [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store for a COS 216 project",
      image: image1,
      link: "https://github.com/u24739163/COS-216-PA2",
      target: "_blank"
    },
    {
      id: 2,
      title: "File Management Website",
      description: "A XML file management website for IMY 210.",
      image: image2,
      link: "https://github.com/u24739163/IMY-210-PP1",
      target: "_blank"
    },
    {
      id: 3,
      title: "Database managment program",
      description: "A program with a UI to to manage a database for COS 221.",
      image: image3,
      link: "https://github.com/u24739163/COS221_Assignment_4",
      target: "_blank"
    }
  ];
}

// Begins the processes of getting the images
const projects = await getProjectsWithGitHubImages();
</script>
  
<style scoped>
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.btn-primary {
  background-color: #dbc5bb !important;
  border-color: #dbc5bb !important;
}
</style>