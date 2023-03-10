/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import ReviewModel from './models/review-model.js';
import UserModel from './models/user-model.js';
import CardModel from './models/card-model.js';
import ItemModel from './models/item-model.js';
import OrderModel from './models/order-model.js';
import ConnectUserOrder from './models/connectUserOrder-modal.js';

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

export const models = {
  userModel: {
    model: UserModel,
    attributes: { exclude: ['token', 'password'] },
  },
};

ItemModel.hasMany(ReviewModel);
ReviewModel.belongsTo(ItemModel);

ItemModel.hasMany(CardModel);
CardModel.belongsTo(ItemModel);

UserModel.hasMany(ReviewModel);
ReviewModel.belongsTo(UserModel);

UserModel.hasMany(CardModel);
CardModel.belongsTo(UserModel);

UserModel.hasMany(OrderModel);
OrderModel.belongsTo(UserModel);

CardModel.belongsToMany(OrderModel, {
  through: ConnectUserOrder,
  include: [ItemModel, models.userModel],
});
OrderModel.belongsToMany(CardModel, {
  through: ConnectUserOrder,
  include: [ItemModel, models.userModel],
});

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/
