module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("Orderdetail", {
      
      Productcode: {
        type: Sequelize.INTEGER
      },
      Productname: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.INTEGER
      },
      Quantity: {
        type: Sequelize.INTEGER
      },
      Totalamount:{
        type: Sequelize.INTEGER 
        
      }
     
    },
    {
      timestamps: false,
    });
    return Product;
    
};