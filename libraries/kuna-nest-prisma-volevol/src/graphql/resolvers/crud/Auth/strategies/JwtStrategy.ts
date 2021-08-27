import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { JwtDto } from "src/graphql/resolvers/inputs/JwtDto";
import { AuthService } from "../AuthService";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(private readonly service: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'KUNA-IVAN-AUTH'
        })
    }

    async validate(payload: JwtDto) {
        const user = await this.service.validateUser(payload.userId)
        if (!user) {
            throw new UnauthorizedException()
        }

        return user
    }

}