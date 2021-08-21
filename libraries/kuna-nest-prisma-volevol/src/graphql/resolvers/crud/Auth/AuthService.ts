import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { UserToken } from "src/graphql/models/userToken.model";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthLoginInput } from "../../inputs/AuthLoginInput";
import { AuthRegisterInput } from "../../inputs/AuthRegisterInput";
import { AuthHelper } from "./AuthHelper";


@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    public async login(input: AuthLoginInput): Promise<UserToken> {
        const found  = await this.prisma.user.findUnique({
            where: {
                email: input.email
            }
        })

        if (!found) {
            throw new NotFoundException(`User with email ${input.email} does not exist`)
        }

        const passwordValid = await AuthHelper.validate(input.password, found.password)

        if (!passwordValid) {
            throw new Error(`Invalid password`)
        }

        return { user: found, token: this.signToken(found.id)}
    }

    public async register(input: AuthRegisterInput): Promise<UserToken> {
        const found  = await this.prisma.user.findUnique({
            where: {
                email: input.email
            }
        })

        if (found) {
            throw new BadRequestException(`Cannot register with email ${input.email}`)
        }

        const password = await AuthHelper.hash(input.password)
        const created = await this.prisma.user.create({
            data: {
                ...input,
                password
            }
        })

        return {user: created, token: this.signToken(created.id)}

    }

    private signToken(id: string): string {
        return 'TEMP TOKEN FOR ID ' + id
    }

}