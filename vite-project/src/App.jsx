import React, { useState } from 'react'

const App = () => {
  const [inputString, setInputString] = useState('')
  const [result, setResult] = useState(null)

  const handleCheckPalindrome = () => {

    const str = inputString.toLowerCase()

   
    let clean = ''
    for (let ch of str) {
      if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
        clean += ch
      }
    }

  
    let left = 0
    let right = clean.length - 1
    let isPalindrome = true

    while (left < right) {
      if (clean[left] !== clean[right]) {
        isPalindrome = false
        break
      }
      left++
      right--
    }

    setResult(isPalindrome)
  }


  const handleClear = () => {
    setInputString('')
    setResult(null)
  }

  

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
        Welcome to Palindrome
      </h1>

      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <div className='space-y-4'>
          <input
            type='text'
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
            placeholder='Enter a string to check'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />

           <div className='flex gap-2'>
            <button
              onClick={handleCheckPalindrome}
              className='flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out'
            >
              Check Palindrome
            </button>

            <button
              onClick={handleClear}
              className='flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out'
            >
              Clear
            </button>
          </div>

          {result !== null && (
            <div
              className={`mt-4 text-center font-semibold text-lg ${
                result ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {result ? ' It is a palindrome' : ' Not a palindrome'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
