const React = require('react')
const Container = require('../component/container.jsx')

console.log('Container', Container)
module.exports = function (reactData) {
    return <Container
        columns={reactData}
        filt={() => { }}
        sort={() => { }}
    />
}