const tplReplace = require('../util')
const {getOptions} = require('loader-utils')

function tplLoader(source){
    source = source.replace(/\s+/g,'')
    const {log} = getOptions(this)

    const _log = log ? `console.log('compiled the file which is from ${this.resourcePath}')` :  '';
    console.log(log)

    return `
        export default (options) => {
            ${tplReplace.toString()}
            ${_log.toString()}
            return tplReplace('${source}',options)
        }
    `

}


module.exports = tplLoader