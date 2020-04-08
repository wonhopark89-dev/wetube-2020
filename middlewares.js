import routes from "./routers";

export const localMiddleware = (req,res,next) => {
    // locals is function kind of express.
    res.locals.siteName = "Wetube";
    // 변수를 넘겨줄 수 있음
    res.locals.routes = routes;
    // 라우터와 커넥션을 위해서 next
    res.locals.user = {
        isAuthenticated: true,
        id: 1
      };
    next();
}