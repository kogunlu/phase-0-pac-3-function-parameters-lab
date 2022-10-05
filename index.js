function introduction(name){
    console.log(`Hi, my name is ${name}.`)
}
// introduction('Aki')

function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
// introductionWithLanguage('kuday', 'react.js')

function introductionWithLanguageOptional(name, language = 'JavaScript'){
    console.log(`The two values are:  ${name} and ${language}`)
}

function introductionWithLanguageOptional(name, language){
    console.log(`The two values are:  ${name} and ${language}`)
}