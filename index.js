var level = require('level')

function LevelState(path, options) {
	this.db = level(path || './raft.db', options)
}

LevelState.prototype.execute = function (entry, callback) {
	this.db.batch([entry], callback)
}

module.exports = LevelState
