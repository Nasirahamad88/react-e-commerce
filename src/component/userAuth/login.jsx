import React from 'react'

function Login() {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
    <div class="bg-white p-8 rounded shadow-md w-full sm:w-96">

<h2 class="text-2xl font-bold mb-6">Login</h2>

<form action="#" method="post">



<div class="mb-4">
  <label for="email" class="block text-gray-600 text-sm font-medium mb-2">Email</label>
  <input type="email" id="email" name="email" class="w-full border p-2 rounded focus:outline-none focus:border-blue-500"/>
</div>

<div class="mb-6">
  <label for="password" class="block text-gray-600 text-sm font-medium mb-2">Password</label>
  <input type="password" id="password" name="password" class="w-full border p-2 rounded focus:outline-none focus:border-blue-500"/>
</div>

<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>

</form>

</div>
  </div>
  )
}

export default Login