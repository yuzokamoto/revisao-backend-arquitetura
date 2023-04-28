import { BaseError } from "./BaseError";

// UnauthorizedError: usada para erros de autenticação ou autorização
// nesse caso o foco é somente para quando o token for inválido

export class UnauthorizedError extends BaseError {
    constructor(
        message: string = "Token inválido"
    ) {
        super(401, message)
    }
}