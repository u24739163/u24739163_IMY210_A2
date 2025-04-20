<!-- u24739163 Mulondi Makhado -->
<template>
    <button class="btn btn-outline-primary">
        <slot/>
    </button>
</template>

<style scoped>
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
</style>