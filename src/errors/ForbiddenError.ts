import { BaseError } from "./BaseError";

// ForbiddenError: usada para erros de acesso não autorizado a um recurso
// exemplo: uma conta normal tentando acessar recurso de admin

export class ForbiddenError extends BaseError {
    constructor(
        message: string = "Token válido, mas sem permissões suficientes"
    ) {
        super(403, message)
    }
}