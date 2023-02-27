const textArea = document.querySelector('.text-encrypt')
const message = document.querySelector('#encrypted-text')
const noText = document.querySelector('.no-text')
const encryptedTextArea = document.querySelector('#encrypted-text-area')

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncrypt() {
  const encryptedText = encrypt(textArea.value)
  noText.style.display = 'none'
  encryptedTextArea.style.display = 'flex'
  message.value = encryptedText
  textArea.value = ''
}

function encrypt(encryptedString) {
  let encryptMatrix = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ]
  encryptedString = encryptedString.toLowerCase()

  for (let i = 0; i < encryptMatrix.length; i++) {
    if (encryptedString.includes(encryptMatrix[i][0])) {
      encryptedString = encryptedString.replaceAll(
        encryptMatrix[i][0],
        encryptMatrix[i][1]
      )
    }
  }

  return encryptedString
}

function btnDecrypt() {
  const decryptedText = decrypt(textArea.value)
  noText.style.display = 'none'
  encryptedTextArea.style.display = 'flex'
  message.value = decryptedText
  textArea.value = ''
}

function decrypt(decryptedString) {
  let encryptMatrix = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ]
  decryptedString = decryptedString.toLowerCase()

  for (let i = 0; i < encryptMatrix.length; i++) {
    if (decryptedString.includes(encryptMatrix[i][1])) {
      decryptedString = decryptedString.replaceAll(
        encryptMatrix[i][1],
        encryptMatrix[i][0]
      )
    }
  }

  return decryptedString
}
