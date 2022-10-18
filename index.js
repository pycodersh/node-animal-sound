const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q.q)
    console.log(q.name)
    console.log(q.age)
    res.json({'userid':q.name})
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params
    if (name=="dog"){
        res.send({'sound':'멍멍'})
    }else if(name=="cat"){
        res.send({'sound':'야옹'})
    }else if(name=="pig"){
        res.send({'sound':'꿀꿀'})
    }else{
        res.send({'sound':'알수없음'})
    }

})


app.get('/pig', (req, res) => {
    res.send('<a href="https://www.youtube.com/watch?v=57Zj5dLCib0&t=1380s">조코딩유투브가기</a>')
})

app.get('/cow', (req, res) => {
    res.send({'sound':'음메'})
})
    


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})