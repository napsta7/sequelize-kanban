import jwt from "jsonwebtoken";
export const authenticateToken = (req, res, next) => {
    // TODO: verify the token exists and add the user data to the request object✅
    const authHeader = req.headers.authorization; //Getting the authorization from the headers
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        const secretKey = process.env.JWT_SECRET_KEY || "";
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403);
            }
            req.user = user;
            return next();
        });
    }
    else {
        res.status(401);
    }
};
