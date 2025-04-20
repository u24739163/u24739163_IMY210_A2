<!-- u24739163 Mulondi Makhado -->
<template>
    <main class="container py-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h1 class="display-4 mb-4">Hello, I'm <span class="text-primary">Mulondi Makhado</span></h1>
          <p class="lead mb-4">
            Welcome to my personal website and the home of Sudo Brands! I'm a passionate developer specializing in full stack development.
            With a few years of experience I am eager to learn new things and broaden my knowlege.
          </p>
          <div class="d-flex gap-3">
            <NuxtLink to="/projects" class="btn btn-primary btn-lg">View My Work</NuxtLink>
            <NuxtLink to="/contacts" class="btn btn-outline-primary btn-lg">Contact Me</NuxtLink>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../images/photo2.jpeg" alt="Profile Photo" class="img-fluid rounded-circle shadow-lg" style="max-width: 350px; margin-left: 100px;">
        </div>
      </div>
  
      <section class="mt-5 py-5">
        <h2 class="text-center mb-5">About Me</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">Skills</h3>
                <ul class="list-unstyled">
                  <li>Web Development</li>
                  <li>UI/UX Design</li>
                  <li>JavaScript Frameworks</li>
                  <li>Backend Development</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">Experience</h3>
                <p>1+ years in web development</p>
                <p>Developed a few website in the past months</p>
                <p>Open source contributor</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">Education</h3>
                <p>Studying towards a Information and Knowlege Systems Degree</p>
                <p>Multiple certifications</p>
                <p>Continuous learner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
<style scoped>
.text-primary {
  color: #d2aa97 !important;
}

.btn-primary {
  background-color: #d2aa97 !important;
  border-color: #d2aa97 !important;
}

.btn-outline-primary {
  color: #d2aa97 !important;
  border-color: #d2aa97 !important;
}

.btn-outline-primary:hover {
  background-color: #d2aa97 !important;
  color: white !important;
}

.card {
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background-color: #e5cfc5;
}

.card:hover {
  transform: translateY(-5px);
}
</style>