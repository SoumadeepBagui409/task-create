const User = require('./model/users');

async function seedDb (){
    const B = new User({
        name: 'B',
        email:'email2@gmail.com',   
        isPaymentMade: true,
        totalEarning: 20
    })

    const A = User({
        name:'A',
        email:'email@gmail.com',
        isPaymentMade:false,
        totalEarning: 0
    })
    A.referredUser.push(B);
    await A.save();
    await B.save();
}
module.exports = seedDb;