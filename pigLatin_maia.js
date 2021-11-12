function pigLatin(word) {
    var vowelRegEx = /[aeiou]/
    var vowelPosition = word.search(vowelRegEx)
    console.log(vowelPosition)
    var sliceIndex = vowelPosition > 0 ? vowelPosition : 0
    var affix = vowelPosition > 0 ? "way" : "ay"
    var prefix = word.slice(sliceIndex)
    var suffix = word.slice(0, sliceIndex)
    return prefix + suffix + affix
  }

  console.log(pigLatin('monsterkiller'))