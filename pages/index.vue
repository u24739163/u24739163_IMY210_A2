<!-- u24739163 Mulondi Makhado -->
<template>
  <main class="container py-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <h1 class="display-4 mb-4">Hello, I'm <span class="text-primary">Mulondi Makhado</span></h1>
        <p class="lead mb-4">
          Welcome to my personal website and the home of Sudo Brands! I'm a passionate developer specializing in full stack development.
          With a few years of experience I am eager to learn new things and broaden my knowledge.
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
              <p>Developed a few websites in the past months</p>
              <p>Open source contributor</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title">Education</h3>
              <p>Studying towards an Information and Knowledge Systems Degree</p>
              <p>Multiple certifications</p>
              <p>Continuous learner</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cat Facts Section -->
    <section class="mt-5 py-5">
      <div class="card" style="background-color: #f8f9fa; border-radius: 12px;">
        <div class="card-body text-center">
          <h3 class="mb-4">Random Cat Fact</h3>
          <div v-if="catFactLoading" class="spinner-border text-primary"></div>
          <p v-else class="lead" :class="{ 'text-danger': catFactError }">
            {{ catFact }}
          </p>
          <button 
            @click="fetchCatFact" 
            class="btn btn-primary mt-3"
            :disabled="catFactLoading"
          >
            <span v-if="catFactLoading" class="spinner-border spinner-border-sm me-1"></span>
            {{ catFactLoading ? 'Fetching...' : 'Get Cat Fact' }}
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const catFact = ref('Click the button to get a fun cat fact!')
const catFactLoading = ref(false)
const catFactError = ref(false)

const fetchCatFact = async () => {
  catFactLoading.value = true
  catFactError.value = false
  
  try {
    const { data, error } = await useFetch('https://meowfacts.herokuapp.com', {
      params: { count: 1 },
      server: false
    })

    if (error.value || !data.value || !data.value.data || data.value.data.length === 0) {
      throw new Error('Invalid response from API')
    }

    catFact.value = data.value.data[0]
  } catch (error) {
    catFactError.value = true
    catFact.value = "Couldn't fetch a cat fact right now. Cats are still awesome though!"
    console.error('Cat fact API error:', error)
  } finally {
    catFactLoading.value = false
  }
}
</script>

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

section:last-child .card {
  background-color: #f8f9fa !important;
  max-width: 800px;
  margin: 0 auto;
}

section:last-child .btn-primary {
  background-color: #d2aa97 !important;
  border-color: #d2aa97 !important;
}

section:last-child .btn-primary:hover {
  background-color: #c49a86 !important;
  border-color: #c49a86 !important;
}

.text-danger {
  color: #dc3545 !important;
}
</style>