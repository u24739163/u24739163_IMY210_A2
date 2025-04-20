<!-- u24739163 Mulondi Makhado -->
<template>
    <main class="container py-5">
      <div class="row">
        <!-- Left Column (Contact Info) -->
        <div class="col-lg-6">
          <h1 class="display-4 mb-4">Get In Touch</h1>
          <p class="lead mb-5">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out to me through any of these channels.
          </p>
          
          <div class="mb-5">
            <h3 class="mb-4">Contact Information</h3>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="bi bi-envelope me-2"></i> u24739163@tuks.co.za
              </li>
              <li class="mb-3">
                <i class="bi bi-phone me-2"></i> (081) 345 9752
              </li>
              <li class="mb-3">
                <i class="bi bi-geo-alt me-2"></i> Preoria, South Africa
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Right Column (Contact Form) -->
        <div class="col-lg-6">
          <div class="card shadow">
            <div class="card-body p-5">
              <h3 class="mb-4">Send Me a Message</h3>
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input v-model="form.name" type="text" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea v-model="form.message" class="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                  <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-1"></span>
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>
                <div v-if="submitStatus" class="mt-3 alert" :class="submitStatus.type">
                  {{ submitStatus.message }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const submitForm = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  // Sends the form info to the send-emails API which is used to send the info to the Mailersend API
  try {
    const { data } = await $fetch('/api/send-email', {
      method: 'POST',
      body: form
    })

    submitStatus.value = {
      type: 'alert-success',
      message: 'Thank you! Your message has been sent. You should receive a confirmation email shortly.'
    }

    // Resets the form
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    submitStatus.value = {
      type: 'alert-danger',
      message: error.data?.message || 'Failed to send message. Please try again later.'
    }
  } finally {
    isSubmitting.value = false
  }
}

</script>
  
<style scoped>
.btn-outline-primary {
  color: #dbc5bb !important;
  border-color: #dbc5bb !important;
}

.btn-outline-primary:hover {
  background-color: #dbc5bb !important;
  color: white !important;
}

.btn-primary {
  background-color: #dbc5bb !important;
  border-color: #dbc5bb !important;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  padding: 10px;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 10px;
}

.spinner-border {
  vertical-align: text-top;
}
</style>