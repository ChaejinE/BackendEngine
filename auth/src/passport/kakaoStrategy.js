const passport = require("passport");
const { Strategy: kakaoStrategy } = require("passport-kakao");
const User = require("../models/user");

module.exports = () => {
    passport.use(new kakaoStrategy({
        clientID: process.env.KAKAO_REST_API_KEY,
        callbackURL: "/auth/kakao/callback"
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            console.log(process.env.KAKAO_ID)
            console.log(profile);
            const user = await User.findOne({ 
                where: { snsId: profile.id, provider: "kakao" }
            });
    
            if (user) {
                done(null, user);
            } else {
                const user = await User.create({
                    email: profile._json?.kakao_account?.email || null,
                    nickName: profile.displayName,
                    snsId: profile.id,
                    provider: "kakao"
                })
                done(null, user);
            }
        } catch (error) {
            console.error(error);
            done();
        }
    }))
}
