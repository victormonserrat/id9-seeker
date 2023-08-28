const romanNumeral = (number: number) => {
  let value = 'M'.repeat(number / 1000)

  number %= 1000
  value += 'CM'.repeat(number / 900)
  number %= 900
  value += 'D'.repeat(number / 500)
  number %= 500
  value += 'CD'.repeat(number / 400)
  number %= 400
  value += 'C'.repeat(number / 100)
  number %= 100
  value += 'XC'.repeat(number / 90)
  number %= 90
  value += 'L'.repeat(number / 50)
  number %= 50
  value += 'XL'.repeat(number / 40)
  number %= 40
  value += 'X'.repeat(number / 10)
  number %= 10
  value += 'IX'.repeat(number / 9)
  number %= 9
  value += 'V'.repeat(number / 5)
  number %= 5
  value += 'IV'.repeat(number / 4)
  number %= 4
  value += 'I'.repeat(number)

  return value
}

export default romanNumeral
