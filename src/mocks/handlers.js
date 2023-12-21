import { rest } from "msw";

const baseURL = 'https://rest-framework-v2-e5f7a43eadcc.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        pk: 3,
        username: "karoliusz",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image: "https://res.cloudinary.com/dnblfoxuu/image/upload/v1/media/images/profile_vstooq"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx)=> {
    return res(ctx.status(200));
  })
];