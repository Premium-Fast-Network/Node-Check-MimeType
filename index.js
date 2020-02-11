const url = require('url')
const path = require('path')
const mime = require('mime-types')

// const urlData = 'ubuntu-gnome-16.04.rar'
// const urlData = 'ubuntu-gnome-16.zip'
const urlData = 'ubuntu-gnome-16.04.5-desktop-i386.iso'

const parse = url.parse(urlData)
const fileExtention = path.extname(parse.pathname)
console.log(fileExtention)

const mimetype = mime.lookup(urlData)
console.log(mimetype)