import User from "../../../models/user";
import handleRouteError from "../../../utils/handleRouteErrors";

const getUsers = handleRouteError(async (req, res) => {
    const users = await User.aggregate([
        { "$lookup": {
            "from": "books",
            "let": { "owner": "$_id._id" },
            "pipeline": [
              { "$match": {
                "$expr": { "$eq": [ "$$owner", "$_id" ] }
              }},
              { "$count": "count" }
            ],
            "as": "bookCount"    
          }},
          { "$addFields": {
            "bookCount": { "$sum": "$bookCount.count" },
            "password": ""
          }}
    ])
    res.status(200).send(users);
});

export default getUsers;