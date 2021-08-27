import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UserToken } from "src/graphql/models/userToken.model";
import { AuthLoginInput } from "../../inputs/AuthLoginInput";
import { AuthRegisterInput } from "../../inputs/AuthRegisterInput";
import { AuthService } from "./AuthService";


@Resolver()
export class AuthResolver {

    constructor(private readonly service: AuthService) {}

    @Mutation(() => UserToken)
    login(@Args({name: 'input', type: () => AuthLoginInput}) input: AuthLoginInput) {
        return this.service.login(input)
    }

    @Mutation(() => UserToken)
    register(@Args({name: 'input', type: () => AuthRegisterInput}) input: AuthRegisterInput) {
        return this.service.register(input)
    }

}