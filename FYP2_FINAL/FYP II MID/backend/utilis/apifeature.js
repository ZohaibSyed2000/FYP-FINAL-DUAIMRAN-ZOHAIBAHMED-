class Apifeature {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  Search() {
    const keyword = this.queryStr.keyword
      ? {
          car_name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    //   Removing some fields for category
    const removeFields = ["keyword", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // Filter For Price and Rating

    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    //  console.log((queryStr))
    const lowercase = JSON.parse(queryStr);
    this.query = this.query.find(lowercase);
    // console.log(this)

    return this;
  }
  paginate() {
    const main = this.queryStr.page;
    if (main === "no") {
      this.query = this.query;
    } else {
      let page = parseInt(main) || 1;
      const limit = 2;
      const skip = (page - 1) * limit;
      console.log(page);

      this.query = this.query.skip(skip).limit(limit);
    }
    return this;
  }
}
module.exports = Apifeature;
