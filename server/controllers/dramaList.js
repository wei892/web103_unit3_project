import {pool} from '../config/database.js'

const getDramaList = async (req, res) => {
    const selectQuery = 'SELECT * FROM dramalist ORDERBY title ASC'
    const results = await pool.query(selectQuery)
    res.status(200).json(results.rows)
}

const getDramaListByCategory = async (req, res) => {
    const category = req.params.category
    const selectQuery = `SELECT * FROM dramalist WHERE category = ${category}`
    const results = await pool.query(selectQuery)
    res.status(200).json(results.rows)

}

const getDramaById = async (req, res) => {
    const dramaId = req.params.dramaId
    const selectQuery = `SELECT * from dramalist WHERE id = ${dramaId}`
    const results = await pool.query(selectQuery)
    res.status(200).json(results.rows[0])
}

export default {
    getDramaList,
    getDramaListByCategory,
    getDramaById
}