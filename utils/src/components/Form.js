import React from 'react'

function Form() {
  return (
<div className="container bg-cover bg-center h-screen " >   
    <div>
        <h1 className='text-white font-bold text-center text-3xl mb-3 animate-pulse'>REGISTRATION FORM</h1>
      
<div class="flex items-center justify-center">
 
  <div class="mx-auto w-full max-w-[550px] bg-white shadow-md rounded-md border p-4 ">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="Address"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Address
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your Address"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="Contact Number"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Contact Number
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your Contact Number"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="Meta Mask Address"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Meta Mask Address
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your Meta Mask Address"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="Price Per Hour"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Price Per Hour
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your Price Per Hour"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="Working Hours"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Working Hours
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your Working Hours"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div>
        <div className="flex justify-center">
        <button
          class="hover:shadow-form rounded-md bg-[green] py-3 px-8 text-base font-semibold text-white outline-none  "
        >
          Submit
        </button>
        </div>
        
      </div>
    </form>
  </div>
</div>
    </div>
</div>
  )
}

export default Form
