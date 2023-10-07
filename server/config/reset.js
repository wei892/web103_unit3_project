const createDramaTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS dramaList;

        CREATE TABLE IF NOT EXISTS dramaList (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            rating VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            dramaReleased TIMESTAMP NOT NULL,
            dramaEnded TIMESTAMP NOT NULL
        )
    `

    try{
        const res = await pool.query(createTableQuery)
        console.log('🎉 dramaList table created successfully')
    }
    catch (error){
        console.error('⚠️ error creating dramaList table', err)
    }
}

// title, category, rating, description, image, show released, show ended

const seedDramaListTable = async () => {
    createDramaTable();

    // giftData.forEach((gift) => {
    //     const insertQuery = {
    //       text: 'INSERT INTO gifts (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    //     }

    //     const values = [
    //         gift.name,
    //         gift.pricePoint,
    //         gift.audience,
    //         gift.image,
    //         gift.description,
    //         gift.submittedBy,
    //         gift.submittedOn
    //     ]

    //     pool.query(insertQuery, values, (err, res) => {
    //         if (err) {
    //             console.error('⚠️ error inserting gift', err)
    //             return
    //         }

    //         console.log(`✅ ${gift.name} added successfully`)
    //     })
    // })
}

seedDramaListTable();
