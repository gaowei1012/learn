const mysql = require('mysql')
const {database} = require('../config')
const { vocabulary } = require('./init')

const pool = mysql.createPool({
    host: database.HOST,
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    port: database.PORT
})

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) return reject(err)
            connection.query(sql, values, (err, rows) => {
                if (err) return reject(err)
                resolve(rows)
                connection.release()
            })
        })
    })
}

const createTable = (sql) => {
    return query(sql, [])
}

createTable(vocabulary)

exports.insertVocabulary = (val) => {
    const _sql = "insert into vocabulary set vocabulary_info=?, vocabulary_type=?, create_at=?;"
    return query(_sql, val)
}

exports.findVocabulary = (sql) => {
    const _sql = "select * from vocabulary;"
    return query(_sql)
}

exports.updateVocabulary = (vocabulary_type, id) => {
    console.log(vocabulary_type, id)
    const _sql = `update vocabulary set vocabulary_type=${vocabulary_type} where id=${id};`
    return query(_sql)
}


