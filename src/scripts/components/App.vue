<template>
  <div>
    <h1>{{ heading }}</h1>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        heading: "Staff Directory",
        employees: [
          {
            "firstName": "amelia",
            "lastName": "austin",
            "photoUrl": "https://randomuser.me/api/portraits/thumb/women/9.jpg",
            "email": "amelia.austin@example.com",
            "phone": "(651)-507-3705",
            "department": "Engineering"
          },
          {
            "firstName": "bobbie",
            "lastName": "murphy",
            "photoUrl": "https://randomuser.me/api/portraits/thumb/women/79.jpg",
            "email": "bobbie.murphy@example.com",
            "phone": "(925)-667-7604",
            "department": "Management"
          }
        ]
      }
    }
  }
</script>