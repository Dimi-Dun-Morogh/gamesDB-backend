const User = require ('../models/User');

async function createUser(data) {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getUserById(id) {
  try {
    // const user = await User.find({  }); можно использовать чтоб найти  юзера по любому полю, напр
    // узнать если в базе уже такой email
    const user = await User.findById(id);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateUserData(data) {
  try {
    const user = await User.updateOne(
      {email: data.email},
       data,
       {upsert:true});
    return user;
  } catch (err) {
    return Promise.reject(err)
  }
}

module.exports = {
  createUser,
  getUserById,
}