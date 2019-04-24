const slugify = require(`@sindresorhus/slugify`)

module.exports.createPath = path => slugify(path.replace(`.md`, ``))
