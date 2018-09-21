const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false
});
const genSlug = title => title.replace(/\s+/g, "_").replace(/\W/g, "");

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
    defaultValue: null
  }
});

Page.beforeValidate((pageInstance) => {
  pageInstance.slug = genSlug(pageInstance.title);
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
});
// module.exports = {
//   db
// }
module.exports = { Page, User, db };
